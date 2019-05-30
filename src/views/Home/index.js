import React from 'react'
import { UserProvider } from '../../contexts/user'
import { useTheme } from '../../contexts/theme'

import { Grid, Paper, Switch, Typography, Grow } from '@material-ui/core'

import Info from '../../templates/user/Info'
import Skill from '../../templates/user/Skill'

function Home(props) {
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
          <Grid item xs={12}>
            <Paper style={{ padding: 20 }}>
              <Typography variant="caption">Light theme</Typography>
              <Switch
                onChange={e => {
                  changePaletteType(e.target.checked ? 'light' : 'dark')
                }}
              />
            </Paper>
          </Grid>
        </Grow>
      </UserProvider>
      <Grid item xs={12}>
        Footer
      </Grid>
    </Grid>
  )
}

export default Home
