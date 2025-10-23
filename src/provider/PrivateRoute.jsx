import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate,  } from 'react-router';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {
    const {user,load}=use(AuthContext);
    // console.log(user)
    // console.log(location)
    if(load){
       return <Loading></Loading>
    }
    if(user && user.email){
            return children

    }
    return <Navigate  state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;