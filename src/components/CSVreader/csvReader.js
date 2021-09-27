import React, { useState } from 'react';
import { CSVReader } from 'react-papaparse';
import { useStyles } from '../../materialStyles/icons';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import LinearProgress from '@mui/material/LinearProgress';


const buttonRef = React.createRef()


function CSVreader() {

    const classes = useStyles();


    const handleOpenDialog = (e) => {
        if (buttonRef.current) {
            buttonRef.current.open(e)
        }
    }

    const handleOnFileLoad = (data) => {
        console.log('---------------------------')
        console.log(data)
        console.log('---------------------------')
    }

    const handleOnError = (err) => {
        console.log(err)
    }

    return (
        <div style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            marginTop: "100px",
            width: "200px",
            color: "lightblue",
        }}>

            <CSVReader
                ref={buttonRef}
                onFileLoad={handleOnFileLoad}
                onError={handleOnError}
                noClick
                progressBarColor='red'
            >
                {({ file }) => (
                    <aside
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            style={{
                                textAlign: "center",
                            }}
                        >
                            <Fab type='button' color="primary" className={classes.addCSVIcon} aria-label="add" onClick={handleOpenDialog}>
                                <AddIcon />
                            </Fab>
                            <div
                                style={{
                                    marginTop: "20px",
                                    fontSize: "23px",
                                }}
                            >
                                CSV
                            </div>
                        </div>

                    </aside>
                )}
            </CSVReader>
        </div >
    )
}

export default CSVreader
