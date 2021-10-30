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
    const [totalScore, setTotalScore] = useState("")

    useEffect(() => {
        companyData.rounds.map(round => {
            round.IGR = IGRcaculation(round.multiplier, round.TSLI);
        })
        const leadInvestors = companyData.rounds[companyData.rounds.length - 1].leadInvestor;
        checkMultiLeadInvestors(leadInvestors);
        caculateTVR();
        caculateFinance();
        caculateTeamScore();
        caculateFinalScore();
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

    const caculateTVR = () => {
        //TSLI - Time since last investment
        let TSLIsum = 0
        for (let i = 1; i < companyData.rounds.length; i++) {
            TSLIsum += companyData.rounds[i].TSLI;
            let avgTSLIforRound = TSLIsum / i
            if (avgTSLIforRound < 7) companyData.rounds[i].TVR = 10;
            else if (avgTSLIforRound > 23) companyData.rounds[i].TVR = 0;
            // caculate each round avg TSLI(6-24) and return points between 0-10
            else {
                const TVRscore = 10 - ((avgTSLIforRound - 6) * 0.555)
                companyData.rounds[i].TVR = Math.round(TVRscore * 100) / 100
            }
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
                    companyData.rounds[i].finance = 0;
                    break;
            }
        }
    }

    const IGRcaculation = (multiplier, TSLI) => {
        let IGRscore = "N/A"
        if (TSLI && multiplier) {
            let IGRrawScore = multiplier / TSLI;

            let refundingTimingFactor = 3;
            if (TSLI <= 5) console.log("↓↓↓ Need Checking IGR ↓↓↓")

            else if (TSLI <= 12) {
                //reducing 0.085 factor value for every TSLI-month above 5. if TSLI = 8 then reducing 0.255(0.085 x 3) from the base factor of 3 => 2.745
                refundingTimingFactor -= ((TSLI - 5) * 0.085);
            }
            else if (TSLI <= 24) {
                //above 1 year start with 0.6 less factor value
                refundingTimingFactor -= 0.6;
                //reducing 0.11 factor value for every TSLI-month above 12. if TSLI = 14 then reducing 0.220(0.11 x 2) from the base factor of 2.4 => 2.180
                refundingTimingFactor -= ((TSLI - 12) * 0.11);
            }
            else refundingTimingFactor = 1;

            IGRscore = IGRrawScore * refundingTimingFactor;
            IGRscore = Math.round(IGRscore * 100) / 100;
        }
        IGRscore = IGRvalueCac(IGRscore)
        IGRscore = Math.round(IGRscore * 100) / 100
        return IGRscore
    }

    const IGRvalueCac = (IGR) => {
        //Here we detremine the value of IGR score and shift it to score between 0-25points (25% from final score)
        if (IGR < 0.04) IGR = 1;
        else if (IGR >= 0.04 && IGR <= 0.5) {
            // 15 points passible divided to 46 (0.46 points of value )
            let measureValue = 15 / 46
            IGR = (IGR - 0.04) * 100 * measureValue
        }
        else if (IGR > 0.5) {
            // Another 10 points - 1 points for each 0.1 above 0.5
            if (IGR > 1.5) IGR = 25;
            else IGR = ((IGR - 0.5) * 10) + 15;
        }
        return IGR;
    }

    const caculateTeamScore = () => {
        const rankValue = {
            CEOandLead: {
                AAA: 21.84,
                AA: 16.38,
                A: 10.92,
                B: 5.46
            },
            previousLead: {
                AAA: 16.32,
                AA: 12.24,
                A: 8.16,
                B: 4.08
            }
        }
        companyData.CEOscore ?
            companyData.CEOscore = rankValue.CEOandLead[companyData.CEOscore]
            :
            companyData.CEOscore = 0;
        companyData.leadScore ?
            companyData.leadScore = rankValue.CEOandLead[companyData.leadScore]
            :
            companyData.leadScore = 0;
        companyData.previousLeadScore ?
            companyData.previousLeadScore = rankValue.previousLead[companyData.previousLeadScore]
            :
            companyData.previousLeadScore = 0;
    }

    //TODO: 1 - FIX FINANCE |  2 - FIX SCORE SORT 
    const caculateFinalScore = () => {
        const lastRound = companyData.rounds[companyData.rounds.length - 1];
        const finalIGR = lastRound.IGR;
        const finalTVR = lastRound.TVR;
        const finalFinance = lastRound.finalfinance ? lastRound.finance : 0
        const { CEOscore } = companyData;
        const { leadScore } = companyData;
        const { previousLeadScore } = companyData
        const score = finalIGR + finalTVR + finalFinance + CEOscore + leadScore + previousLeadScore;
        const finalScore = Math.round(score * 100) / 100
        companyData.score = finalScore;
        setTotalScore(finalScore);

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
                <TableCell align="center">{totalScore && totalScore}</TableCell>
            </TableRow>
            <TableRow >
                <>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit >
                            <div style={{ display: "flex", flexWrap: "wrap" }}>
                                {companyData.rounds.map(round => (
                                    <div key={round.roundNumber}>
                                        <CompanyRoundInfo roundInfo={round} CEOscore={companyData.CEOscore} leadScore={companyData.leadScore} preLeadScore={companyData.previousLeadScore} />
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
