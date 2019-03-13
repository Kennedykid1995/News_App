import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import ImgMediaCard from "../cards/card";
import { GridListTile } from "../../../node_modules/@material-ui/core";

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

});

function SlideSection(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
          <ImgMediaCard />
          <ImgMediaCard />
          <ImgMediaCard />
      </GridList>
    </div>
  );
}

SlideSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SlideSection);
