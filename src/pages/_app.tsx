import '../styles/globals.css';
import { Provider } from 'react-redux';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import type { AppProps } from 'next/app';
import store from '../app/store';

const theme = createTheme({
  typography: {
    fontSize: 12,
  },
});

const MyApp: React.VFC = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </Provider>
);

export default MyApp;
