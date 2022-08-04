import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "../theme";
import {Layout} from "../layouts/Layout/Layout";
import {RTL} from "../components/RTL/RTL";
import {DialogProvider} from "../contexts/dialog-context";
import {useState} from "react";

function MyApp({Component, pageProps}: AppProps) {
    const [fetchBooks, setFetchBooks] = useState(null);

    return (
        <RTL>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <DialogProvider>
                    <Layout setFetchBooks={setFetchBooks}>
                        <Component {...pageProps} fetchBooks={fetchBooks} />
                    </Layout>
                </DialogProvider>
            </ThemeProvider>
        </RTL>
    );
}

export default MyApp;
