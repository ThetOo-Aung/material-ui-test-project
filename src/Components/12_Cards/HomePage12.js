import React from 'react'
import CardSim from './CardSim'
import { Grid } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyle = makeStyles(() => ({
  gridContainer: {
    paddingLeft: "30px",
    paddingRight: "30px"
  }
}))



const HomePage12 = () => {

  const classes = useStyle();
  return (
    <Grid container spacing={4} className={classes.gridContainer} justify="center">
    <Grid item xs={12} sm={6} md={4}>
      <CardSim></CardSim>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <CardSim></CardSim>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <CardSim></CardSim>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <CardSim></CardSim>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <CardSim></CardSim>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <CardSim></CardSim>
    </Grid>
    </Grid>
  )
}

export default HomePage12
