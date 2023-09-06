import React from "react";
import { createBrowserRouter } from "react-router-dom";
import BlogDetails from "../Blogs/BlogDetails";
import Blogs from "../Blogs/Blogs";
import CourseDescription from "../courses/CourseDescription/CourseDescription";
import Courses from "../courses/Courses";
import CourseVideo from "../courses/courseShow/CourseVideo";
import Home from "../Home/Home";
import Main from "../layout/Main";
import Login from "../LoginRegister/Login";
import Register from "../LoginRegister/Register";
import ResetPasswordPage from "../LoginRegister/ResetPasswordPage";
import ExerciseCart from "../Pages/ExerciseCart";
import FAQ from "../Pages/FAQ";
import PremiumExercise from "../Pages/PremiumExercise";
import Profile from "../Pages/Profile";
import TermsAndConditions from "../Pages/TermsAndConditions";
import DetailsPage from "../SharedPages/DetailsPage";
import TopicsPage from "../SharedPages/TopicsPage";
import PrivateRoute from "./PrivateRoute";
import HomeLayout from "../layout/HomeLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      // home route
      // {
      //   path: "/",
      //   element: <Home></Home>,
      //   loader: () =>
      //     fetch(
      //       "https://b610-lerning-platform-server-side-blond-one.vercel.app/categories"
      //     ),
      // },
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
      },
      // routes for tutorials categories and tutorials
      {
        path: "/category/:id",
        element: <TopicsPage></TopicsPage>,
        loader: ({ params }) => {
          return fetch(
            `https://b610-lerning-platform-server-side-blond-one.vercel.app/category/${params.id}`
          );
        },
      },
      {
        path: "/topic-details/:id",
        element: <DetailsPage></DetailsPage>,
        loader: ({ params }) => {
          return fetch(
            `https://b610-lerning-platform-server-side-blond-one.vercel.app/topic-details/${params.id}`
          );
        },
      },
      // routes for exercise (left navbar )
      {
        path: "/exercise-category/:id",
        element: <ExerciseCart></ExerciseCart>,
        loader: ({ params }) => {
          return fetch(
            `https://b610-lerning-platform-server-side-blond-one.vercel.app/exercise-category/${params.id}`
          );
        },
      },
      {
        path: "/premiumExercise/:id",
        element: (
          <PrivateRoute>
            <PremiumExercise></PremiumExercise>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(
            `https://b610-lerning-platform-server-side-blond-one.vercel.app/exercise-category/${params.id}`
          );
        },
      },
      // routes for courses
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () =>
          fetch(
            "https://b610-lerning-platform-server-side-blond-one.vercel.app/courses"
          ),
      },
      {
        path: "/course/:id",
        element: <CourseDescription></CourseDescription>,
        loader: ({ params }) => {
          return fetch(
            `https://b610-lerning-platform-server-side-blond-one.vercel.app/course/${params.id}`
          );
        },
      },
      {
        path: "/courseShow",
        element: (
          <PrivateRoute>
            <CourseVideo></CourseVideo>
          </PrivateRoute>
        ),
      },
      // routes for login and register
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      // routes for blogs section
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () =>
          fetch(
            "https://b610-lerning-platform-server-side-blond-one.vercel.app/blogs"
          ),
      },
      {
        path: "/blog/:id",
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) => {
          return fetch(
            `https://b610-lerning-platform-server-side-blond-one.vercel.app/blog/${params.id}`
          );
        },
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/terms",
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "/resetPassword",
        element: <ResetPasswordPage></ResetPasswordPage>,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="text-center text-danger fs-1 ">
        This page is not defined. 404 not found!
      </div>
    ),
  },
]);
