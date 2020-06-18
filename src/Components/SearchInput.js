import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
	search: {
		height: 40,
		borderRadius: 40,
        border: "1px solid gray",
        padding: 20,
		backgroundColor: 'rgba(255,255,255,.9)',
		outline: 'none'
    },
}));

export default () => {
	const classes = useStyles();
	const [search, setSearch] = useState("");

	const handleSubmit = () => {
		console.log("====================================");
		console.log("Search: ", search);
		console.log("====================================");
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				className={classes.search}
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
			/>
		</form>
	);
};
