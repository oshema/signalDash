import React, { useState } from 'react';
import './chartMain.css';
import { useStyles } from '../../materialStyles/table';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TablePagination from '@mui/material/TablePagination';
import ChartRow from '../ChartRow/chartRow';
import TableContainer from '@mui/material/TableContainer';

function ChartMain({ chartData }) {

    const classes = useStyles();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="collapsible table" className={classes.tableContainer}>
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Established</TableCell>
                            <TableCell align="left">Round</TableCell>
                            <TableCell align="left">Total Raised</TableCell>
                            <TableCell align="left">Lead</TableCell>
                            <TableCell align="left">CEO</TableCell>
                            <TableCell align="center">Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {chartData
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((company) => (
                                <ChartRow key={company.name} companyData={company} />
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={chartData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    )
}

export default ChartMain;
