import {Field} from "../../Field/Field";
import {Button} from "@mui/material";
import {Form} from '../../Form/Form';
import styles from './LoginForm.module.scss';
import {Values} from "./LoginForm.types";
import {schema} from "./login-form-schema";

const DEFAULT_VALUES: Values = {
    username: '',
    password: '',
};

const LoginForm = () => {
    const onValidSubmit = (data: Values) => {
        console.log('data: ', data)
    };

    return (
        <Form classes={{root: styles.form}} onValidSubmit={onValidSubmit} defaultValues={DEFAULT_VALUES} schema={schema}>
            <Field name="username" label="نام کاربری" dir="ltr" classes={{root: styles.field}} />
            <Field name="password" label="رمز عبور" type="password" dir="ltr" classes={{root: styles.field}} />
            <Button type="submit" variant="contained" classes={{root: styles.btn}}>ورود به پنل مدیریت</Button>
        </Form>
    );
};

export {LoginForm};