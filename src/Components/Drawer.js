import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { NavLink, useLocation } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { BsBell, BsPersonFill, BsPersonSquare } from "react-icons/bs";

// import Header from "./Header";
import ProfileMenu from "./Menu";
import Options from "./Options";
import SearchInput from "./SearchInput";
import BreadCrumbs from "./Breadcrumbs";
import DashboardStatCards from "./DashboardStatCards";
import { RiComputerLine } from "react-icons/ri";
import {GiConcentrationOrb} from "react-icons/gi"
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillCalendar } from "react-icons/ai";
import {FiKey} from "react-icons/fi"
import Profile from "./Profile";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		// display: "flex",
		// width: `calc(100% - ${drawerWidth}px)`
	},
	header: {
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up("sm")]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
		backgroundColor: "#5e72e4",
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	// necessary for content to be below app bar
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		// flexGrow: 1,
		marginLeft: drawerWidth,
		padding: theme.spacing(4),
		[theme.breakpoints.down("sm")]: {
			marginLeft: 0
		},
	},
}));

const Links = [
	{ title: "Dashboard", path: "/" },
	{ title: "Icons", path: "icons" },
	{ title: "Google", path: "google" },
	{ title: "Profile", path: "profile" },
	{ title: "Tables", path: "tables" },
	{ title: "Login", path: "login" },
	{ title: "Register", path: "register" },
 ]

const LinkIcon = (index) => {
	let icon;
	switch (index) {
		case 0:
			icon = <RiComputerLine style={{color: '#5e72e4'}} />
			break;
		case 1:
			icon = <GiConcentrationOrb style={{color: '#fb6340'}} />
			break;
		case 2:
			icon = <FaMapMarkerAlt style={{color: '#5e72e4'}} />
			break;
		case 3:
			icon = <BsPersonFill style={{color: '#11cdef'}} />
			break;
		case 4:
			icon = <AiFillCalendar style={{color: '#5e72e4'}} />
			break;
		case 5:
			icon = <FiKey style={{color: '#11cdef'}} />
			break;
		case 6:
			icon = <BsPersonSquare style={{color: '#f3a4b5'}} />
			break;
		default:
			break;
	}
	return icon;
}

function SideDrawer({window, Child}) {
	const location = useLocation()
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<div style={{textAlign: 'center', padding: 15}}>
				<img src='https://assets.stickpng.com/thumbs/5847f3f0cef1014c0b5e4886.png' width="75%" />
			</div>
			<Divider />
			<List>
				{Links.map((item, index) => (
					<ListItem
						component={NavLink}
						key={index}
						exact
						to={{pathname: item.path, title: item.title}}
						activeStyle={{
							backgroundColor: "#f6f9fc",
						}}>
						<ListItemIcon>
							{/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
							{LinkIcon(index)}
						</ListItemIcon>
						<ListItemText primary={item.title} />
					</ListItem>
				))}
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="static"
				className={classes.appBar}
				elevation={0}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}>
						<MenuIcon />
					</IconButton>
					<Grid container>
						<Grid
							item
							sm={6}
							style={{ display: "flex", alignItems: "center" }}>
							<SearchInput />
						</Grid>
						<Grid item sm={6} className={classes.header}>
							<BsBell size={25} style={{ marginRight: 20 }} />
							<Options />
							<ProfileMenu />
						</Grid>
					</Grid>
				</Toolbar>
				 { location.pathname === "/profile" ? <Profile /> : <BreadCrumbs /> }
				<div>
					{ location.pathname === "/" && <DashboardStatCards />}
				</div>
			</AppBar>

			<nav className={classes.drawer} aria-label="mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === "rtl" ? "right" : "left"}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						open>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
			<main className={classes.content}>
				<Child />
			</main>
		</div>
	);
}

SideDrawer.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default SideDrawer;
