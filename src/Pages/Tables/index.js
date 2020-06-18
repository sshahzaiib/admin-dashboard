import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import { Line } from "rc-progress";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
	title: {
		display: "flex",
		alignItems: "center",
    },
    dotIcon: {
        verticalAlign: 'inherit',
        fontSize: '9px'
    }
});

const AvGroup = () => (
	<AvatarGroup max={4}>
		<Avatar
			alt="Remy Sharp"
			src="https://material-ui.com/static/images/avatar/1.jpg"
		/>
		<Avatar
			alt="Travis Howard"
			src="https://material-ui.com/static/images/avatar/2.jpg"
		/>
		<Avatar
			alt="Cindy Baker"
			src="https://material-ui.com/static/images/avatar/3.jpg"
		/>
		<Avatar
			alt="Agnes Walker"
			src="https://material-ui.com/static/images/avatar/4.jpg"
		/>
		<Avatar
			alt="Trevor Henderson"
			src="https://material-ui.com/static/images/avatar/5.jpg"
		/>
	</AvatarGroup>
);

export default ({dark = false}) => {
	const classes = useStyles();

	return (
		<TableContainer component={Paper}>
			<Table className={classes.table}  aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Light Table</TableCell>
					</TableRow>
				</TableHead>
				<TableHead id="tableTitle">
					<TableRow>
						<TableCell>PROJECT</TableCell>
						<TableCell>BUDGET</TableCell>
						<TableCell>STATUS</TableCell>
						<TableCell>USERS</TableCell>
						<TableCell>COMPLETION</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell
							component="th"
							scope="row"
							className={classes.title}>
							<img
								src="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/bootstrap.jpg"
								width="40px"
							/>
							Argon Design System
						</TableCell>
						<TableCell>$25000 USD</TableCell>
						<TableCell> <FiberManualRecordIcon  className={classes.dotIcon} style={{color: "#fb6340"}} /> pending</TableCell>
						<TableCell> <AvGroup /> </TableCell>
						<TableCell>60%<Line percent="60" strokeWidth="2" strokeColor="#fb6340" /> </TableCell>
					</TableRow>
					<TableRow>
						<TableCell
							component="th"
							scope="row"
							className={classes.title}>
							<img
								src="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/angular.jpg"
								width="40px"
							/>
							Angular Now UI Kit PRO
						</TableCell>
						<TableCell>$25000 USD</TableCell>
						<TableCell> <FiberManualRecordIcon  className={classes.dotIcon} style={{color: '#2dce89'}} /> completed</TableCell>
						<TableCell> <AvGroup /> </TableCell>
						<TableCell>100%<Line percent="100" strokeWidth="2" strokeColor="#2dce89" /> </TableCell>
					</TableRow>
					<TableRow>
						<TableCell
							component="th"
							scope="row"
							className={classes.title}>
							<img
								src="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/sketch.jpg"
								width="40px"
							/>
							Black dashboard
						</TableCell>
						<TableCell>$25000 USD</TableCell>
						<TableCell> <FiberManualRecordIcon  className={classes.dotIcon} style={{color: '#fb6340'}} /> delayed</TableCell>
						<TableCell> <AvGroup /> </TableCell>
						<TableCell>72%<Line percent="72" strokeWidth="2" strokeColor="#fb6340" /> </TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};
