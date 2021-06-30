import React from "react";
import { Link } from "react-router-dom"
import { Grid, Paper, Tabs, Tab } from '@material-ui/core'
import { useState } from "react";

const navStyle= {
    display: "flex",
    flexDirection: "row",
    justifyContent:"center",
    height:"15vh",
    alignItems:"center",
    paddingTop:20,
    backgroundColor: '#220000',
    color: '#fff',
}

const paperStyle = { display:"flex", flexDirection:"column",padding:0, height: '15vh', width: "100%", margin: 0 }

const Header = () => {
  const [value,setValue] = useState(0);
  const handleChange = (event, value) => {
    setValue(value);
  };
  return (
    <Paper style ={paperStyle}elevation={3}>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor={"secondary"}
              centered
              style={navStyle}
            >
              <Tab label="Home" to="/" component={Link} />
              <Tab label="Users" to="/users" component={Link} />
            </Tabs>
    </Paper>
  );
}

export default Header;
