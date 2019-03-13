import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ImgMediaCard from "../cards/card";

const styles = theme => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    padding: `0 ${theme.spacing.unit * 3}px`,
    borderRadius: 0,
  },
});
 function BasicSection(props) {
    const {classes} = props;
  return (
    <div className={classes.root}>
        <Grid container wrap="wrap" spacing={16}>
          <ImgMediaCard />
          <ImgMediaCard />
        </Grid>
    </div>
  );
}
export default withStyles(styles)(BasicSection); 
