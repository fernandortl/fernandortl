import React from 'react'
import { UserProvider } from '../../contexts/user'
import { useTheme } from '../../contexts/theme'

import {
  Grid,
  Paper,
  Switch,
  Typography,
  Grow,
  makeStyles,
} from '@material-ui/core'

import Info from '../../templates/user/Info'
import Skill from '../../templates/user/Skill'

const useStyles = makeStyles({
  footer: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
  },
})

function Home(props) {
  const classes = useStyles()

  const { changePaletteType } = useTheme()
  return (
    <Grid container spacing={1}>
      <UserProvider>
        <Grow in timeout={500}>
          <Grid item xs={12}>
            <Info />
          </Grid>
        </Grow>
        <Grow in timeout={1000}>
          <Grid item xs={12}>
            <Skill />
          </Grid>
        </Grow>
        <Grow in timeout={1500}>
          <Grid item xs={12} />
        </Grow>
      </UserProvider>
      <footer className={classes.footer}>
        <Paper style={{ padding: 20 }}>
          <Typography variant="caption" display="block">
            Footer
          </Typography>
          <Typography variant="caption">Light theme</Typography>
          <Switch
            onChange={e => {
              changePaletteType(e.target.checked ? 'light' : 'dark')
            }}
          />
        </Paper>
      </footer>
    </Grid>
  )
}

export default Home
