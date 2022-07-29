import {Form} from "../../Form/Form";
import {CreateBookFormDefaultValues} from "./CreateBookForm.types";
import {Field} from "../../Field/Field";
import {schema} from "./create-boook-form-schema";
import styles from './CreateBookForm.module.scss';
import {Button} from "@mui/material";
import axios from "axios";
import {useRef} from "react";

const DEFAULT_VALUES: CreateBookFormDefaultValues = {
    title: '',
    authors: '',
    image: '',
    price: ''
};

export const CreateBookForm = () => {
    const formRef = useRef();

    const onValidSubmit = async (data: CreateBookFormDefaultValues) => {
        console.log('hello', {data});
        try {
            const response = await axios.post('http://localhost:3001/books', {
                ...data,
                authors: data.authors.split(' '),
                price: parseInt(data.price)
            });

            formRef.current.reset();
            console.log('res: ', response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Form classes={{root: styles.form}} onValidSubmit={onValidSubmit} defaultValues={DEFAULT_VALUES} schema={schema} ref={formRef}>
            <Field name="title" label="عنوان کتاب" />
            <Field name="authors" label="نویسنده(ها)" />
            <Field name="image" label="آدرس تصویر" />
            <Field name="price" type="number" label="قیمت(ریال)" />

            <Button type="submit" variant="contained" classes={{root: styles.btn}}>ایجاد کتاب</Button>
        </Form>
    );
};