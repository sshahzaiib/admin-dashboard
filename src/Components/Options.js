import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, Grid } from "@material-ui/core";
import { BsCalendar} from 'react-icons/bs'
import { FaRegObjectUngroup } from "react-icons/fa";
import {MdEmail, MdPayment} from 'react-icons/md'
import {RiGitRepositoryCommitsLine} from 'react-icons/ri'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {AiOutlineShopping} from 'react-icons/ai'

const useStyles = makeStyles(() => ({
	tile: {
		// display: "flex",
		width: 100,
	},
	iconContainer: {
		padding: 10,
		borderRadius: 50,
		width: 43,
	},
	icon: {
		color: "white",
	},
}));

export default function Options() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const classes = useStyles();
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<FaRegObjectUngroup
				aria-controls="option-menu"
				aria-haspopup="true"
				onClick={handleClick}
				size={25}
				style={{ marginRight: 20 }}
			/>
			<Menu
				id="option-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
				>
				<Grid container>
					<MenuItem className={classes.tile} onClick={handleClose}>
						<Grid item sm={4}>
							<div style={{ textAlign: "center" }}>
								<div className={classes.iconContainer} style={{background: 'linear-gradient(87deg,#f5365c 0,#f56036 100%)'}}>
									<BsCalendar className={classes.icon} />
								</div>
								<div>Calender</div>
							</div>
						</Grid>
					</MenuItem>
					<MenuItem className={classes.tile} onClick={handleClose}>
						<Grid item sm={4}>
							<div style={{ textAlign: "center" }}>
								<div className={classes.iconContainer} style={{background: 'linear-gradient(87deg,#f5365c 0,#f56036 100%)'}}>
									<MdEmail className={classes.icon} />
								</div>
								<div>Email</div>
							</div>
						</Grid>
					</MenuItem>
					<MenuItem className={classes.tile} onClick={handleClose}>
						<Grid item sm={4}>
							<div style={{ textAlign: "center" }}>
								<div className={classes.iconContainer} style={{background: 'linear-gradient(87deg,#f5365c 0,#f56036 100%)'}}>
									<MdPayment className={classes.icon} />
								</div>
								<div>Payments</div>
							</div>
						</Grid>
					</MenuItem>
					<MenuItem className={classes.tile} onClick={handleClose}>
						<Grid item sm={4}>
							<div style={{ textAlign: "center" }}>
								<div className={classes.iconContainer} style={{background: 'linear-gradient(87deg,#f5365c 0,#f56036 100%)'}}>
									<RiGitRepositoryCommitsLine className={classes.icon} />
								</div>
								<div>Reports</div>
							</div>
						</Grid>
					</MenuItem>
					<MenuItem className={classes.tile} onClick={handleClose}>
						<Grid item sm={4}>
							<div style={{ textAlign: "center" }}>
								<div className={classes.iconContainer} style={{background: 'linear-gradient(87deg,#f5365c 0,#f56036 100%)'}}>
									<FaMapMarkerAlt className={classes.icon} />
								</div>
								<div>Maps</div>
							</div>
						</Grid>
					</MenuItem>
					<MenuItem className={classes.tile} onClick={handleClose}>
						<Grid item sm={4}>
							<div style={{ textAlign: "center" }}>
								<div className={classes.iconContainer} style={{background: 'linear-gradient(87deg,#f5365c 0,#f56036 100%)'}}>
									<AiOutlineShopping className={classes.icon} />
								</div>
								<div>Shops</div>
							</div>
						</Grid>
					</MenuItem>
				</Grid>
			</Menu>
		</div>
	);
}
