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
  container: {
      marginLeft: 20
  }
});

function createData(page, visitors, uniqueUsers, bounceRate) {
  return { page, visitors, uniqueUsers, bounceRate };
}

const rows = [
  createData('Facebook', "4,568","46.53%"),
  createData('Facebook ', "4,568","46.53%"),
  createData('Google', "4,568", "46.53%"),
  createData('Instagram', "4,568", "46.53%"),
  createData('Twitter', "4,568", "46.53%"),
];

export default function VisitsTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>REFERAL</TableCell>
            <TableCell>VISITORS</TableCell>
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
