import React, { useState } from 'react';
import "./navbar.css";
import { useStyles } from '../../materialStyles/icons';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';


function Navbar({ setOpenManu }) {

    const classes = useStyles();
    return (
        <div>
            <div className="navBar">
                <IconButton className={classes.iconButton} onClick={() => setOpenManu(true)} >
                    <MenuIcon className={classes.openSideManu} />
                </IconButton>
            </div>

        </div>
    )
}

export default Navbar
