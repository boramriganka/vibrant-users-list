import React, { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Grid, Typography } from '@material-ui/core';
import {
  useFormik, Formik, Form, Field,
  ErrorMessage,
  FieldArray,
  FastField
} from "formik";
import * as yup from 'yup'
import Paper from '@material-ui/core/Paper';

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
    // validateOnChange={false}
    // validateOnBlur={false}
    // validateOnMount
    >
      {formik => {
        return (
          <Grid contaienr spacing={3}>
            <div className="Header">
              <p>Create Users !</p>

            </div>
            <Form className="container" >

              <Grid
                item xs={12}>

                <TextField

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
                <ErrorMessage name='name'>
                  {error => <div className='error'>{error}</div>}
                </ErrorMessage>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="outlined-basic" variant="outlined"
                  autoComplete="off"
                  onChange={formik.handleChange}
                  name="email"
                  type="text"
                  placeholder="email"
                  value={formik.values.email}
                  rows={"3"}
                />
                <ErrorMessage name='email'>
                  {error => <div className='error'>{error}</div>}
                </ErrorMessage>
              </Grid>


              <Grid item xs={12}>

                <TextField
                  id="outlined-basic" variant="outlined"
                  onChange={formik.handleChange}
                  name="password"
                  type="text"
                  placeholder="password"
                  value={formik.values.password}
                  rows={"3"}
                />
                <ErrorMessage name='password'>
                  {error => <div className='error'>{error}</div>}
                </ErrorMessage>
              </Grid>



              <Button className="submit-btn" scolor="primary" variant="contained" fullWidth type="submit">
                Submit
              </Button>

            </Form>
          </Grid>

        )
      }}
    </Formik>
  );
}

export default CreateUser;

