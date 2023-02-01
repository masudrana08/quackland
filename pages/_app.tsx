import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css'
import '../styles/mynavbar.css'
import '../styles/header.css'
import '../styles/journey.css'
import '../styles/roadmap.css'
import '../styles/faq.css'
import '../styles/team.css'
import '../styles/footer.css'
import React, { Component, FunctionComponent, ReactElement } from 'react';
// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

// export default MyApp


type AppProps = {
  Component: any,
  pageProps: any
};

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;
