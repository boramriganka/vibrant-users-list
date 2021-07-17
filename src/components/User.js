import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import Paper from '@material-ui/core/Paper'
import DeleteIcon from "@material-ui/icons/Delete";
import { green, pink } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 350,
    minWidth:250,
    backgroundColor: theme.palette.background.paper,
  },
  container:{
    padding :'1.5rem'
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  green: {
    color: '#fff',
    backgroundColor: green[500],
  },
  field:{
    display:'flex',
    justifyContent:"space-between",
    letterSpacing:1
  },
  btn:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height:"1.5rem",
    borderRadius:'50%',
    padding:'1rem',
    width:"1.5rem",
    outline:"none",
    border:"none",
    textDecoration:"none",
    "&:hover":{
      backgroundColor: 'lightblue',
    }
  },
  deleteBtn:{
    height:"1.5rem",
    width:"1.5rem",
    '&:hover':{
      backgroundColor:"red"
    }
  }
}));


function User(props) {
  function onBtnClick(event) {
    event.preventDefault();

    props.delete(props.id);
  }
  const {name,email,password} = props;
  const classes = useStyles();
  return (
    
    <Paper elevation={3}className={classes.root}>
      <div className={classes.container}>

    <List component="nav" aria-label="main mailbox folders">
      <ListItem style={{textTransform:"capitalize"}}className={classes.field}>
      <Avatar className={classes.green}>
        <AccountCircleIcon />
      </Avatar>
      {name}
      </ListItem>
      <ListItem className={classes.field}>
      <Avatar className={classes.pink}>
        < ContactMailIcon />
      </Avatar>
      {email}
      </ListItem>
      <ListItem style={{textTransform:"capitalize"}} className={classes.field}>
      <Avatar className={classes.pink}>
        <LockIcon/>
      </Avatar>
      {password}
      </ListItem>
    </List>
    <button className={classes.btn}  onClick={onBtnClick}>
        <Avatar className={classes.deleteBtn}   aria-label="delete">
          <DeleteIcon />
        </Avatar>
      </button>
 
    
      <Divider />
      </div>
  </Paper>


  );
}

export default User;
