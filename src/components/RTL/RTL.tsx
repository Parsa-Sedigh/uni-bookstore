import {CacheProvider} from "@emotion/react";
import {ReactNode} from "react";
import createCache from "@emotion/cache";
import rtlPlugin from 'stylis-plugin-rtl';
import {prefixer} from 'stylis';
import {StyledEngineProvider} from "@mui/material/styles";

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

export const RTL = ({children}: { children: ReactNode }) => {
    return (
        <CacheProvider value={cacheRtl}>
            <StyledEngineProvider injectFirst>
                {children}
            </StyledEngineProvider>
        </CacheProvider>
    );
};