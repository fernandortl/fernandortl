import React, { useMemo, useContext, useState, useCallback } from 'react'

import { createMuiTheme } from '@material-ui/core/styles'

const defaultTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#39aee2',
      light: '#60bee7',
      dark: '#27799e',
      contrastText: '#fff',
    },
    secondary: {
      main: '#F44336',
      light: '#ff6a5f',
      dark: '#9500ae',
      contrastText: '#fff',
    },
  },
})

const Context = React.createContext()

function ThemeProvider(props) {
  const [theme, setTheme] = useState(defaultTheme)
  const value = useMemo(() => {
    return { theme, setTheme }
  }, [theme])
  console.log(theme)
  return <Context.Provider value={value} {...props} />
}

function useTheme() {
  const { theme, setTheme } = useContext(Context)
  const changePaletteType = useCallback(
    type => {
      setTheme(
        createMuiTheme({
          palette: {
            type: type,
            primary: theme.palette.primary,
            secondary: theme.palette.secondary,
          },
        })
      )
    },
    [setTheme, theme.palette.primary, theme.palette.secondary]
  )
  const changePalettePrimaryColor = useCallback(
    primary =>
      setTheme(
        createMuiTheme({
          palette: {
            type: theme.palette.type,
            primary: primary,
            secondary: theme.palette.secondary,
          },
        })
      ),
    [setTheme, theme.palette.secondary, theme.palette.type]
  )
  const changePaletteSecondaryColor = useCallback(
    secondary =>
      setTheme(
        createMuiTheme({
          palette: {
            type: theme.palette.type,
            primary: theme.palette.primary,
            secondary: secondary,
          },
        })
      ),
    [setTheme, theme.palette.primary, theme.palette.type]
  )
  return {
    theme,
    changePaletteType,
    changePalettePrimaryColor,
    changePaletteSecondaryColor,
  }
}

export { ThemeProvider, useTheme }
