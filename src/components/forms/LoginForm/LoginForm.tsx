import {Field} from "../../Field/Field";
import {Button, Snackbar} from "@mui/material";
import {Form} from '../../Form/Form';
import styles from './LoginForm.module.scss';
import {Values} from "./LoginForm.types";
import {schema} from "./login-form-schema";
import axios from "axios";
import {ReactNode, useState} from "react";
import {useRouter} from "next/router";

const DEFAULT_VALUES: Values = {
    username: '',
    password: '',
};

const LoginForm = () => {
    const [snackbar, setSnackbar] = useState<{ isOpen: boolean; data: { message: ReactNode } | null; }>({
        isOpen: false,
        data: null
    });
    const {push} = useRouter();

    const onCloseSnackbar = () => {
        setSnackbar({isOpen: false, data: null});
    };

    const onValidSubmit = async (data: Values) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, data);
            console.log('res: ', response);
            localStorage.setItem('access_token', response.data.access_token);
            setSnackbar({isOpen: true, data: {message: 'با موفقیت وارد شدید.'}});
            push('/dashboard');
        } catch (error) {
            console.error(error);
            setSnackbar({isOpen: true, data: {message: 'نام کاربری یا رمز عبور اشتباه است.'}});
        }
    };

    return (
        <>
            <Form classes={{root: styles.form}} onValidSubmit={onValidSubmit} defaultValues={DEFAULT_VALUES}
                  schema={schema}>
                <Field name="username" label="نام کاربری" dir="ltr" classes={{root: styles.field}}/>
                <Field name="password" label="رمز عبور" type="password" dir="ltr" classes={{root: styles.field}}/>
                <Button type="submit" variant="contained" classes={{root: styles.btn}}>ورود به پنل مدیریت</Button>
            </Form>

            <Snackbar ContentProps={{classes: {message: styles.snackbar__message}}}
                      open={snackbar.isOpen}
                      autoHideDuration={6000}
                      onClose={onCloseSnackbar}
                      message={snackbar.data?.message}/>
        </>
    );
};

export {LoginForm};