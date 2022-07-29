import {LayoutProps} from "./Layout.types";
import {AppBar, Toolbar, Link as MuiLink} from "@mui/material";
import Link from 'next/link';
import styles from './Layout.module.scss';

export const Layout = ({children}: LayoutProps) => {

    return (
        <>
            <AppBar position="sticky">
                <Toolbar variant="dense">
                    <Link href="/" passHref>
                        <MuiLink classes={{root: styles.link}}>خانه</MuiLink>
                    </Link>
                    <Link href="/dashboard" passHref>
                        <MuiLink classes={{root: styles.link}}>داشبورد</MuiLink>
                    </Link>
                    <Link href="/dashboard/create-book" passHref>
                        <MuiLink classes={{root: styles.link}}>افزودن کتاب</MuiLink>
                    </Link>
                </Toolbar>
            </AppBar>
            <main className={styles.main}>{children}</main>
        </>
    );
};