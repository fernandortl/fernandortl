import React from 'react'

import {
  Paper,
  Avatar,
  makeStyles,
  Typography,
  Box,
  Grid,
} from '@material-ui/core'

import clsx from 'clsx'

import ImgNode from '../../../assets/images/node.svg'
import ImgGraphQL from '../../../assets/images/graphql.svg'
import ImgFirebase from '../../../assets/images/firebase.svg'
import ImgReact from '../../../assets/images/react.svg'
import ImgAngular from '../../../assets/images/angular.svg'
import ImgAWS from '../../../assets/images/aws.svg'

import { useTheme } from '@material-ui/styles'
import jss from './jss'

function Skill() {
  const classes = makeStyles(jss(useTheme()))()
  const ctrlClasses = {
    smallAvatar: clsx(classes.avatar, classes.smallAvatar),
    bigAvatar: clsx(classes.avatar, classes.bigAvatar),
  }
  return (
    <Paper className={classes.paper}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Typography display="block" variant="caption">
            Front-end
          </Typography>
          <Box display="inline-flex" my={1}>
            <Avatar
              alt="React JS"
              src={ImgReact}
              className={ctrlClasses.smallAvatar}
            />
            <Avatar
              alt="Angular"
              src={ImgAngular}
              className={ctrlClasses.smallAvatar}
            />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Typography display="block" variant="caption">
            Back-end
          </Typography>
          <Box display="inline-flex" my={1}>
            <Avatar
              alt="Node JS"
              src={ImgNode}
              className={ctrlClasses.smallAvatar}
            />
            <Avatar
              alt="GraphQL"
              src={ImgGraphQL}
              className={ctrlClasses.smallAvatar}
            />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Typography display="block" variant="caption">
            Cloud/Serverless
          </Typography>
          <Box display="inline-flex" my={1}>
            <Avatar
              alt="Firebase"
              src={ImgFirebase}
              className={ctrlClasses.smallAvatar}
            />
            <Avatar
              alt="AWS"
              src={ImgAWS}
              className={ctrlClasses.smallAvatar}
            />
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Skill
