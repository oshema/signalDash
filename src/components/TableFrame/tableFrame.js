import React from 'react';
import './tableFrame.css';
import { useSelector } from 'react-redux';
import RoundGroupTabs from '../RoundGroupTabs/roundGroupTabs';
import CompaniesTable from '../CompaniesTable/companiesTable';

function TableFrame() {


    const csvData = useSelector(state => state.csvData)
    const csvDataByGroups = csvData.csvData;
    const chartData = useSelector(state => state.chartData)

    return (
        <div className="tableFrameBox">
            {!csvData.error &&
                <>
                    <div className="tabsContainer">
                        {csvDataByGroups.map((roundGroup) => (
                            <RoundGroupTabs key={roundGroup.id} roundGroup={roundGroup} />
                        ))}
                    </div>
                    <div>
                        <CompaniesTable chartData={chartData.roundGroupData} />
                    </div>
                </>
            }
        </div>
    )
}

export default TableFrame;
