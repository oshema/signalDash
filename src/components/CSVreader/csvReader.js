import React from 'react';
import { useDispatch } from 'react-redux';
import { storeCSVdata } from '../../redux/actions/csvActions';
import { csvDataFailure } from '../../redux/actions/csvActions';
import { CSVReader } from 'react-papaparse';
import { useStyles } from '../../materialStyles/icons';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';


const buttonRef = React.createRef()


function CSVreader({ isOpen }) {

    const classes = useStyles();
    const dispatch = useDispatch()


    const handleOpenDialog = (e) => {
        if (buttonRef.current) {
            buttonRef.current.open(e)
        }
    }

    const handleOnFileLoad = (data) => {
        dispatch(storeCSVdata(data));
    }

    const handleOnError = (err) => {
        console.log(err)
        dispatch(csvDataFailure(err))
    }

    return (
        <div style={{
            position: "absolute",
            top: "35px",
            left: isOpen ? "calc(50% + 120px)" : "calc(50% + 25px)",
            transform: "translateX(-50%)",
            transition: isOpen ? "1s" : "0.3s",
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
                            <Tooltip title="Upload a CSV file">
                                <Fab type='button' color="primary" className={classes.addCSVIcon} aria-label="add" onClick={handleOpenDialog}>
                                    <AddIcon />
                                </Fab>
                            </Tooltip>
                        </div>
                    </aside>
                )}
            </CSVReader>
        </div >
    )
}

export default CSVreader
