import React from "react";
import { Typography, Button, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	footer: {
        width: '100%',
        position: 'absolute',
        top: '170%'
    },
    btn: {
        color: 'white',
        fontWeight: '200'
    }
}));

export default () => {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Grid container>
				<Grid item sm={6} style={{color: 'white'}}>
					<Typography style={{paddingLeft: '6em'}} paragraph>© 2020</Typography>
				</Grid>
				<Grid item sm={6} style={{textAlign: 'end', paddingRight: '6em'}}>
						<Button className={classes.btn} variant="text">About us</Button>
						<Button className={classes.btn} variant="text">Blog</Button>
						<Button className={classes.btn} variant="text">MIT License</Button>
				</Grid>
			</Grid>
		</footer>
	);
};
