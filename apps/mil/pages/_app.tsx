import React from 'react'
import { SvgStyleProvider } from '../containers/svgStyleContainer'
import '../styles/global.css'
function MyApp({ Component, pageProps }) {
  return (
    <SvgStyleProvider>
      <Component {...pageProps} />
    </SvgStyleProvider>
  )
}
export default MyApp
