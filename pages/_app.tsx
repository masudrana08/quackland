import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/navbar.css'
import '../styles/header.css'
import '../styles/journey.css'
import '../styles/roadmap.css'
import '../styles/faq.css'
import '../styles/team.css'
import '../styles/footer.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
