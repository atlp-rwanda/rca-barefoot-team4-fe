import '../styles/global.css';
import '../styles/accomodation/_regiserDestination.scss';
import '../styles/accomodation/_assignRooms.scss';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
