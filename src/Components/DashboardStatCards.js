import React from "react";
import { Grid } from "@material-ui/core";
import StatsCard from "./StatsCard";

export default () => {
	return (
		<Grid container>
			<Grid item sm={12} md={3}>
				<StatsCard title="TOTAL TRAFFIC" count="123,456" />
			</Grid>
			<Grid item sm={12} md={3}>
				<StatsCard title="NEW USERS" count="1,333" />
			</Grid>
			<Grid item sm={12} md={3}>
				<StatsCard title="SALES" count={123} />
			</Grid>
			<Grid item sm={12} md={3}>
				<StatsCard title="PERFORMANCE" count="34,555%" />
			</Grid>
		</Grid>
	);
};
