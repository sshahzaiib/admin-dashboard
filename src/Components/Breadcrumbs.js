import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { Link as RouteLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { Grid, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	buttonsContainer: {
		textAlign: "end",
    },
    container: {
        margin: theme.spacing(2),
        marginRight: 0,
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
    },
    breadcrumb: {
        width: '70%',
        background: '#e9ecef',
        padding: 10,
        borderRadius: 8,
        [theme.breakpoints.down('sm')]: {
            display: "none"
        }
    },
    title: {
        display: 'flex',
        alignItems: 'center'
    },
    button: {
        marginRight: theme.spacing(2),
        background: 'white',
        color: '#5e72e4',
        height: theme.spacing(4)
    }
}));

export default function BreadCrumbs() {
    const classes = useStyles()
	return (
		<Grid container className={classes.container}>
			<Grid item sm={2} className={classes.title}>
				<Typography variant="h5">Dashboard</Typography>
			</Grid>
			<Grid item sm={4}>
				<Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb} >
					<Link color="inherit" to="/" component={RouteLink}>
						<AiFillHome />
					</Link>
					<Link component={RouteLink} color="inherit" to="/">
						Dashboard
					</Link>
					<Typography color="textPrimary">Default</Typography>
				</Breadcrumbs>
			</Grid>
			<Grid item sm={6} className={classes.buttonsContainer}>
				<Button className={classes.button} >New</Button>
				<Button className={classes.button} >Filter</Button>
			</Grid>
		</Grid>
	);
}
