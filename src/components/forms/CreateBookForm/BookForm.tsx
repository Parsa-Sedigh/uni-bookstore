import {Form} from "../../Form/Form";
import {Field} from "../../Field/Field";
import {schema} from "./create-boook-form-schema";
import styles from './CreateBookForm.module.scss';
import {Button} from "@mui/material";
import axios from "axios";
import {useRef} from "react";
import {BookFormDefaultValues, BookFormProps} from "./BookForm.types";
import clsx from "clsx";

const DEFAULT_VALUES: BookFormDefaultValues = {
    title: '',
    authors: '',
    image: '',
    price: ''
};

export const BookForm = ({shouldUpdate, book, classes}: BookFormProps) => {
    const formRef = useRef();

    const onValidSubmit = async (data: BookFormDefaultValues) => {
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
        <Form classes={{root: clsx(styles.form, classes?.root)}}
              onValidSubmit={onValidSubmit}
              defaultValues={book || DEFAULT_VALUES}
              schema={schema}
              ref={formRef}>
            <Field name="title" label="عنوان کتاب" />
            <Field name="authors" label="نویسنده(ها)" />
            <Field name="image" label="آدرس تصویر" />
            <Field name="price" type="number" label="قیمت(ریال)" />

            <Button type="submit" variant="contained" classes={{root: styles.btn}}>
                {shouldUpdate ? 'تغییر مشخصات کتاب' : 'ایجاد کتاب'}
            </Button>
        </Form>
    );
};