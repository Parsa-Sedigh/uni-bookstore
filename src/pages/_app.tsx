import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "../theme";
import {Layout} from "../layouts/Layout/Layout";
import {RTL} from "../components/RTL/RTL";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <RTL>
          <ThemeProvider theme={theme}>
              <CssBaseline />
                  <Layout>
                      <Component {...pageProps} />
                  </Layout>
          </ThemeProvider>
      </RTL>
  );
}

export default MyApp;
