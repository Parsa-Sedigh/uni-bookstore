import {LayoutProps} from "./Layout.types";
import {
    AppBar,
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    Link as MuiLink,
    Toolbar
} from "@mui/material";
import Link from 'next/link';
import styles from './Layout.module.scss';
import {useDialogState} from "../../hooks/useDialogState";
import {BookForm} from "../../components/forms/CreateBookForm/BookForm";
import {useDialogUpdater} from "../../hooks/useDialogUpdater";
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import {useState} from "react";

export const Layout = ({children, setFetchBooks}: LayoutProps) => {
    const dialogState = useDialogState();
    const dialogUpdater = useDialogUpdater();
    let accessToken = '';

    if (typeof window !== 'undefined') {
        accessToken = localStorage.getItem('access_token');
    }

    const onCloseDialog = () => {
        dialogUpdater({type: 'close'});
    };

    const onRemoveBook = async () => {
        try {
            await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/books/${dialogState.data.id}`);
            setFetchBooks({});
            onCloseDialog();
        } catch (error) {
            console.log('error in removing book: ', error);
        }
    };

    return (
        <>
            <AppBar position="sticky">
                <Toolbar variant="dense">
                    <Link href="/" passHref>
                        <MuiLink classes={{root: styles.link}}>خانه</MuiLink>
                    </Link>
                    {!accessToken && (
                        <Link href="/login" passHref>
                            <MuiLink classes={{root: styles.link}}>ورود</MuiLink>
                        </Link>
                    )}

                    {!!accessToken && (
                        <>
                            <Link href="/dashboard" passHref>
                                <MuiLink classes={{root: styles.link}}>داشبورد</MuiLink>
                            </Link>
                            <Link href="/dashboard/create-book" passHref>
                                <MuiLink classes={{root: styles.link}}>افزودن کتاب</MuiLink>
                            </Link>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <main className={styles.main}>{children}</main>

            <Dialog open={dialogState.isOpen} onClose={onCloseDialog}>
                <DialogTitle>
                    <IconButton onClick={onCloseDialog}><CloseIcon fontSize="large"/></IconButton>
                </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        {dialogState.modalName === 'editBook' &&
                            <BookForm shouldUpdate book={dialogState.data} classes={{root: styles['book-form']}}/>}
                        {dialogState.modalName === 'removeBook' && (
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <p style={{fontSize: '1.5rem'}}>آیا از حذف این کتاب اطمینان دارید؟</p>
                                <Button classes={{root: styles['delete-btn']}} size="large"
                                        onClick={onRemoveBook}>حذف</Button>
                            </div>
                        )}
                    </DialogContentText>


                    {/*<DialogActions>*/}

                    {/*</DialogActions>*/}
                </DialogContent>
            </Dialog>
        </>
    );
};