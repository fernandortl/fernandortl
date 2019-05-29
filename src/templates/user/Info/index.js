import React from 'react'

import { useUser } from '../../../contexts/user'
import { Paper, Avatar, Typography, makeStyles } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import jss from './jss'

function Info() {
  const classes = makeStyles(jss(useTheme()))()

  const {
    apiData: { name, avatar_url, company, location, html_url, bio },
  } = useUser()

  return (
    <Paper className={classes.paperPadding}>
      <Avatar alt={name} src={avatar_url} className={classes.avatar} />
      <Typography variant="h5" align="center" gutterBottom>
        {name}
      </Typography>
      <Typography variant="caption" display="block" align="center">
        {bio}
      </Typography>
      <Typography variant="overline" display="block" align="center">
        {company}
      </Typography>
      <Typography variant="caption" display="block" align="center">
        {location}
      </Typography>
    </Paper>
  )
}

export default Info
