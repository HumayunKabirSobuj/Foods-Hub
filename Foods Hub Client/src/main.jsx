import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Route from './Route/Route';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Login from './Pages/Login';
import AuthProvider from './Provider/AuthProvider';
import Register from './Pages/Register';
import  { Toaster } from 'react-hot-toast';
import AddFood from './Pages/AddFood';
import PrivateRoute from './Route/PrivateRoute';
import AvailableFoods from './Pages/AvailableFoods';
import ManageMyFood from './Pages/ManageMyFood';
import UpdatedFood from './Pages/UpdatedFood';
import ViewDetailsPage from './Pages/ViewDetailsPage';
import MyFoodRequest from './Pages/MyFoodRequest';
import Aos from 'aos';
import FeaturedFoodCardDetails from './Components/FeaturedFoodCardDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:()=>fetch(`${import.meta.env.VITE_API_URL}/featuredfoods`)
      },
      {
        path:'/featuredfoods/:id',
        element:<PrivateRoute><FeaturedFoodCardDetails></FeaturedFoodCardDetails></PrivateRoute>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/featuredfoods/${params.id}`)

      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/add-food',
        element:<PrivateRoute><AddFood></AddFood></PrivateRoute>
      },
      {
        path:'/available-food',
        element:<AvailableFoods></AvailableFoods>,
        loader:()=>fetch(`${import.meta.env.VITE_API_URL}/foods`)
      },
      {
        path:'/manage-my-food',
        element:<PrivateRoute><ManageMyFood></ManageMyFood></PrivateRoute>,
        loader:()=>fetch(`${import.meta.env.VITE_API_URL}/foods`)
      },
      {
        path:'/updateFood/:id',
        element:<PrivateRoute><UpdatedFood></UpdatedFood></PrivateRoute>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/foods/${params.id}`)

      },
      {
        path:'/foods/:id',
        element:<PrivateRoute><ViewDetailsPage></ViewDetailsPage></PrivateRoute>,
        loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/foods/${params.id}`)
      },
      {
        path:'/my-food-request',
        element:<PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>,
        loader:()=>fetch(`${import.meta.env.VITE_API_URL}/foods`)
      },

    ]
  },

]);



Aos.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster/>
    </AuthProvider>
  </React.StrictMode>,
)
