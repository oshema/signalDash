import React, { useState } from 'react';
import "./navbar.css";
import { useStyles } from '../../materialStyles/icons';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';


function Navbar() {

    const [open, setOpen] = useState(false);
    const drawerWidth = 240;

    const classes = useStyles();

    return (
        <div>
            <AppBar>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => setOpen(true)}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" variant="persistent" open={open}
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
