import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Homepage from '../pages/Homepage';
import ServiceDetailsPage from '../pages/ServiceDetailsPage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PrivateRoute from '../provider/PrivateRoute';
import Loading from '../components/Loading';
import MyProfile from '../pages/MyProfile';
import About from '../pages/About';
import Services from '../pages/services';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayout,
    children:[
        {
          index:true,
          Component:Homepage ,
          loader:()=>fetch('/petcareHome.json'),
          hydrateFallbackElement:<Loading></Loading>          
        },
        {
          path:'/services',
          Component:Services,
          loader:()=>fetch('/petcareServices.json'),
          hydrateFallbackElement:<Loading></Loading>                   
        },
        {
          path:'/servicesDetails/:id',
          Component:ServiceDetailsPage,          
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
        {
          path:'/about',
          Component:About
        },
        {
          path:'/profile',
         Component:MyProfile
          
        },
    ]
  },
]);