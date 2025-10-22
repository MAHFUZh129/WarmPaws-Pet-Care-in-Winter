import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Homepage from '../pages/Homepage';
import services from '../pages/services';
import ServiceDetailsPage from '../pages/ServiceDetailsPage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayout,
    children:[
        {
          index:true,
          Component:Homepage ,
          loader:()=>fetch('/petcareServices.json')          
        },
        {
          path:'/sevices',
          Component:services,
          loader:()=>fetch('/petcareServices.json')          
        },
        {
          path:'/sevicesDetails/:id',
          Component:ServiceDetailsPage,
          loader:()=>fetch('/petcareServices.json')          
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