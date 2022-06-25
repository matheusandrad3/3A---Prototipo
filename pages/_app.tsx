import { AppProps } from 'next/app';
import initMyFirebase from '../firebase/firebaseinit'
import '../styles/globals.css'

 function App({ Component, pageProps }: AppProps) {
  
      initMyFirebase();

      return <Component {...pageProps} />;
  
}

export default App;

