"use client";
import * as Yup from "yup";
import React from "react";
import { genralFeilds } from "../../../_utils/genralFeilds";

import { useFormik } from "formik";
import { ISignUp, ISignIn } from "../../_interfaces/Auth.types";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

type props = {
  pathname: string;
};

export default function Form({ pathname }: props) {
  const router = useRouter();
  let validationSchema;

  console.log(pathname);

  const isRegister: boolean = pathname !== "/signin";

  const initialValues: ISignUp | ISignIn = isRegister
    ? {
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        fullName: "",
      }
    : {
        email: "",
        password: "",
      };
  if (pathname === "/signin") {
    validationSchema = Yup.object().shape({
      email: genralFeilds.email.required(),
      password: genralFeilds.password.required(),
    });
  } else {
    validationSchema = Yup.object().shape({
      email: genralFeilds.email.required("Email is required"),
      password: genralFeilds.password.required("Password is required"),
      confirmPassword: genralFeilds.confirmPassword.required(
        "confirm password is required"
      ),
      phone: genralFeilds.firstName.required("First name is required"),
      fullName: genralFeilds.lastName.required("Last name is required"),
    });
  }

  const formik = useFormik<ISignUp | ISignIn>({
    initialValues,

    validationSchema: validationSchema,
 
    onSubmit: (values: ISignUp | ISignIn) => {
      console.log(values);

      if (pathname === "/register") {
        const signup = async (values: ISignUp) => {
          values.gender = "male";
          console.log(values);

          try {
            const res = await fetch("http://localhost:3000/auth/signup", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            });
            console.log(res);

            const data = await res.json();
            res.status === 201
              ? toast.success(data.message)
              : toast.error(data.error_message);

            console.log(data);
          } catch (error) {
            console.log(error);

            console.log(error);
          }
        };
        signup(values as ISignUp);
      } else {
        const login = async (values: ISignIn) => {
          console.log(values);

          try {
            const res = await fetch("http://localhost:3000/auth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            });
            const data = await res.json();
            if (res.status === 200) {
              toast.success(data.message);
              localStorage.setItem("token", data?.data.accessToken);
              setTimeout(() => {
                router.push("/AllProducts");
              }, 1000);
            }

            console.log(data);
          } catch (error) {
            console.log(error);
          }
        };
        login(values as ISignIn);
      }
    },
  });

  return (
    <>
      {
        <form className="max-w-md mx-auto" onSubmit={formik.handleSubmit}>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="floating_email"
              onChange={formik.handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=""
              required
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          {pathname !== "/signin" ? (
            <div className="">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="password"
                  name="confirmPassword"
                  id="floating_repeat_password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_repeat_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Confirm password
                </label>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="fullName"
                    id="floating_first_name"
                    onChange={formik.handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Full name
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="phone"
                    id="floating_last_name"
                    onChange={formik.handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="floating_last_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Phone
                  </label>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <button
            type="submit"
            className="text-white bg-mainColor transition-all hover:bg-mainColor/80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Submit
          </button>
        </form>
      }
      <Toaster position="top-center" />
    </>
  );
}
