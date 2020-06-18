import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import {
	AiFillFacebook,
	AiOutlineInstagram,
	AiFillTwitterSquare,
	AiFillGithub,
} from "react-icons/ai";
import { IoIosCart } from "react-icons/io";
import { Tooltip } from "@material-ui/core";
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: "#162b4d",
		height: "180vh",
	},
	appbar: {
		backgroundColor: "#6a7be4",
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		display: "flex",
		flexGrow: 1,
		alignItems: "center",
	},
	toolbar: {
		width: "1048px",
		margin: "0 auto",
	},
	linkBtn: {
		fontSize: "12px",
	},
	rightNav: {
		display: "flex",
		alignItems: "center",
	},
	iconBtn: { color: "white", fontSize: "16px" },
	upgradeBtn: {
		color: "#6a7be4",
		backgroundColor: "white",
	},
}));

export default function APPBAR() {
	const classes = useStyles();

	return (
		<AppBar className={classes.appbar} elevation={0}>
			<Toolbar className={classes.toolbar}>
				<div className={classes.title}>
					<img
						src="https://demos.creative-tim.com/argon-dashboard/assets/img/brand/white.png"
						alt="Logo"
						width="100"
						style={{ marginRight: "1em" }}
					/>
					<Button
						component={Link}
						to="/"
						className={classes.linkBtn}
						color="inherit"
						variant="text">
						Dashboard
					</Button>
					<Button
						component={Link}
						to="/login"
						className={classes.linkBtn}
						color="inherit"
						variant="text">
						Login
					</Button>
					<Button
						component={Link}
						to="/register"
						className={classes.linkBtn}
						color="inherit"
						variant="text">
						Register
					</Button>
				</div>
				<div className={classes.rightNav}>
					<Tooltip title="Like us on Facebook">
						<IconButton
							aria-label="facebook"
							className={classes.iconBtn}>
							<AiFillFacebook />
						</IconButton>
					</Tooltip>
					<Tooltip title="Follow us on Instagram">
						<IconButton
							aria-label="instagram"
							className={classes.iconBtn}>
							<AiOutlineInstagram />
						</IconButton>
					</Tooltip>
					<Tooltip title="Follow us on Twitter">
						<IconButton
							aria-label="twitter"
							className={classes.iconBtn}>
							<AiFillTwitterSquare />
						</IconButton>
					</Tooltip>
					<Tooltip title="Star us on Github">
						<IconButton
							aria-label="github"
							className={classes.iconBtn}>
							<AiFillGithub />
						</IconButton>
					</Tooltip>

					<Button
						className={classes.upgradeBtn}
						variant="contained"
						startIcon={<IoIosCart />}>
						Upgrade to PRO
					</Button>
				</div>
			</Toolbar>
		</AppBar>
	);
}
