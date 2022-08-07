import {GetServerSideProps} from "next";
import axios from "axios";
import styles from "./Dashboard.module.scss";
import {BookCard} from "../../components/BookCard/BookCard";
import {useEffect} from "react";
import useRouterRefresh from "../../hooks/useRouterRefresh";
import {BOOKS} from "../../constants";

// export const getServerSideProps: GetServerSideProps = async () => {
//     try {
//         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/books`);
//         console.log('hello: ', response.data);
//
//         return {
//             props: {books: response.data}
//         };
//     } catch (error) {
//         console.log('error: ', error);
//         return {
//             props: {books: [], error: true}
//         };
//     }
// };

const Dashboard = (props: { books?: any[], error?: boolean, fetchBooks: null | {} }) => {
    const {books, fetchBooks} = props;
    const refetch = useRouterRefresh();

    useEffect(() => {
        if (fetchBooks) {
            console.log('refetching ...');
            refetch();
        }
    }, [fetchBooks, refetch]);

    return (
        <div className={styles.container}>
            {BOOKS?.map((book, index) => <BookCard key={book.id}
                                            id={book.id}
                                            title={`${book.title} ${index + 1}`}
                                            image={book.image}
                                            price={book.price}
                                            actions={{edit: true, delete: true}}/>)}
        </div>
    );
};

export default Dashboard;