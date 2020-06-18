import React from "react";
import { Typography, Button, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
	root: {
		background: "linear-gradient(87deg,#172b4d 0,#1a174d 100%)",
		height: "400px",
		position: "relative",
	},
	btn: {
		color: "#5e72e4",
		backgroundColor: "white",
    },
    container: {
        position: 'absolute',
        top: '20%',
        left: '5%'
    }
});

export default () => {
	const classes = useStyle();
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<Typography variant="h4">Hello Jesse</Typography>
				<Typography paragraph>
					This is your profile page. You can see the progress you've
					made with <br /> your work and manage your projects or
					assigned tasks
				</Typography>
				<Button className={classes.btn}>Edit Profile</Button>
			</div>
		</div>
	);
};
