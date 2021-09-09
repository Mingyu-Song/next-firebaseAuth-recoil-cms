import { AuthUserProvider } from '../context/AuthUserContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import { RecoilRoot } from 'recoil';

import theme from 'lib/styles/theme';
import CommonHead from 'components/head/CommonHead';
import GlobalStyle from 'lib/styles/globalStyles';

const queryClient = new QueryClient();

import config from 'react-reveal/globals';
import ModalRoot from 'components/modal/ModalRoot';

function MyApp({ Component, pageProps }) {
  config({ ssrFadeout: true });
  console.log(theme);
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <AuthUserProvider>
          <ThemeProvider theme={theme}>
            <ParallaxProvider>
              <CommonHead />
              <GlobalStyle />
              <Component {...pageProps} />
              <ModalRoot />
            </ParallaxProvider>
          </ThemeProvider>
        </AuthUserProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;
