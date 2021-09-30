import React from 'react';
import './sideManu.css';
import { useStyles } from '../../materialStyles/icons';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

function SideManu({ openManu, setOpenManu }) {

    const classes = useStyles();
    return (
        <div>
            <div className="sideManuContainer">
                {openManu &&
                    <IconButton onClick={() => setOpenManu(false)} size="small" className={classes.chevronIcon} >
                        <ChevronLeftIcon />
                    </IconButton>
                }
            </div>

        </div>
    )
}

export default SideManu
