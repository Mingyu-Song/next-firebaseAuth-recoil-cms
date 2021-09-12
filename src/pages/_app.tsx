import { AuthUserProvider } from '../context/AuthUserContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
import styled, { ThemeProvider } from 'styled-components';
import { ParallaxProvider } from 'react-scroll-parallax';
import { RecoilRoot } from 'recoil';

import theme from 'lib/styles/theme';
import CommonHead from 'components/head/CommonHead';
import GlobalStyle from 'lib/styles/globalStyles';

import ModalRoot from 'components/modal/ModalRoot';
import { useState } from 'react';
import Box from 'components/box/Box';

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
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
        </Hydrate>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp;

const H1 = styled(Box)``;
