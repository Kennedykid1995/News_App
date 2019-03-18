import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import ImgMediaCard from "../cards/card";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  text: {
    fontSize: 25,
    padding: 10,
  }
});

function SlideSection(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
    <Typography className={classes.text}>Section Title</Typography>
      <GridList className={classes.gridList} cols={2.5}>
          <ImgMediaCard />
      </GridList>
    </div>
  );
}

SlideSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SlideSection);
