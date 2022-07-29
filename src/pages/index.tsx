import type {GetServerSideProps, NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from "axios";
import {BookCard} from "../components/BookCard/BookCard";

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL as string}/books`);
        console.log('response: ', response.data);

        return {
            props: {books: response.data}
        };
    } catch (error) {
        console.log('error: ', error);
        return {
            props: {error: true}
        };
    }
};

const Home: NextPage = (props: {books?: any[], error?: boolean}) => {
    console.log('Home: ', props);
    const {books} = props;

    return (
        <div className={styles.container}>
            {books?.map((book, index) => <BookCard key={index} id={book.id} title={book.title} image={book.image} price={book.price}/>)}
        </div>
    )
}

export default Home;
