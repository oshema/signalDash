import React, { useState, useEffect } from 'react';
import "./companyRoundInfo.css";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import { Button, Tooltip } from '@material-ui/core';


function CompanyRoundInfo({ roundInfo, CEOscore, leadScore, preLeadScore }) {

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
                    <div className="inline"><AttachMoneyIcon /><div>{`${roundInfo.investment} (m)`}</div></div>
                    <div className="inline"><DateRangeIcon /><div>{roundInfo.date}</div></div>
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
                    <div>{`TSLI: ${roundInfo.TSLI}`}</div>
                </div>
                <div className="scoreData">
                    <div>{`IGR Score: ${roundInfo.IGR}`}</div>
                    <div>{`TVR Score: ${roundInfo.TVR}`}</div>
                    <div>{`Finance Score: ${roundInfo.finance}`}</div>
                    <div>{`CEO score: ${CEOscore}`}</div>
                    <div>{`Lead Score ${leadScore}`}</div>
                    <div>{`Previous Lead Score ${preLeadScore}`}</div>
                </div>
            </div>
        </>
    )
}

export default CompanyRoundInfo
