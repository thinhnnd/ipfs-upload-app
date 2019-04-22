import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';

class HashCell extends Component {
    render() {
        return (
            <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
          </TableRow>
        );
    }
}

export default HashCell;