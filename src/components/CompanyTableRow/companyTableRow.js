import React, { useState } from 'react';
import './companyTableRow.css';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function CompanyTableRow() {

    const [open, setOpen] = useState(false)

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell align="left">
                    hgjhg
                </TableCell>
                <TableCell align="left">dsfsd</TableCell>
                <TableCell align="left">dfs</TableCell>
                <TableCell align="left">dsf</TableCell>
                <TableCell align="left">ewr</TableCell>
                <TableCell align="left">ewr</TableCell>
                <TableCell align="center">ewr</TableCell>
            </TableRow>

        </>
    )
}

export default CompanyTableRow
