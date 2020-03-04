import React from "react";
import ReactDOM from "react-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";

const LoginErrorMsg = styled.p`
    color: red;
`

function ValidatedLoginForm({ values, errors, touched, isSubmitting }) {
  return (
    <div>
     <p>Already a member?</p>
     <p>Please login!</p>
        <Form>
            <div>
                {touched.email && errors.email && <LoginErrorMsg>{errors.email}</LoginErrorMsg>}
                <Field type="email" name="email" placeholder="email" />
            </div>
            <div>
                {touched.password && errors.password && <LoginErrorMsg>{errors.password}</LoginErrorMsg>}
                <Field type="password" name="password" placeholder="Password" />
            </div>
            <button disabled={isSubmitting}>Submit</button>
        </Form>
    </div>
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
      .min(16, "Password must be 16 characters or longer")
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
})(ValidatedLoginForm);

export default FormikLoginForm;