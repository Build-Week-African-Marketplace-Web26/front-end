import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import '../App.css';
import '../index.css';
import FormikSignupForm from './ValidatedSignUpForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

//Styled Components (Essien)
const LoginErrorMsg = styled.p`
    color: red;
`

const SignupContainer = styled.div`
    background: rgba(0,0,0,0.8);
    position: absolute;
    z-index: 98;
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

function ValidatedLoginForm({ values, handleClick, errors, touched, isSubmitting }) {
    handleClick = () => {
        document.querySelector('.signup-container').style.display = 'none';
    }
    
  return (
    <SignupContainer className="signup-container">
        <FontAwesomeIcon onClick={ handleClick } className="login-icons" icon={ faWindowClose } ></FontAwesomeIcon>
        <SignupHeading>Already a member?</SignupHeading>
        <SignupCopy>Please login!</SignupCopy>
        
            <Form>
                <div>
                    {touched.email && errors.email && <LoginErrorMsg>{errors.email}</LoginErrorMsg>}
                    <Field className="inputs" type="email" name="email" placeholder="email" />
                </div>
                <div>
                    {touched.password && errors.password && <LoginErrorMsg>{errors.password}</LoginErrorMsg>}
                    <Field className="inputs" type="password" name="password" placeholder="Password" />
                </div>
                <button className="signup-btn" disabled={isSubmitting}>Submit</button>
            </Form>
    </SignupContainer>
    );
}

const FormikLoginForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
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
          console.log(err); // There was an error creating the d ata and logs to console
          setSubmitting(false);
        });
    }
  }
})(ValidatedLoginForm);

export default FormikLoginForm;