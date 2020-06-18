import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    width: '100%'
  },
});

function createData(page, visitors, uniqueUsers, bounceRate) {
  return { page, visitors, uniqueUsers, bounceRate };
}

const rows = [
  createData('/argon/', "4,568", 340, "46.53%"),
  createData('/argon/index', "4,568", 340, "46.53%"),
  createData('/argon/charts', "4,568", 340, "46.53%"),
  createData('/argon/tables', "4,568", 340, "46.53%"),
  createData('/argon/profile', "4,568", 340, "46.53%"),
  
];

export default function VisitsTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>PAGE NAME</TableCell>
            <TableCell>VISITORS</TableCell>
            <TableCell>UNIQUE USERS</TableCell>
            <TableCell>BOUNCE RATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.page}>
              <TableCell component="th" scope="row">
                {row.page}
              </TableCell>
              <TableCell>{row.visitors}</TableCell>
              <TableCell>{row.uniqueUsers}</TableCell>
              <TableCell>{row.bounceRate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
