import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Avatar, makeStyles } from "@material-ui/core";
import {BsPersonFill, BsCalendar} from 'react-icons/bs'
import {AiTwotoneSetting, AiOutlineLogout} from 'react-icons/ai'
import {TiSupport} from 'react-icons/ti'


const useStyles = makeStyles(() => ({
    tile: {
        margin: 10,
        width: 150
    },
    icon: {
        marginRight: 15
    }
}))

export default function ProfileMenu() {
	const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles()
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<div
				aria-controls="profile-menu"
				aria-haspopup="true"
				onClick={handleClick}
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
                    cursor: 'pointer'
				}}>
				<Avatar
					style={{ marginRight: 10 }}
					alt="Profile Image"
					src="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/team-4.jpg"
				/>
				<h4>Shahzaib</h4>
			</div>
			<Menu
				id="profile-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}>
				<MenuItem className={classes.tile} onClick={handleClose}>
                    <BsPersonFill className={classes.icon} /> My Profile
                </MenuItem>
				<MenuItem className={classes.tile} onClick={handleClose}>
                    <AiTwotoneSetting className={classes.icon} />Settings
                </MenuItem>
				<MenuItem className={classes.tile} onClick={handleClose}>
                    <BsCalendar className={classes.icon}/> Activity
                </MenuItem>
				<MenuItem className={classes.tile} onClick={handleClose}>
                    <TiSupport className={classes.icon} /> Support
                </MenuItem>
				<MenuItem className={classes.tile} onClick={handleClose}>
                    <AiOutlineLogout className={classes.icon} /> Logout
                </MenuItem>
			</Menu>
		</div>
	);
}
