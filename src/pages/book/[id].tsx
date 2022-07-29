import {GetServerSideProps, NextPage} from "next";
import Image from "next/image";
import axios from "axios";
import {loader} from "../../utils/img-loader";
import {Typography} from "@mui/material";
import styles from './BookDetailPage.module.scss';

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    console.log('params: ', params);
    try {
        const response = await axios.get(`http://localhost:3001/books/${params?.id}`);
        console.log('book is: ', response.data);

        return {props: {book: response.data, error: null}};
    } catch (err) {
        console.error(err);

        return {props: {book: null, error: err}};
    }
}

const BookDetailPage: NextPage = (props: {book?: any, error?: string | null}) => {
    const {book, error} = props;
    console.log('BookDetailPage: ', props);

    return (
        <div>
            <Image src={book.image} loader={loader} alt={book.title} width={200} height={200} />
            <Typography classes={{root: styles.title}}>{book.title}</Typography>
            <Typography color="text.primary">{book.price} ریال</Typography>
        </div>
    );
};

export default BookDetailPage;