
"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Page = () => {
  return (
    <div className=" flex h-full items-center justify-center bg-[#66b3ff29] px-3 py-5">
      
      <div className="w-full max-w-md bg-white rounded-4 p-5 shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-4">
          Login
        </h1>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form>

              {/* EMAIL */}
              <div className="mb-3">
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
              <div className="mb-3">
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

              <button
                type="submit"
                className="w-full bg-black rounded text-white py-3 rounded-xl mt-2"
              >
                Login
              </button>

            </Form>
          )}
        </Formik>

      </div>

    </div>
  );
};

export default Page;

