import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";

const SignupErrorMsg = styled.p`
    color: red;
`

function ValidatedSignUpForm({ values, errors, touched, isSubmitting }) {
  return (
    <div>
     <p>New to African Marketplace?</p>
     <p>Please create an account!</p>
        <Form>
            <div>
                {touched.name && errors.name && <SignupErrorMsg>{errors.name}</SignupErrorMsg>}
                <Field type="text" name="name" placeholder="name" />
            </div>
            <div>
                {touched.email && errors.email && <SignupErrorMsg>{errors.email}</SignupErrorMsg>}
                <Field type="email" name="email" placeholder="email" />
            </div>
            <div>
                {touched.password && errors.password && <SignupErrorMsg>{errors.password}</SignupErrorMsg>}
                <Field type="password" name="password" placeholder="Password" />
            </div>
            <button disabled={isSubmitting}>Submit</button>
        </Form>
    </div>
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