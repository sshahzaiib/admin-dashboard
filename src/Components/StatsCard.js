import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import {FaHandPointUp} from 'react-icons/fa'
import {AiOutlineArrowUp} from 'react-icons/ai'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    // border: '1px solid',
    padding: 20
  },
  title: {
    color: 'gray'
  },    
  container: {
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      height: theme.spacing(15)
  },
  iconContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
  },
  icon: {
      padding: 18,
      background: 'linear-gradient(87deg,#f5365c 0,#f56036 100%)',
      borderRadius: '50%'
  }
}));

export default function StatsCard(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.container}>

        <Grid container>
            <Grid item md={8}>
                <Typography variant="subtitle2" className={classes.title} >
                    {props.title}
                </Typography>
                <Typography variant="h5" style={{color: 'black'}}>
                    {props.count}
                </Typography>
            </Grid>
            <Grid item md={4} className={classes.iconContainer}>
                <div className={classes.icon}>
                    <FaHandPointUp color="white" size={17} />
                </div>
            </Grid>
            <Grid container style={{marginTop: 10}}> 

            <Grid item md={4} style={{color: 'green', display: 'inherit'}}>
                <AiOutlineArrowUp /> 3.45%
            </Grid>
            <Grid item md={8} style={{color: 'black'}} >
                <Typography paragraph style={{fontSize: '1em'}} >
                    Since last month
                </Typography>
            </Grid>
            </Grid>
        </Grid>
        
        </div>
    </div>
  );
}
