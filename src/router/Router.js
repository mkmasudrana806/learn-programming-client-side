import React from "react";
import { createBrowserRouter } from "react-router-dom";
import BlogDetails from "../Blogs/BlogDetails";
import Blogs from "../Blogs/Blogs";
import CourseCart from "../courses/courseCard/CourseCart";
import CourseDescription from "../courses/CourseDescription/CourseDescription";
import CourseDetails from "../courses/courseDetails/CourseDetails";
import Courses from "../courses/Courses";
import Home from "../Home/Home";
import Main from "../layout/Main";
import Login from "../LoginRegister/Login";
import Register from "../LoginRegister/Register";
import ExerciseCart from "../Pages/ExerciseCart";
import FAQ from "../Pages/FAQ";
import DetailsPage from "../SharedPages/DetailsPage";
import TopicsPage from "../SharedPages/TopicsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      //below router are for tutorials and exercise
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/categories"),
      },
      {
        path: "/category/:id",
        element: <TopicsPage></TopicsPage>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/category/${params.id}`);
        },
      },
      {
        path: "/topic-details/:id",
        element: <DetailsPage></DetailsPage>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/topic-details/${params.id}`);
        },
      },
      {
        path: "/exercise-category/:id",
        element: <ExerciseCart></ExerciseCart>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/exercise-category/${params.id}`);
        },
      },
      // routes for courses
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("http://localhost:5000/courses"),
      },
      {
        path: "/course/:id",
        element: <CourseDescription></CourseDescription>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/course/${params.id}`);
        },
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
        loader: () => fetch("http://localhost:5000/blogs"),
      },
      {
        path: "/blog/:id",
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/blog/${params.id}`);
        },
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
    ],
  },
]);
