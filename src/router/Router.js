import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Blogs/Blogs";
import CourseCart from "../courses/courseCard/CourseCart";
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
      //below router is for tutorials and exercise
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
      // below code is for courses
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("http://localhost:5000/courses"),
      },
      {
        path: "/course/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/course/${params.id}`);
        },
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
    ],
  },
]);
