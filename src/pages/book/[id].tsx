import {GetServerSideProps, NextPage} from "next";
import Image from "next/image";
import axios from "axios";
import {loader} from "../../utils/img-loader";
import {Button, Card, Typography} from "@mui/material";
import styles from './BookDetailPage.module.scss';
import {ShoppingBasketRounded} from '@mui/icons-material';

export const getServerSideProps: GetServerSideProps = async ({params}) => {
    try {
        const response = await axios.get(`http://localhost:3001/books/${params?.id}`);

        return {props: {book: response.data, error: false}};
    } catch (err) {
        console.error(err);

        return {props: {book: null, error: true}};
    }
}

const BookDetailPage: NextPage = (props: {book?: any, error?: boolean}) => {
    const {book, error} = props;
    console.log('BookDetailPage: ', props);

    return (
        <>
            {error ?
                <Typography className={styles.error}>
                    لطفا دوباره تلاش کنید.
                </Typography>
                :
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
                </Card>}
        </>
    );
};

export default BookDetailPage;