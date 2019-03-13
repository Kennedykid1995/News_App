import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ImgMediaCard from "../cards/card";
import ListCard from "../cards/list-card";
import MainCard from "../cards/main-card";
import { Typography } from "../../../node_modules/@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: `0 ${theme.spacing.unit * 3}px`,
    borderRadius: 0
  },
  text:{
    fontSize: 25,
    padding: 10,
  }
});
function BasicSection(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    <Typography className={classes.text}>Section Title </Typography>
      <Grid container wrap="wrap" spacing={16}>
        <MainCard />
        <ListCard />
        <ListCard />
        <ListCard />
      </Grid>
    </div>
  );
}
export default withStyles(styles)(BasicSection);
