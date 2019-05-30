import React from 'react'

import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import Routes from './routes'

import { useTheme } from './contexts/theme'
import { Container } from '@material-ui/core'

function App() {
  const { theme } = useTheme()
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Container fixed style={{ padding: 4 }}>
        <Routes />
      </Container>
    </MuiThemeProvider>
  )
}

export default App
