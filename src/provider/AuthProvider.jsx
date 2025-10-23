import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { toast } from 'react-toastify';



export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [load,setLoad] = useState(true);
//  console.log(user)
    const createUser =(email,password)=>{
        setLoad(true)
         return createUserWithEmailAndPassword(auth, email, password)

    }

    const login=(email, password)=>{
                  setLoad(true)
        return signInWithEmailAndPassword( auth,email, password)

    }
    
    const logout =()=>{
        return signOut(auth)

    }



    useEffect(()=>{
        const unSubs =onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser)
          setLoad(false)
        });
        return ()=>{
              unSubs()
        }

    },[])
    const authData={
        user,setUser,createUser,logout,login,load
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
        
};

export default AuthProvider;