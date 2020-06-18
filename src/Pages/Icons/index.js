import React from 'react';
import { makeStyles, Typography, Divider, Grid } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(2),
        // border: '1px solid #555',
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: theme.spacing(2)
    },
    iconGrid: {
        textAlign: 'center'
    },
    divider: {
        marginBottom: theme.spacing(2)
    }
}))


export default () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
        <Typography paragraph>
            Icons
        </Typography>
        <Divider className={classes.divider} />
        <Grid container spacing={4}>
            <Grid item className={classes.iconGrid}>
                <AcUnitIcon />
                <Typography paragraph>
                    AcUnitIcon
                </Typography>
            </Grid>
            <Grid item className={classes.iconGrid}>
                <AcUnitIcon />
                <Typography paragraph>
                    AcUnitIcon
                </Typography>
            </Grid>
            <Grid item className={classes.iconGrid}>
                <AcUnitIcon />
                <Typography paragraph>
                    AcUnitIcon
                </Typography>
            </Grid>
            <Grid item className={classes.iconGrid}>
                <AcUnitIcon />
                <Typography paragraph>
                    AcUnitIcon
                </Typography>
            </Grid>
            <Grid item className={classes.iconGrid}>
                <AcUnitIcon />
                <Typography paragraph>
                    AcUnitIcon
                </Typography>
            </Grid>
            <Grid item className={classes.iconGrid}>
                <AcUnitIcon />
                <Typography paragraph>
                    AcUnitIcon
                </Typography>
            </Grid>
            <Grid item className={classes.iconGrid}>
                <AcUnitIcon />
                <Typography paragraph>
                    AcUnitIcon
                </Typography>
            </Grid>
            <Grid item className={classes.iconGrid}>
                <AcUnitIcon />
                <Typography paragraph>
                    AcUnitIcon
                </Typography>
            </Grid>
            <Grid item className={classes.iconGrid}>
                <AcUnitIcon />
                <Typography paragraph>
                    AcUnitIcon
                </Typography>
            </Grid>
            <Grid item className={classes.iconGrid}>
                <AcUnitIcon />
                <Typography paragraph>
                    AcUnitIcon
                </Typography>
            </Grid>
        </Grid>
        </div>
    )
}