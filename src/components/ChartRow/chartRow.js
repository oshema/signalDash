import React, { useState, useEffect } from 'react';
import './chartRow.css';
import { useStyles } from '../../materialStyles/table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Collapse from '@mui/material/Collapse';
import { Button } from '@material-ui/core';
import Tooltip from '@mui/material/Tooltip';
import CompanyRoundInfo from '../CompanyRoundInfo/companyRoundInfo';


function ChartRow({ companyData }) {

    const classes = useStyles();
    const [open, setOpen] = useState(false)
    const [isMultiLeads, setIsMultiLeads] = useState(false)
    const [multiLeadsPreview, setMultiLeadsPreview] = useState("")

    useEffect(() => {
        const leadInvestors = companyData.rounds[companyData.rounds.length - 1].leadInvestor;
        checkMultiLeadInvestors(leadInvestors);
    }, [companyData])

    const checkMultiLeadInvestors = (leadInvestors) => {
        let leadsArray = leadInvestors.split(",")
        if (leadsArray.length > 2) {
            setIsMultiLeads(leadInvestors)
            setMultiLeadsPreview(leadsArray.slice(0, 2).join(", "))
        } else {
            setIsMultiLeads(false)
        }
    }

    return (
        <>
            <TableRow className={classes.tableRow} sx={{ '& > *': { borderBottom: 'unset' } }}>
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
                    {companyData.name}
                </TableCell>
                <TableCell align="left">{companyData.established}</TableCell>
                <TableCell align="left">{companyData.numberOfRounds}</TableCell>
                <TableCell align="left">{companyData.totalRaised}</TableCell>
                {isMultiLeads ?
                    <TableCell className={classes.tableCell} align="left">
                        {multiLeadsPreview}
                        <Tooltip title={isMultiLeads}>
                            <Button variant="contained" className={classes.button} color="primary"  >see more...</Button>
                        </Tooltip>
                    </TableCell>
                    :
                    <TableCell align="left">
                        {companyData.rounds[companyData.rounds.length - 1].leadInvestor}
                    </TableCell>
                }
                <TableCell align="left">{companyData.CEO}</TableCell>
                <TableCell align="center">{companyData.score}</TableCell>
            </TableRow>
            <TableRow >
                <>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit >
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                                {companyData.rounds.map(round => (
                                    <div key={round.roundNumber}>
                                        <CompanyRoundInfo roundInfo={round} CEOscore={companyData.CEOscore} />
                                    </div>
                                ))}
                            </div>
                        </Collapse>
                    </TableCell>

                </>
            </TableRow>
        </>
    )
}

export default ChartRow;
