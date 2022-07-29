import {NextPage} from "next";
import {CreateBookForm} from "../../../components/forms/CreateBookForm/CreateBookForm";
import styles from './CreateBook.module.scss';
import {Paper} from "@mui/material";

const CreateBook: NextPage = () => {
    return (
        <div className={styles.container}>
            <Paper classes={{root: styles['form-container']}}>
                <CreateBookForm />
            </Paper>
        </div>
    );
};

export default CreateBook;