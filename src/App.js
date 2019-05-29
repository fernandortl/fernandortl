import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Routes from './routes'

import { useTheme } from './contexts/theme'

function App() {
  const { theme } = useTheme()
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ margin: '5px auto', maxWidth: 500, minWidth: 300 }}>
        <Routes />
      </div>
    </MuiThemeProvider>
  )
}

export default App
