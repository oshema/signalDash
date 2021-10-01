import React from 'react';
import './companiesTable.css';
import { useStyles } from '../../materialStyles/table';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import CompanyTableRow from '../CompanyTableRow/companyTableRow';

function CompaniesTable({ chartData }) {

    const classes = useStyles();

    return (
        <>
            <Table aria-label="collapsible table" className={classes.tableContainer}>
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
                    {chartData.map((company) => (
                        <CompanyTableRow key={company.name} companyData={company} />
                    ))}
                </TableBody>
            </Table>
        </>
    )
}

export default CompaniesTable;
