import React from 'react';
import { useDispatch } from 'react-redux';
import loadGroupChart from '../../redux/actions/chartActions';
import Button from '@mui/material/Button';

function ChartRoundTabs({ roundGroup }) {

    const roundGroupData = Object.values(roundGroup)[0];
    const dispatch = useDispatch();

    const handleGroupChart = () => {
        dispatch(loadGroupChart(roundGroupData))
    }

    return (
        <div>
            <Button variant="outlined" size="large" onClick={() => handleGroupChart()}>
                {roundGroup.id}
            </Button>
        </div>
    )
}

export default ChartRoundTabs
