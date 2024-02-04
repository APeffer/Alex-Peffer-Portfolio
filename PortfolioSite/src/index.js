import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Games from './pages/Games';
import RootLayout from './Layouts/RootLayout';
import PokemonApp from './Projects/pokemonApp';
import Contact from './pages/Contact';

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
        {
          path: "projects/pokemonapp",
          element: <PokemonApp/>,
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

