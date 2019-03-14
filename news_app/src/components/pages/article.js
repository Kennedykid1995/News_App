import React from 'react'
import { withStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
    header:{
        background: '#18ffff',
        width: '100%',
        height: 300,
        clipPath: 'polygon(0 0, 100% 0, 100% 43%, 0 53%)',
    },
    headerPaper:{
        width: 320,
        height: 'auto',
        padding: 10,
        boxShadow:'none',
        border: 'none',
        background:'#69f0ae',
        position: 'absolute',
        left: 30,
        top: 160,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    body:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    textbody:{
        width: '90%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'flex-start',
    },
    bottom:{
        clipPath: 'polygon(0 79%, 100% 69%, 100% 100%, 0 100%)',
        background: '#69f0ae',
        width: '100%',
        height: 250,
    }
});

function Article(props) {
    const { classes } = props;
  return (
    <div>
        <>
        <div className={classes.header}/>
        <Paper className={classes.headerPaper}>
            <Typography variant="h2" color="inherit">Title</Typography>
        </Paper>
        </>
        <div className={classes.body}>
            <section className={classes.textbody}>
                <Typography variant="p">
                Story.....
                </Typography>
            </section>
        </div>
        <div className={classes.bottom} />
    </div>
  )
}
export default withStyles(styles)(Article);
