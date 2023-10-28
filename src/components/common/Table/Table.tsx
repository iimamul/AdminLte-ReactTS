import React from 'react';
import { Table as MuiTable, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

interface TableProps {
  headers: string[];
  data: any[];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <TableContainer component={Paper}>
      <MuiTable>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index}><b>{header}</b></TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {Object.values(row).map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell as React.ReactNode}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
