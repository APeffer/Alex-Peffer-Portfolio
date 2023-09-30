import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Games from './Games';
import RootLayout from './Layouts/RootLayout';
import PokemonApp from './Projects/pokemonApp';

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
          path: "pokemonapp",
          element: <PokemonApp/>,
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

