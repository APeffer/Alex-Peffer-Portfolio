import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Projects from './Projects';
import Games from './Games';
import RootLayout from './Layouts/RootLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
        {
          path: "",
          element: <Home/>,
        },
        {
          path: "aboutme",
          element: <AboutMe/>,
        },
        {
          path: "projects",
          element: <Projects/>,
        },
        {
          path: "games",
          element: <Games/>,
        },
        {
          path: "contact",
          element: <Contact/>,
        },
      ],
    
  }, 
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} fallbackElement={<Home/>} />
  </React.StrictMode>
);

