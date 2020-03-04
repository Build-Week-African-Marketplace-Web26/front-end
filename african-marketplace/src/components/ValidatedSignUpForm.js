import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import '../App.css'

const SignupErrorMsg = styled.p`
    color: red;
`
const SignupContainer = styled.div`
    background: rgba(0,0,0,0.8);
    position: absolute;
    z-index: 99;
    width: 40%;
    height: 50vh;
    margin: 5% 28%;
    border-radius: 10px;
    padding: 2%;
`

const SignupHeading = styled.h3`
    color: white;
`
const SignupCopy = styled.p`
    color: white;
`


function ValidatedSignUpForm({ values, errors, touched, isSubmitting }) {
  return (
    <SignupContainer>
     <SignupHeading>New to African Marketplace?</SignupHeading>
     <SignupCopy>Please create an account!</SignupCopy>
        <Form>
            <div>
                {touched.name && errors.name && <SignupErrorMsg>{errors.name}</SignupErrorMsg>}
                <Field className="inputs" type="text" name="name" placeholder="name" />
            </div>
            <div>
                {touched.email && errors.email && <SignupErrorMsg>{errors.email}</SignupErrorMsg>}
                <Field className="inputs" type="email" name="email" placeholder="email" />
            </div>
            <div>
                {touched.password && errors.password && <SignupErrorMsg>{errors.password}</SignupErrorMsg>}
                <Field className="inputs" type="password" name="password" placeholder="Password" />
            </div>
            <button className="signup-btn" disabled={isSubmitting}>Submit</button>
        </Form>
    </SignupContainer>
  );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ name, email, password }) {
    return {
      name: name || "",
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("Name is required"),
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be 16 characters or longer")
      .required("Password is required")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    if (values.email === "alreadytaken@atb.dev") {
      setErrors({ email: "That email is already taken" });
    } else {
      axios
        .post("https://yourdatabaseurlgoeshere.com", values)
        .then(res => {
          console.log(res); // Data was created successfully and logs to console
          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          console.log(err); // There was an error creating the data and logs to console
          setSubmitting(false);
        });
    }
  }
})(ValidatedSignUpForm);

export default FormikLoginForm;