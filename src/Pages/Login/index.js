import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import {
	Grid,
	TextField,
	InputAdornment,
	FormControlLabel,
	Checkbox,
} from "@material-ui/core";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Footer from "../../Components/Footer";
import APPBAR from "../../Components/Appbar";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: "#162b4d",
		height: "180vh",
	},
	iconBtn: { color: "white", fontSize: "16px" },

	header: {
		background: "#6a7be4",
		height: "500px",
		position: "relative",
	},
	headerContent: {
		textAlign: "center",
		position: "absolute",
		top: "40%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		color: "white",
	},
	loginFormContainer: {
		zIndex: 1,
		position: "absolute",
		top: "125%",
		left: "50%",
		transform: "translate(-50%, -50%)",
	},
	loginForm: {
		width: "350px",
		background: "white",
		padding: 20,
		textAlign: "center",
		borderRadius: 6,
	},
	input: {
		width: "80%",
		margin: "1em 0",
	},
	signInBtn: {
		background: "#6a7be4",
		color: "white",
		margin: "1em",
	},
	footer: {
		position: "absolute",
		top: "170%",
	},
}));

export default function Login() {
	const classes = useStyles();
	const [remember, setRemember] = useState(false);

	return (
		<div className={classes.root}>
			<APPBAR />
			<div className={classes.header}>
				<div className={classes.headerContent}>
					<Typography variant="h4">Welcome!</Typography>
					<Typography variant="subtitle1">
						Use these awesome forms to login or create new
					</Typography>
					<Typography variant="subtitle1">
						account in your project for free.
					</Typography>
				</div>
				<div className={classes.loginFormContainer}>
					<div className={classes.loginForm}>
						<Typography
							variant="subtitle2"
							style={{ margin: "1em 0", color: "#8898aa" }}>
							Sign in with
						</Typography>
						<Grid container>
							<Grid
								item
								xs={6}
								style={{ textAlign: "end", paddingRight: 5 }}>
								<Button
									className={classes.upgradeBtn}
									variant="contained"
									startIcon={<AiFillGithub />}>
									Github
								</Button>
							</Grid>
							<Grid item xs={6} style={{ textAlign: "left" }}>
								<Button
									className={classes.upgradeBtn}
									variant="contained"
									startIcon={<FcGoogle />}>
									Google
								</Button>
							</Grid>
						</Grid>
						<Typography
							variant="subtitle2"
							style={{ margin: "5em 0 0 1em", color: "#8898aa" }}>
							or sign in with credentials
						</Typography>
						<form>
							<TextField
								className={classes.input}
								label="Email"
								variant="outlined"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<MdEmail />
										</InputAdornment>
									),
								}}
							/>
							<TextField
								className={classes.input}
								label="Password"
								type="password"
								variant="outlined"
								InputProps={{
									startAdornment: (
										<InputAdornment position="start">
											<RiLockPasswordLine />
										</InputAdornment>
									),
								}}
							/>
							<div
								style={{
									textAlign: "left",
									paddingLeft: "10%",
								}}>
								<FormControlLabel
									control={
										<Checkbox
											checked={remember}
											onChange={(e) =>
												setRemember(e.target.checked)
											}
											name="remember"
											color="primary"
										/>
									}
									label="Remember Me"
								/>
							</div>
							<Button className={classes.signInBtn}>
								Sign in
							</Button>
						</form>
					</div>
					<Grid container>
						<Grid item xs={6} style={{ textAlign: "left" }}>
							<Typography
								variant="subtitle2"
								style={{
									color: "white",
									fontWeight: "100",
									paddingTop: 10,
								}}>
								Forgot Password?
							</Typography>
						</Grid>
						<Grid item xs={6} style={{ textAlign: "end" }}>
							<Typography
								variant="subtitle2"
								style={{
									color: "white",
									fontWeight: "100",
									paddingTop: 10,
								}}>
								Create new account
							</Typography>
						</Grid>
					</Grid>
				</div>
			</div>
			<Footer />
		</div>
	);
}
