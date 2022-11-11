import '@styles/fonts.css'
import 'antd/dist/antd.css'
import 'antd-css-utilities/utility.min.css'
import 'wow.js/css/libs/animate.css'
import { GlobalStyle } from '@styles/Global.style'
import { lightTheme } from '@styles/Theme.style'
import { ThemeCustomProvider } from 'src/common/context/ThemeContext'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.WOW = require('wow.js')
    }
    new WOW().init()
    setMounted(true)
  }, [])

  return (
    <>
      <ThemeCustomProvider initialTheme={lightTheme}>
        {/* <Image
          className='bg-image-wrapper'
          src={'/bg.jpg' || ''}
          alt='Picture of the author'
          layout='fill'
          objectFit='cover'
        /> */}
        <GlobalStyle />
        <div style={{ visibility: mounted ? 'visible' : 'hidden' }}>
          <Component {...pageProps} />
        </div>
      </ThemeCustomProvider>
    </>
  )
}
