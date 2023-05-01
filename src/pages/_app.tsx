import '../styles/global.css';
// import '../styles/accomodation/_regiserDestination.scss';
// import '../styles/accomodation/_assignRooms.scss';
import '../styles/globals.scss';

import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient: QueryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
    <ReactQueryDevtools />
  </QueryClientProvider>
);

export default MyApp;
