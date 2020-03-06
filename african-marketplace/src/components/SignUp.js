import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import img from './image/eggselling.png';
import './signup.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Dashboard } from './Dashboard';

const SignupErrorMsg = styled.p`
    color: red;
`
const SignupContainer = styled.div`
    background: url(${ img });
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    filter: blur(5px);
`

const SignupInner = styled.div`
  position: absolute;
  top: 9.3%;
  background: rgba(0,0,0,0.6);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SignupHeading = styled.h2`
    color: white;
`;

function SignUp({ values, handleClick, errors, touched, isSubmitting }) {
    handleClick = () => {
        document.querySelector('.signup-container').style.display = 'none';
    }

  return (
    <Router>
      <section>
        <SignupContainer />
          <SignupInner>
            <SignupHeading>Already a Vendor? <Link className="vendor-signup" to="/sign-up">Log In.</Link></SignupHeading>
                <Form className="signup-form">
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
                    <Link to="/dashboard">
                      <button className="signup-btn" disabled={isSubmitting}>Submit</button>
                    </Link>
                </Form>
          </SignupInner>
          <Switch>
            <Route exact path="/dashboard" component={ Dashboard } />
          </Switch>
      </section>
    </Router>
  );
}

const FormikSignupForm = withFormik({
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
          console.log(err); // There was an error creating the data and logs to console
          setSubmitting(false);
        });
    }
  }
})(SignUp);

export default FormikSignupForm;