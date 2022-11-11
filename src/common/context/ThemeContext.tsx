import { ITheme } from '@styles/Theme.style'
import { createContext, useContext, useMemo, useState } from 'react'
import { ThemeProvider } from 'styled-components'

type State = {
  theme: ITheme
}

type Dispatch = {
  onChangeTheme: (theme: ITheme) => void
}

const ThemeStateContext = createContext<State>({} as State)
const ThemeDispatchContext = createContext<Dispatch>({} as Dispatch)

export const ThemeCustomProvider = ({ children, initialTheme }) => {
  const [state, setState] = useState<State>({ theme: initialTheme } as State)

  const dispatch = useMemo(() => {
    const onChangeTheme = (theme) => {
      setState((prevState) => ({ ...prevState, theme }))
    }

    return { onChangeTheme }
  }, [])

  return (
    <ThemeStateContext.Provider value={state}>
      <ThemeDispatchContext.Provider value={dispatch}>
        <ThemeProvider theme={state.theme}>{children}</ThemeProvider>
      </ThemeDispatchContext.Provider>
    </ThemeStateContext.Provider>
  )
}

export const useThemeDispatch = () => useContext(ThemeDispatchContext)
export const useThemeState = () => useContext(ThemeStateContext)
