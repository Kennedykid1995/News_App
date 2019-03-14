import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {NavLink} from "react-router-dom"; 

const styles = {
  card: {
    margin: 10,
    width: 345,
    boxShadow: 'none',
    borderRadius: 0,
  },
  media: {
    objectFit: 'cover',
    background: '#e91e63',
    height: 230,
    borderRadius: 10,
  },
  text:{
      textDecoration: 'none',
      color:'black',
  }
};

function MainCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <div className={classes.media} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Title: 
          </Typography>
          <Typography component="p">
            Content:
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <NavLink to="/article" className={classes.text}>
        <Button size="small" color="inherit">
          Read More
        </Button>
        </NavLink>
      </CardActions>
    </Card>
  );
}

Card.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainCard);