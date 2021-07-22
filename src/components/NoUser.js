import React from 'react'
import { Alert, AlertTitle } from '@material-ui/lab';
import { Paper } from '@material-ui/core';

const paperStyle = { display:"flex", padding :10,flexDirection:"column",height: '85vh', width: "100%", marginTop: 0,alignItems:"center",justifyContent:"center" }
const errorStyle = { height: "40vh",alignItems:"center",justifyContent:"center"}
const  NoUser = () => {
    return (
        <Paper style={paperStyle}>
            <Alert style={errorStyle} severity="error">
                <AlertTitle>There are no users</AlertTitle>
                Please go back to homepage & <strong>create new users !</strong>
            </Alert>
        </Paper>
    )
}

export default NoUser
