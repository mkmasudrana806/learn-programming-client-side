import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../layout/Main";
import DetailsPage from "../SharedContent/DetailsPage";
import TopicsPage from "../SharedContent/TopicsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
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
    ],
  },
]);
