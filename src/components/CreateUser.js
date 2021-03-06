import React, { useState } from "react";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Grid, Paper, Avatar, TextField, Button, Snackbar } from '@material-ui/core'
import {
  useFormik, Formik, Form, 
  ErrorMessage,
} from "formik";
import * as yup from 'yup'
import useLocalStorageState from '../hooks/useLocalStorageState'

const initialValues = {
  name: '',
  email: '',
  password: ''
}
const validationSchema = yup.object({
  name: yup.string().required('Required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})


const CreateUser = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const paperStyle = { display: "flex", flexDirection: "column", padding: "2rem 0", height: 'auto', width: "70vw", maxWidth: "500px", margin: "5vh 0" }
  const inputStyle = { padding: "0 30", width: '75%', height: "5rem", margin: "0 2rem" }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { width: "5rem" }

  /********saving to locastroage part starts********* */

  const [userArray, setUserArray] = useLocalStorageState('users',[])

  const addUser = (newuser) => {
    let noEmptyFieldExist = (newuser.name.trim() !== "" && newuser.password.trim() !== "" && newuser.email.trim() !== "");
    if (noEmptyFieldExist) {
      setUserArray((preUsers) => {
        return [...preUsers, newuser];
      });
    } else {
      alert("Enter User and Password.");
    }
  }


  const onSubmit = (values, submitProps) => {
    addUser(values);
    console.log("userarray", userArray);
    console.log('Form data', values)
    console.log('submitProps', submitProps)
    submitProps.setSubmitting(false)
    submitProps.resetForm()
  };

  console.log("submitting......", JSON.stringify(localStorage.getItem("users"), null, 2))

  /********saving to locastroage part ends********* */


  /****custom snackbar component*** */

  const customSnackbar = (obj) => {
    console.log(obj)
    return (

      Object.keys(obj).map((value, index) => (
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={100000}
          onClose={handleClose}
          message={<ErrorMessage name={value}>
            {error => <div className='error'>{error}</div>}
          </ErrorMessage>
          }
          action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      ))
    )
  }


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(formik) => {
        const {
          values,
          handleChange,
          errors,
          handleBlur
        } = formik;
        return (
          <Grid>
            <Paper elevation={5} style={paperStyle}>
              <Form className="container" >
                <Grid align='center'>
                  <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                  <h2>Create new users</h2>
                </Grid>
                <Grid align='center'>
                  <Grid align='center'>
                    <TextField
                      style={inputStyle}
                      id="outlined-basic"
                      variant="outlined"
                      autoComplete="off"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="name"
                      placeholder="name"
                      value={values.name}
                      rows={"3"}
                    />
                  </Grid>
                  <Grid align='center'>
                  </Grid>
                </Grid>



                <Grid align='center'>
                  <Grid align='center'>
                    <TextField
                      style={inputStyle}
                      id="outlined-basic" variant="outlined"
                      autoComplete="off"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="email"
                      type="text"
                      placeholder="email"
                      value={values.email}
                      rows={"3"}
                    />
                  </Grid>
                  <Grid align='center'>

                  </Grid>
                </Grid>


                <Grid align='center'>
                  <Grid align='center'>
                    <TextField
                      style={inputStyle}
                      id="outlined-basic" variant="outlined"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      name="password"
                      type="text"
                      placeholder="password"
                      value={values.password}
                      rows={"3"}
                    />

                  </Grid>

                </Grid>


                <Grid align='center'>
                  <Button style={btnstyle} onClick={handleClick} className="submit-btn" scolor="primary" variant="contained" fullWidth type="submit">
                    Submit
                  </Button>

                </Grid>



              </Form>
            </Paper>
            <div >
              {
               customSnackbar(errors)
              }

            </div>
          </Grid>

        )
      }}
    </Formik>
  );
};

export default CreateUser;

 
