import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Root/Root';
import Home from './Components/Home/Home';
import AllMovies from './Components/All Movies/AllMovies';
import AddMovies from './Components/Add Movies/AddMovies';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch('http://localhost:5000/add-movie')
      },
      {
        path:'all-movies',
        element:<AllMovies></AllMovies>
      },
      {
        path:'add-movie',
        element:<AddMovies></AddMovies>
      },
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
