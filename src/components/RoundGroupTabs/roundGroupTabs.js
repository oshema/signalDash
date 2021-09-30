import React from 'react';
import { useDispatch } from 'react-redux';
import loadGroupChart from '../../redux/actions/chartActions';
import { storeCSVdata } from '../../redux/actions/csvActions';
import Button from '@mui/material/Button';

function RoundGroupTabs({ roundGroup }) {

    const roundGroupData = Object.values(roundGroup)[0];
    const dispatch = useDispatch();

    console.log(roundGroup)
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

export default RoundGroupTabs
