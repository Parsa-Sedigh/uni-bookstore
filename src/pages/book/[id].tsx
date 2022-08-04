import {GetServerSideProps, NextPage} from "next";
import Image from "next/image";
import axios from "axios";
import {loader} from "../../utils/img-loader";
import {Button, Card, Typography} from "@mui/material";
import styles from './BookDetailPage.module.scss';
import {ShoppingBasketRounded} from '@mui/icons-material';

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
        <Card className={styles.container}>
            <Image src={book.image} className={styles.img} loader={loader} alt={book.title} width={200} height={200} />

            <div className={styles.info}>
                <Typography classes={{root: styles.title}}>{book.title}</Typography>
                <Typography classes={{root: styles.price}} color="text.secondary">
                    قیمت:
                    {book.price}
                    ریال
                </Typography>
                <Typography classes={{root: styles.authors}}>نویسنده(ها): {book.authors.join(',')}</Typography>
                <Button variant="contained" classes={{root: styles['purchase-btn']}}>
                    <ShoppingBasketRounded  />
                    خرید
                </Button>
            </div>
        </Card>
    );
};

export default BookDetailPage;