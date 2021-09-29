import React, { useState } from 'react';
import "./navbar.css";
import { useStyles } from '../../materialStyles/icons';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CSVreader from '../CSVreader/csvReader';
import { useSelector } from 'react-redux';


function Navbar() {

    const [open, setOpen] = useState(false);
    const drawerWidth = 240;

    const classes = useStyles();
    const a = useSelector(state => state.csvData)
    console.log(a, "aa")


    return (
        <div>
            <AppBar position="fixed" style={{ backgroundColor: "#2D869E" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => setOpen(true)}
                        edge="start"
                        sx={{ ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <CSVreader />
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={open} variant="persistent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}>
                <IconButton onClick={() => setOpen(false)} size="small" className={classes.chevronIcon} >
                    <ChevronLeftIcon />
                </IconButton>
            </Drawer>
        </div>
    )
}

export default Navbar
