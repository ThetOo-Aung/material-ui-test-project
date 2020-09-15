import React from 'react'
import { Grid } from '@material-ui/core'
import HeaderNav from './HeaderNav'
import Content from './Content'

const HomePage2 = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <HeaderNav></HeaderNav>
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
          <Content></Content>
        </Grid>
        <Grid item xs={0} sm={2}></Grid>
      </Grid>
    </Grid>
  )
}

export default HomePage2
