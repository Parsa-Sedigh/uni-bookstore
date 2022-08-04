import {NextPage} from "next";
import {BookForm} from "../../../components/forms/CreateBookForm/BookForm";
import styles from './CreateBook.module.scss';
import {Paper} from "@mui/material";

const CreateBook: NextPage = () => {
    return (
        <div className={styles.container}>
            <Paper classes={{root: styles['form-container']}}>
                <BookForm />
            </Paper>
        </div>
    );
};

export default CreateBook;