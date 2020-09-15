import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';
import {makeStyles} from "@material-ui/core/styles"
const useStyle = makeStyles(() => ({
  typographyStyle: {
    flex: 1
  }
}))

const HeaderNav = () => {
  const classes = useStyle();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.typographyStyle}>
            Thet Oo Aung
          </Typography>
        <AcUnitRoundedIcon ></AcUnitRoundedIcon>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default HeaderNav
