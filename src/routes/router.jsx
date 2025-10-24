import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Homepage from '../pages/Homepage';
import services from '../pages/services';
import ServiceDetailsPage from '../pages/ServiceDetailsPage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PrivateRoute from '../provider/PrivateRoute';
import Loading from '../components/Loading';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayout,
    children:[
        {
          index:true,
          Component:Homepage ,
          loader:()=>fetch('/petcareServices.json'),
          hydrateFallbackElement:<Loading></Loading>          
        },
        {
          path:'/services',
          Component:services,
          loader:()=>fetch('/petcareServices.json'),
          hydrateFallbackElement:<Loading></Loading>                   
        },
        {
          path:'/servicesDetails/:id',
          element:<PrivateRoute>
                      <ServiceDetailsPage></ServiceDetailsPage>
                   </PrivateRoute>,
          loader:()=>fetch('/petcareServices.json'),
          hydrateFallbackElement:<Loading></Loading>          

        },
        {
          path:'/login',
          Component:Login,
        },
        {
          path:'/signup',
          Component:Signup,
        },
    ]
  },
]);