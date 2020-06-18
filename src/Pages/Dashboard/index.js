import React from "react";
import { Grid } from "@material-ui/core";
import MainChart from "../../Components/Chart";
import BarChart from "../../Components/BarChart";
import VisitsTable from "../../Components/VisitsTable";
import SocialStatsTable from "../../Components/SocialStatsTable";

export default () => {
	return (
		<>
			<Grid container>
				<Grid item sm={12} md={8}>
					<MainChart />
				</Grid>
				<Grid item sm={12} md={4}>
					<BarChart />
				</Grid>
			</Grid>
			<Grid container>
				<Grid item sm={12} md={8}>
					<VisitsTable />
				</Grid>
				<Grid item sm={12} md={4}>
					<SocialStatsTable />
				</Grid>
			</Grid>{" "}
		</>
	);
};
