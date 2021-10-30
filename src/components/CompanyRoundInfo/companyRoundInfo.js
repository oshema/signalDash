import React, { useState, useEffect } from 'react';
import "./companyRoundInfo.css";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import { Button, Tooltip } from '@material-ui/core';


function CompanyRoundInfo({ roundInfo, allRoundsInfo }) {

    const [isMultiLeads, setIsMultiLeads] = useState(false)
    const [multiLeadsPreview, setMultiLeadsPreview] = useState("")
    const [isMultiInvestors, setIsMultiInvestor] = useState(false)
    const [multiInvestorsPreview, setMultiInvestorPreview] = useState("")

    useEffect(() => {
        const leadInvestors = roundInfo.leadInvestor
        const investors = roundInfo.investors
        checkMultiInvestors(leadInvestors, investors)
        let IGRscore = IGRcaculation(roundInfo.multiplier, roundInfo.TSLI)
        roundInfo.IGR = IGRscore;
        roundInfo.TVR = Math.round(roundInfo.TVR * 100) / 100
        console.log(roundInfo)
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
                    <div>TVR Score: {roundInfo.TVR}</div>
                    <div>Finance Score: {roundInfo.Finance}</div>
                    <div>CEO score</div>
                    <div>Lead Score</div>
                    <div>Previous Lead Score</div>
                </div>
            </div>
        </>
    )
}

export default CompanyRoundInfo
