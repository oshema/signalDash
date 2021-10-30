import React, { useState, useEffect } from 'react';
import './chartRow.css';
import { useStyles } from '../../materialStyles/table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Collapse from '@mui/material/Collapse';
import { Button, Divider } from '@material-ui/core';
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
        caculateTVR();
        caculateFinance();
    }, [])

    const checkMultiLeadInvestors = (leadInvestors) => {
        let leadsArray = leadInvestors.split(",")
        if (leadsArray.length > 2) {
            setIsMultiLeads(leadInvestors)
            setMultiLeadsPreview(leadsArray.slice(0, 2).join(", "))
        } else {
            setIsMultiLeads(false)
        }
    }

    const caculateTVR = () => {
        //TSLI - Time since last investment
        let TSLIsum = 0
        for (let i = 1; i < companyData.rounds.length; i++) {
            TSLIsum += companyData.rounds[i].TSLI;
            let avgTSLIforRound = TSLIsum / i
            if (avgTSLIforRound < 7) companyData.rounds[i].TVR = 10;
            else if (avgTSLIforRound > 23) companyData.rounds[i].TVR = 0;
            // caculate each round avg TSLI(6-24) and return points between 0-10
            else companyData.rounds[i].TVR = 10 - ((avgTSLIforRound - 6) * 0.555)
        }
    }


    //TODO: Need to fix missing finance score in some rounds.
    const caculateFinance = () => {
        let financeTotal = +companyData.rounds[0].investment;
        for (let i = 1; i < companyData.rounds.length; i++) {
            financeTotal += +companyData.rounds[i].investment;
            switch (companyData.rounds[i].roundNumber) {
                case 2:
                    if (financeTotal > 15) companyData.rounds[i].finance = 5;
                    break;
                case 3:
                    if (financeTotal > 35) companyData.rounds[i].finance = 5;
                    break;
                case 4:
                    if (financeTotal > 70) companyData.rounds[i].finance = 5;
                    break;
                case 5:
                    if (financeTotal > 110) companyData.rounds[i].finance = 5;
                    break;
                case 6:
                    if (financeTotal > 170) companyData.rounds[i].finance = 5;
                    break;
                case 7:
                    if (financeTotal > 250) companyData.rounds[i].finance = 5;
                    break;
                default:
                    break;
            }
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
                            <Button variant="contained" className={classes.button} color="primary"  >
                                see more...
                            </Button>
                        </Tooltip>
                    </TableCell>
                    :
                    <TableCell align="left">
                        {companyData.rounds[companyData.rounds.length - 1].leadInvestor}
                    </TableCell>
                }
                <TableCell align="left">{companyData.CEO}</TableCell>
                <TableCell align="center">not yet</TableCell>
            </TableRow>
            <TableRow >
                <>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit >
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                                {companyData.rounds.map(round => (
                                    <div key={round.roundNumber}>
                                        <CompanyRoundInfo roundInfo={round} allRoundsInfo={companyData.rounds} />
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
