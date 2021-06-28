import React, { useState, useEffect } from "react";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Grid, Paper, Avatar, TextField, Button, Snackbar } from '@material-ui/core'
import {
  useFormik, Formik, Form, Field,
  ErrorMessage,
} from "formik";
import * as yup from 'yup'


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
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const paperStyle = { padding: 20, height: '90vh', width: 400, margin: "20px auto" }
  const inputStyle = { padding: "0 20", width: '15rem', height: "5rem", margin: "0 2rem" }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  const btnstyle = { margin: '8px 0' }

  /********saving to locastroage part starts********* */

  const [userArray, setUserArray] = useState(() => {
    const localStorageData = localStorage.getItem("users");
    return localStorageData ? JSON.parse(localStorageData) : [];
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(userArray));
  }, [userArray])

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

  const formik = useFormik({
    initialValues: {
      name:'',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,

  });
  const onSubmit = (values, submitProps) => {
    addUser(values);
    console.log("userarray", userArray);
    console.log('Form data', values)
    console.log('submitProps', submitProps)
    submitProps.setSubmitting(false)
    submitProps.resetForm()
  };

  console.log("submitting......", JSON.stringify(localStorage.getItem("users"), null, 2))

  /********saving to locastroage part starts********* */

  return (
    <Formik

      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {formik => {
        return (
          <Grid>
            <Paper elevation={10} style={paperStyle}>
              <Form className="container" >
                <Grid align='center'>
                  <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                  <h2>Users</h2>
                </Grid>
                <Grid align='center'>
                  <Grid align='center'>
                    <TextField
                      style={inputStyle}
                      id="outlined-basic"
                      variant="outlined"
                      autoComplete="off"
                      type="text"
                      onChange={formik.handleChange}
                      name="name"
                      placeholder="name"
                      value={formik.values.name}
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
                      onChange={formik.handleChange}
                      name="email"
                      type="text"
                      placeholder="email"
                      value={formik.values.email}
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
                      onChange={formik.handleChange}
                      name="password"
                      type="text"
                      placeholder="password"
                      value={formik.values.password}
                      rows={"3"}
                    />

                  </Grid>

                </Grid>


                <Grid align='center'>
                  <Button onClick={handleClick} className="submit-btn" scolor="primary" variant="contained" fullWidth type="submit">
                    Submit
                  </Button>

                </Grid>



              </Form>
            </Paper>
            <div>
              {
                //Snackbar for errors

                Object.keys(formik.errors).map((value, index) => (
                  console.log("error values", value),
                  <Snackbar
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message={<ErrorMessage name={value}>
                      {error => <div className='error'>{error}</div>}
                    </ErrorMessage>
                    }
                    action={
                      <React.Fragment>
                        <Button color="secondary" size="small" onClick={handleClose}>
                          UNDO
                        </Button>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                          <CloseIcon fontSize="small" />
                        </IconButton>
                      </React.Fragment>
                    }
                  />
                ))
              }

            </div>
          </Grid>

        )
      }}
    </Formik>
  );
}

export default CreateUser;

