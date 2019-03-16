import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import {NavLink} from "react-router-dom"; 
import {connect} from "react-redux"
import {fetchNews} from '../../actions/action'; 

const styles = theme => ({
  card: {
    display: "flex",
    margin: 10,
    padding: 0,
    width: 345,
    boxShadow: "none",
    borderRadius: 0
  },
  details: {
    display: "flex",
    flexDirection: "row"
  },
  content: {
    flex: "1 0 auto",
    padding: 0
  },
  cover: {
    width: 151,
    height: 151,
    borderRadius: 10,
    background: "#18ffff"
  },
  text: {
    marginLeft: 5,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    height: 125,
    alignItems: "flex-start",
    padding: 0
  },
  navText:{
    textDecoration: 'none',
    color: 'black'
  }
});


function ListCard(props) {
  const { classes } = props;
  
  componentDidMount = () => {
    this.props.fetchNews();
  }
   return (
     <>
    {this.props.news.map(article => {
      return(
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <div className={classes.cover} />
        </CardContent>
        <div>
          <CardContent className={classes.text}>
            <Typography gutterBottom variant="h5" component="h2">
              {article.title}
            </Typography>
            <Typography component="p">
              {article.author}
            </Typography>
            <CardActions>
            <NavLink to="/article" className={classes.navText}>
              <Button size="small" color="inherit">
                Read More
              </Button>
              </NavLink>
            </CardActions>
          </CardContent>
        </div>
      </div>
    </Card>
      )
    })}
    </>
  );
}

const mapStateToProps = state => {
  return {
    news: state.news
  }
}


export default connect(mapStateToProps,{fetchNews} (withStyles(styles, { withTheme: true })(ListCard)));
