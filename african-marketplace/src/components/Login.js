import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import './login.css';
import FormikSignupForm from './SignUp';
import img from './image/eggselling.png';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, useHistory, useLocation } from 'react-router-dom';
import { Dashboard } from './Dashboard';

const LoginErrorMsg = styled.p`
    color: red;
`

const SignupContBg = styled.div`
    background-image: url(${ img });
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(5px);
    height: 100vh;
`
const SignupInner = styled.div`
  position: absolute;
  top: 9.3%;
  background: rgba(0,0,0,0.6);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const GoSignUp = styled.h2`
  color: white;
`;

function Login({ values, handleClick, errors, touched, isSubmitting }) {
    handleClick = () => {
        document.querySelector('.signup-container').style.display = 'none';
    }
    
  return (
    <Router>
      <section>
        <SignupContBg></SignupContBg>
          <SignupInner>
            <GoSignUp>Not Yet a Vendor? <Link className="vendor-signup" to="/sign-up">Sign Up.</Link></GoSignUp>          
                <Form className="form">
                    <div>
                        {touched.email && errors.email && <LoginErrorMsg>{errors.email}</LoginErrorMsg>}
                        <Field className="inputs" type="email" name="email" placeholder="email" />
                    </div>
                    <div>
                        {touched.password && errors.password && <LoginErrorMsg>{errors.password}</LoginErrorMsg>}
                        <Field className="inputs" type="password" name="password" placeholder="Password" />
                    </div>
                    <Link exact to="/dashboard">
                    <button className="signup-btn" disabled={isSubmitting}>Submit</button>
                    </Link>
                </Form>
          </SignupInner>
      </section>
      <Switch>
        <Route exact path="/sign-up" component={ FormikSignupForm } />
        <Route exact path="/dashboard" component={ Dashboard } />
      </Switch>
    </Router>
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
      .min(8, "Password must be 8 characters or longer")
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
})(Login);

export default FormikLoginForm;