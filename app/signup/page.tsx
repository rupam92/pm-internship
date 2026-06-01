
"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name too short")
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

const Page = () => {
  return (
    <div className=" flex items-center h-full justify-center bg-[#66b3ff29] px-3 py-5">

      <div className="w-full max-w-md bg-white rounded-4 px-4 py-3 shadow-lg mb-5">

        <h1 className="text-3xl font-bold text-center mb-3">
          Sign Up
        </h1>

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form>

              {/* NAME */}
              <div className="mb-2">
                <label className="mb-2 font-semibold">
                  Full Name
                </label>

                <Field
                  type="text"
                  name="name"
                  placeholder="Enter full name"
                  className="w-full border rounded-xl px-3 py-3 outline-none"
                />

                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* EMAIL */}
              <div className="mb-2">
                <label className="mb-2 font-semibold">
                  Email
                </label>

                <Field
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className="w-full border rounded-xl px-3 py-3 outline-none"
                />

                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* PASSWORD */}
              <div className="mb-2">
                <label className="mb-2 font-semibold">
                  Password
                </label>

                <Field
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="w-full border rounded-xl px-3 py-3 outline-none"
                />

                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* CONFIRM PASSWORD */}
              <div className="mb-2">
                <label className="mb-2 font-semibold">
                  Confirm Password
                </label>

                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  className="w-full border rounded-xl px-3 py-3 outline-none"
                />

                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black rounded text-white py-3 rounded-xl mt-2"
              >
                Create Account
              </button>

            </Form>
          )}
        </Formik>

      </div>

    </div>
  );
};

export default Page;

