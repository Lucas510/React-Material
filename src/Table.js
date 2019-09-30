import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

function createData(a, b, c) {
  return { pais: a, name: b, desc: c };
}

const rows = [
  createData('Alemania', 'Cacao Forastero', 'Lindt & Sprüngli'),
  createData('Reino Unido', 'Cacao Criollo de Venezuela', 'Cailler'),
  createData('Francia', 'Cacao Trinitario', 'Frey'),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Mayores consumidores de chocolate suizo</TableCell>
            <TableCell align="right">Tipos de Cacao</TableCell>
            <TableCell align="right">Los mejores chocolates suizos</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.pais}>
              <TableCell component="th" scope="row">
                {row.pais}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.desc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}