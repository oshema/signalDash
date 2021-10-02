import React from 'react';
import './chartContainer.css';
import { useSelector } from 'react-redux';
import RoundGroupTabs from '../ChartRoundTabs/chartRoundTabs';
import ChartMain from '../ChartMain/chartMain';
import Paper from '@mui/material/Paper';


function ChartContainer() {


    const csvData = useSelector(state => state.csvData)
    const csvDataByGroups = csvData.csvData;
    const chartData = useSelector(state => state.chartData)

    return (
        <div className="chartContainer">
            <div className="chartContainer-leftMargin">

            </div>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>

                {!csvData.error &&
                    <>
                        <div className="chartContainer-tabs">
                            {csvDataByGroups.map((roundGroup) => (
                                <RoundGroupTabs key={roundGroup.id} roundGroup={roundGroup} />
                            ))}
                        </div>
                        <div>
                            <ChartMain chartData={chartData.roundGroupData} />
                        </div>

                    </>
                }
            </Paper>
            <div className="chartContainer-rightMargin">

            </div>
        </div>
    )
}

export default ChartContainer;
