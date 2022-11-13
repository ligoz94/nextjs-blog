import React, { useState } from 'react'
import Drawer from 'antd/lib/drawer'
import { NavbarStyles } from './Navbar.style'
import { lightTheme, darkTheme, ThemeNames } from '@styles/Theme.style'
import { useThemeDispatch, useThemeState } from 'src/common/context/ThemeContext'
import { SearchOutlined } from '@ant-design/icons'
import { Switch } from 'antd'
import Hamburger from 'hamburger-react'
import useScrollPosition from '@hooks/useScrollPosition'
import { useRouter } from 'next/router'
import Link from 'next/link'
import SearchFullScreen from '@components/SearchFullScreen'

type NavabarProps = {
  className?: string
}

const LineSvgHover = () => {
  return (
    <svg width='58' height='5' viewBox='0 0 58 5' fill='none' className='hover-line'>
      <path
        d='M1 3.18471C4.34436 3.18471 7.48008 1 10.8705 1C13.2525 1 15.1058 1.72336 17.3165 2.34614C20.3083 3.18891 22.9386 4.09106 26.1351 3.62607C28.8438 3.23203 31.8901 3.01248 34.5396 3.59297C35.6272 3.83127 36.5433 3.92663 37.55 3.29505C38.1957 2.88991 39.4841 3.07684 39.6651 3.87985C39.809 4.51858 43.0217 2.41818 43.6827 2.09236C44.6745 1.60342 45.105 1.98753 46.0216 2.48958C47.7503 3.43649 49.2982 3.62537 51.259 3.19575C51.6076 3.11937 52.011 3.20318 52.3669 3.18471C52.8876 3.1577 53.3662 2.78749 53.8777 2.78749C54.9479 2.78749 55.8858 2.39027 57 2.39027'
        stroke='hsl(333deg, 100%, 45%)'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></path>
    </svg>
  )
}

const Navbar: React.FC<NavabarProps> = (props) => {
  const { className } = props
  const [visible, setVisible] = useState<boolean>(false)
  const [searchIsVisible, setSearchIsVisible] = useState<boolean>(false)
  const { onChangeTheme } = useThemeDispatch()
  const { theme } = useThemeState()
  const router = useRouter()

  const handleThemeChange = (value) => {
    onChangeTheme(value ? darkTheme : lightTheme)
  }

  const scrollPosition = useScrollPosition()

  const showMenuFixed = scrollPosition >= 350

  return (
    <NavbarStyles className={className} isFixed={showMenuFixed}>
      {searchIsVisible && <SearchFullScreen closeModal={() => setSearchIsVisible(false)} />}
      <div className='navbar-hamburger'>
        <Hamburger toggled={visible} toggle={setVisible} />
      </div>

      <div className='navbar-logo'>
        <a href=''>Logo</a>
      </div>

      <div className='navbar-content'>
        <Link href='/' as={'/'}>
          <a className={'menu-item '}>
            Home
            {router.pathname == '/' && <LineSvgHover />}
          </a>
        </Link>
        <Link href='/about' as={'/about'}>
          <a className={'menu-item '}>
            About
            {router.pathname == '/about' && <LineSvgHover />}
          </a>
        </Link>

        <div className='menu-item search'>
          <SearchOutlined type='edit' onClick={() => setSearchIsVisible(true)} />
        </div>
        <div className='menu-item switch'>
          <Switch
            defaultChecked={theme && theme.name === ThemeNames.DARK}
            onChange={handleThemeChange}
          />
        </div>
      </div>

      <div className='menu-item search mobile'>
        <SearchOutlined type='edit' onClick={() => console.log('dcc')} />
      </div>

      <Drawer
        title='Basic Drawer'
        placement='right'
        closable={false}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <a href=''>Home</a>
        <a href=''>About</a>
      </Drawer>
    </NavbarStyles>
  )
}

export default Navbar
