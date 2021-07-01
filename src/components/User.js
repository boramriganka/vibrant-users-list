import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import LockIcon from '@material-ui/icons/Lock';
import Paper from '@material-ui/core/Paper'
import DeleteIcon from "@material-ui/icons/Delete";
import { green, pink } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 250,
    backgroundColor: theme.palette.background.paper,
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
    justifyContent:"space-between"
  },
  btn:{
    height:"1.5rem",
    width:"1.5rem",
    outline:"none",
    border:"none",
    textDecoration:"none"
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
    <List component="nav" aria-label="main mailbox folders">
      <ListItem className={classes.field}>
      <Avatar className={classes.green}>
        <ContactPhoneIcon />
      </Avatar>
      {name}
      </ListItem>
      <ListItem className={classes.field}>
      <Avatar className={classes.pink}>
        < ContactMailIcon />
      </Avatar>
      {email}
      </ListItem>
      <ListItem  className={classes.field}>
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
    
   
  </Paper>


  );
}

export default User;
