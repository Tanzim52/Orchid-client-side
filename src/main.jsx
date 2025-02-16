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
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Components/Provider/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Details from './Components/Details/Details';
import Favorites from './Components/Favorites/Favorites';


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
        element:<PrivateRoute><AddMovies></AddMovies></PrivateRoute>
      },
      {
        path:'favorites',
        element:<PrivateRoute><Favorites></Favorites></PrivateRoute>
      },
      {
        path:"/movies/:id",
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/add-movie')
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      },
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
