import React from 'react'

import { useUser } from '../../../contexts/user'
import { Paper, Avatar, Typography, makeStyles, Box } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import jss from './jss'

function Info() {
  const classes = makeStyles(jss(useTheme()))()

  const {
    apiData: { name, avatar_url, company, location, bio },
  } = useUser()

  return (
    <Paper className={classes.paper}>
      <Box display="flex">
        <Box m={2}>
          <Avatar alt={name} src={avatar_url} className={classes.avatar} />
        </Box>
        <Box m={2}>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="caption" display="block">
            {bio}
          </Typography>
          <Typography variant="caption" display="block">
            {company}
          </Typography>
          <Typography variant="caption" display="block">
            {location}
          </Typography>
        </Box>
      </Box>
    </Paper>
  )
}

export default Info
