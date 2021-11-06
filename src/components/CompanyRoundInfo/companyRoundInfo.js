import React, { useState, useEffect } from 'react';
import "./companyRoundInfo.css";
import { useStyles } from '../../materialStyles/table';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import { Button, Tooltip } from '@material-ui/core';
import Typography from '@mui/material/Typography';


function CompanyRoundInfo({ roundInfo, CEOscore, leadScore, preLeadScore }) {

    const classes = useStyles();

    const [isMultiLeads, setIsMultiLeads] = useState(false)
    const [multiLeadsPreview, setMultiLeadsPreview] = useState("")
    const [isMultiInvestors, setIsMultiInvestor] = useState(false)
    const [multiInvestorsPreview, setMultiInvestorPreview] = useState("")

    useEffect(() => {
        const leadInvestors = roundInfo.leadInvestor
        const investors = roundInfo.investors
        checkMultiInvestors(leadInvestors, investors)
        roundInfo.TVR = Math.round(roundInfo.TVR * 100) / 100
    }, [roundInfo])

    const checkMultiInvestors = (leadInvestors, investors) => {
        let leadsArray = leadInvestors.split(",")
        let investorsArray = investors.split(",")
        if (leadsArray.length > 1) {
            setIsMultiLeads(leadInvestors)
            setMultiLeadsPreview(leadsArray.slice(0, 1).join(""))
        } else {
            setIsMultiLeads(false)
        }
        if (investorsArray.length > 1) {
            setIsMultiInvestor(investors)
            setMultiInvestorPreview(investorsArray[0])
        } else {
            setIsMultiInvestor(false)
        }
    }

    return (
        <>

            <div className="companyRoundInfo-container">
                <div className="rawData">
                    <Tooltip
                        placement="right-start"
                        title={
                            <>
                                <Typography className={classes.tooltip} >Round Investment</Typography>
                            </>
                        }
                    >
                        <div className="inline"><AttachMoneyIcon /><div>{`${roundInfo.investment} (m)`}</div></div>
                    </Tooltip>
                    <Tooltip
                        placement="right-start"
                        title={
                            <>
                                <Typography className={classes.tooltip} >Round Date</Typography>
                            </>
                        }
                    >
                        <div className="inline"><DateRangeIcon /><div>{roundInfo.date}</div></div>
                    </Tooltip>
                    <Tooltip
                        placement="right-start"
                        title={
                            <>
                                <Typography className={classes.tooltip} >Lead Investor/s</Typography>
                            </>
                        }
                    >

                        <div className="inline"><AccountCircleIcon />
                            <div>
                                {isMultiLeads ?

                                    <div>
                                        {multiLeadsPreview}
                                        <Tooltip title={isMultiLeads}>
                                            <Button variant="contained" size="small" color="primary"  >
                                                see more...
                                    </Button>
                                        </Tooltip>
                                    </div>
                                    :
                                    <div >
                                        {roundInfo.leadInvestor}
                                    </div>
                                }
                            </div>
                        </div>
                    </Tooltip>
                    <Tooltip
                        placement="right-start"
                        title={
                            <>
                                <Typography className={classes.tooltip} >Investor/s</Typography>
                            </>
                        }
                    >
                        <div className="inline" ><GroupIcon />
                            <div>
                                {isMultiInvestors ?
                                    <div>
                                        <div>{multiInvestorsPreview}</div>
                                        <Tooltip title={isMultiInvestors}>
                                            <Button variant="contained" size="small" color="primary"  >
                                                see more...
                                    </Button>
                                        </Tooltip>
                                    </div>
                                    :
                                    <div >
                                        {roundInfo.investors}
                                    </div>
                                }
                            </div>
                        </div>
                    </Tooltip>
                    <Tooltip
                        placement="right-start"
                        title={
                            <>
                                <Typography className={classes.tooltip} >TSLI - Time Since Last Round ({`${roundInfo.TSLI}`})</Typography>
                            </>
                        }
                    >
                        <div>{`TSLI: ${roundInfo.TSLI}`}</div>
                    </Tooltip>
                </div>
                <div className="scoreData">
                    <Tooltip
                        placement="right-start"
                        title={
                            <>
                                <Typography className={classes.tooltip} >IGR - Investment Growth Relevance (25%)</Typography>
                                <Typography className={classes.tooltip}>Formula - multiplier ({`${roundInfo.multiplier}`}) / TSLI ({`${roundInfo.TSLI}`}) * monthly factor</Typography>
                                <Typography className={classes.tooltip}>'Multiplier' - investment ratio between two rounds</Typography>
                                <Typography className={classes.tooltip}>'Monthly factor' - value between 1-3 based on TSLI</Typography>
                                <Typography className={classes.tooltip}>*Finale IGR score can be up to 15 points if formula result is below '0.5'</Typography>
                                <Typography className={classes.tooltip}>*Finlae IGR score can be up to 25 points if formula result is above '0.5'</Typography>
                            </>
                        }
                    >
                        <div>{`IGR Score: ${roundInfo.IGR}`}</div>
                    </Tooltip>
                    <Tooltip
                        placement="right-start"
                        title={
                            <>
                                <Typography className={classes.tooltip} >TVR - Time Versus Rounds (10%)</Typography>
                                <Typography className={classes.tooltip}>Formula - Avg TSLI ( TSLI / (number or rounds-1)</Typography>
                                <Typography className={classes.tooltip}>Finale TVR score will be between 1-10 depends of TSLI in 6-24 months </Typography>
                                <Typography className={classes.tooltip}>*6 months or below will credit 10 points</Typography>
                                <Typography className={classes.tooltip}>*24 months or above will credit 1 point</Typography>
                            </>
                        }
                    >
                        <div>{`TVR Score: ${roundInfo.TVR}`}</div>
                    </Tooltip>
                    <Tooltip
                        placement="right-start"
                        title={
                            <>
                                <Typography className={classes.tooltip} >Finance - Total raised investment (5%)</Typography>
                                <Typography className={classes.tooltip}>5 points will be credited upon company funding sum reach above fixed threshold </Typography>
                                <Typography className={classes.tooltip}> 2 rounds group threshold - 15m </Typography>
                                <Typography className={classes.tooltip}> 3 rounds group threshold - 35m </Typography>
                                <Typography className={classes.tooltip}> 4 rounds group threshold - 70m </Typography>
                                <Typography className={classes.tooltip}> 5 rounds group threshold - 110m </Typography>
                                <Typography className={classes.tooltip}> 6 rounds group threshold - 170m </Typography>
                                <Typography className={classes.tooltip}> 7+ rounds group threshold - 250m </Typography>
                            </>
                        }
                    >
                        <div>{`Finance Score: ${roundInfo.finance}`}</div>
                    </Tooltip>
                    <div>{`CEO score: ${CEOscore}`}</div>
                    <div>{`Lead Score ${leadScore}`}</div>
                    <div>{`Previous Lead Score ${preLeadScore}`}</div>
                </div>
            </div>
        </>
    )
}

export default CompanyRoundInfo
