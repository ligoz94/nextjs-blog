export interface ITheme {
  breakpoints?: any
  fontSizes?: any
  fontWeights?: any
  lineHeights?: any
  zIndex?: any
  borderRadius?: any
  colors?: any
  name?: string
}

export const ThemeNames = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
}

export const light = {
  name: ThemeNames.LIGHT,
  colors: {
    header: '#fff',
    background: 'hsl(225deg, 25%, 95%)',
    card_bg: 'hsl(0deg, 0%, 100%)',
    footer: 'hsl(0, 1%, 38%)',
    text: 'hsl(222deg, 22%, 5%)',
    gray_100: 'hsl(225deg, 25%, 95%)',
    gray_200: 'hsl(225deg, 16%, 90%)',
    gray_300: 'hsl(225deg, 8%, 80%)',
    gray_400: 'hsl(225deg, 8%, 70%)',
    gray_500: 'hsl(225deg, 7%, 60%)',
    gray_600: 'hsl(225deg, 15%, 50%)',
    gray_700: 'hsl(225deg, 12%, 40%)',
    gray_900: 'hsl(225deg, 25%, 20%)',
    gray_1000: 'hsl(225deg, 15%, 15%)',
    primary: 'hsl(333deg, 100%, 45%)',
    primary_light: 'hsl(263deg 450% 56% / 40%)',
    secondary: 'hsl(333deg, 100%, 45%)',
    tertiary: 'hsl(255deg, 85%, 30%)',
    decorative: 'hsl(200deg, 75%, 65%)',
    white: '#fff',
    card_tag_text: '#fff',
    violet: '#845EC2',
    purple: '#D65DB1',
    pink: '#D65DB1',
    orange: '#FF9671',
    yellow: '#FFC75F',
    lime: '#F9F871',
  },
}

export const dark = {
  name: ThemeNames.DARK,
  colors: {
    header: 'hsl(210deg, 22%, 15%)',
    background: 'hsl(210deg, 30%, 8%)',
    card_bg: 'hsl(210deg, 22%, 15%)',
    footer: 'hsl(0, 0%, 93%)',
    text: 'hsl(0deg, 0%, 100%)',
    gray_100: 'hsl(210deg, 15%, 20%)',
    gray_200: 'hsl(210deg, 15%, 25%)',
    gray_300: 'hsl(210deg, 10%, 40%)',
    gray_400: ' hsl(210deg, 9%, 45%)',
    gray_500: ' hsl(210deg, 8%, 50%)',
    gray_600: 'hsl(210deg, 12%, 55%)',
    gray_700: 'hsl(210deg, 14%, 66%)',
    gray_900: 'hsl(210deg, 25%, 88%)',
    gray_1000: 'hsl(210deg, 25%, 96%)',
    primary: 'hsl(333deg, 100%, 45%)',
    primary_light: 'hsl(263deg 450% 56% / 40%)',
    secondary: 'hsl(333deg, 100%, 52%)',
    tertiary: 'hsl(53deg, 100%, 50%)',
    decorative: 'hsl(200deg, 50%, 60%)',
    white: '#fff',
    card_tag_text: '#ffffff',
    violet: '#845EC2',
    purple: '#D65DB1',
    pink: '#D65DB1',
    orange: '#FF9671',
    yellow: '#FFC75F',
    lime: '#F9F871',
  },
}

export const defaultTheme: ITheme = {
  breakpoints: { xs: '640px', sm: '767px', md: '1024px', lg: '1280px' },
  fontSizes: {
    tiny: '0.875rem',
    normal: '1rem',
    small: '1.125rem',
    medium: '1.375rem',
    large: '1.625rem',
    xLarge: '2rem',
    huge: '2.5rem',
  },
  fontWeights: {
    light: 400,
    medium: 500,
    bold: 600,
    huge: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.3,
    code: 1.6,
  },
  zIndex: { tiny: 1, small: 10, medium: 20, large: 100 },
  borderRadius: {
    small: '10px',
  },
  colors: {
    header: '',
    background: '',
    card_bg: '',
    footer: '',
    text: '',
    gray_100: '',
    gray_200: '',
    gray_300: '',
    gray_400: ' ',
    gray_500: ' ',
    gray_600: '',
    gray_700: '',
    gray_900: '',
    gray_1000: '',
    primary: '',
    secondary: '',
    tertiary: '',
    decorative: '',
    violet: '#845EC2',
    purple: '#D65DB1',
    pink: '#D65DB1',
    orange: '#FF9671',
    yellow: '#FFC75F',
    lime: '#F9F871',
  },
}

export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark }
