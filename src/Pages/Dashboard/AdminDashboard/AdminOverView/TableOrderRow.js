import React from 'react';
import { TableCell, FormControl, MenuItem, TextField, TableRow, Button,Paper } from '@mui/material';
// import TableContainer from '@mui/material/TableContainer';
const TableOrderRow = ({data}) => {
   
    return (
        // <div>
        <TableRow
        key={data._id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
        <TableCell component="th" scope="row">
            {data?.name.slice(0, 20)}
        </TableCell>
        <TableCell >{data?.email}</TableCell>
        <TableCell >{data.comments}</TableCell>
        <TableCell >{data.number}</TableCell>
        <TableCell >{data.rating}</TableCell>
        <TableCell sx={{ p: 0 }}>

           

        </TableCell>
    </TableRow>
            
           
            
        // </div>
    );
};

export default TableOrderRow;