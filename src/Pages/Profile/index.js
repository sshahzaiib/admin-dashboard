import React from "react";
import {
	Grid,
	Button,
	Typography,
	makeStyles,
	Divider,
	TextField,
    TextareaAutosize,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
        // border: "1px solid #b7b7b7",
        borderRadius: 10,
        background: 'white',
        margin: 10
	},
	textField: {
		margin: "1em 0em",
	},
	divider: {
		margin: `1em 0`,
    },
    textArea: {
        width: '95%',
        border: '1px solid #b7b7b7',
        padding: '1em'
    },
    profileBtn: {
        height: '25px',
        width: '55%',
        fontSize: '12px'
    },
    profileCard: {
        background: 'white',
        borderRadius: 10,
        margin: 10,
        height: 450,
        position: 'relative'
    },
    profileImg: {
        position: 'absolute',
        borderRadius: '50%',
        height: 115,
        width: 115,
        top: '20%',
        left: '31%'
    }
}));

export default () => {
	const classes = useStyles();
	return (
		<Grid container spacing={5}  >
			<Grid item sm={7} className={classes.root}>
				<Grid container>
					<Grid item xs={12}>
						<Typography variant="h6">Edit Profile</Typography>
					</Grid>
					{/* <Grid item xs={6}>
						<Button>Settings</Button>
					</Grid> */}
				</Grid>
				<Divider className={classes.divider} />
				<Grid item xs={12}>
					<Typography paragraph>User Information</Typography>
				</Grid>
				<Grid container>
					<Grid item xs={6}>
						<TextField
							className={classes.textField}
							required
							variant="outlined"
							label="Username"
							defaultValue="lucky.jesse"
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							className={classes.textField}
							required
							variant="outlined"
							label="Email"
							defaultValue="jesse@example.com"
						/>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={6}>
						<TextField
							className={classes.textField}
							required
							variant="outlined"
							label="First Name"
							defaultValue="Lucky"
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							className={classes.textField}
							required
							variant="outlined"
							label="Last Name"
							defaultValue="Jesse"
						/>
					</Grid>
				</Grid>
				<Divider className={classes.divider} />
				<Grid item xs={12}>
					<Typography paragraph>Contact Information</Typography>
				</Grid>
				<Grid container>
					<Grid item xs={6}>
						<TextField
							className={classes.textField}
							required
							variant="outlined"
							label="Address"
							defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							className={classes.textField}
							required
							variant="outlined"
							label="City"
							defaultValue="NY"
						/>
					</Grid>
				</Grid>
				<Grid container>
					<Grid item xs={6}>
						<TextField
							className={classes.textField}
							required
							variant="outlined"
							label="Country"
							defaultValue="United States"
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							className={classes.textField}
							required
							variant="outlined"
							label="Postal Code"
							type="Number"
						/>
					</Grid>
				</Grid>
				<Divider className={classes.divider} />
				<Grid item xs={12}>
					<Typography paragraph>About Me</Typography>
				</Grid>
				<Grid item xs={12}>
					<TextareaAutosize
						aria-label="minimum height"
						rowsMin={8}
                        className={classes.textArea}
						placeholder="About"
                        defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and Open Source."
					/>
				</Grid>
			</Grid>
			<Grid item sm={4} className={classes.profileCard}>
                
                <img src="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/img-1-1000x600.jpg" width="100%" />
                <img className={classes.profileImg} src="https://demos.creative-tim.com/argon-dashboard/assets/img/theme/team-4.jpg" width="100%" />
                <Grid container style={{padding: 15}}>
                    <Grid item xs={6}>
                        <Button className={classes.profileBtn} variant="contained" color="primary">Connect</Button>
                    </Grid>
                    <Grid item xs={6} style={{textAlign:'end'}}>
                        <Button className={classes.profileBtn} variant="contained" color="primary">Message</Button>
                    </Grid>
                </Grid>
                <Grid container style={{textAlign: 'center'}}>
                    <Grid item xs={4}>
                        <Typography variant="h6">
                            22
                        </Typography>
                        <Typography paragraph>
                            Friends
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6">
                            10
                        </Typography>
                        <Typography paragraph>
                            Photos
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6">
                            89
                        </Typography>
                        <Typography paragraph>
                            Comments
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container style={{textAlign: 'center'}}>
                    <Grid item xs={12}>
                        <Typography variant="h6">
                            Jessica Jones, 23
                        </Typography>
                        <Typography variant="subtitle2">Bucharest, Romania </Typography>
                        <Typography style={{color: 'gray', margin: '1em 0'}} variant="subtitle2">Solution Manager - Creative Tim Officer  </Typography>
                        <Typography variant="subtitle2">University of Computer Science </Typography>
                    </Grid>
                </Grid>
            </Grid>
		</Grid>
	);
};
