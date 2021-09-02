import { AuthUserProvider } from "../context/AuthUserContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { ParallaxProvider } from "react-scroll-parallax";

import theme from "styles/theme";
import CommonHead from "components/head/CommonHead";
import GlobalStyle from "styles/globalStyles";
const queryClient = new QueryClient();

import config from "react-reveal/globals";

function MyApp({ Component, pageProps }) {
  config({ ssrFadeout: true });
  return (
    <QueryClientProvider client={queryClient}>
      <AuthUserProvider>
        <ThemeProvider theme={theme}>
          <ParallaxProvider>
            <CommonHead />
            <GlobalStyle />
            <Component {...pageProps} />
          </ParallaxProvider>
        </ThemeProvider>
      </AuthUserProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
