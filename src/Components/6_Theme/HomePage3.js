import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  // buttonStyle: props => {
  //   return {
  //     color: props.cool ? "blue" : 'red',
  //     backgroundColor: props.cool ? 'green' : 'white'
  //   }}
  buttonStyle: {
    backgroundColor: "blue",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "black",
    },
  },
}));

const HomePage3 = (props) => {
  const classes = useStyle(props);
  return (
    <div>
      <Button
        className={classes.buttonStyle}
        color="primary"
        variant="contained"
        disableElevation
      >
        Hello
      </Button>
      <Button color="secondary" variant="contained" disableRipple>
        Hello
      </Button>
    </div>
  );
};

export default HomePage3;
