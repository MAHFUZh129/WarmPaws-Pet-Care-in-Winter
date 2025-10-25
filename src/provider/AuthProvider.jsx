import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { GoogleAuthProvider } from 'firebase/auth';



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
   const googleProvider = new GoogleAuthProvider();
   const googleSignin=()=>{
        return signInWithPopup(auth, googleProvider)
   }
    const login=(email, password)=>{
                  setLoad(true)
        return signInWithEmailAndPassword( auth,email, password)

    }
    const updateUser =(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }
    
    const logout =()=>{
        return signOut(auth)

    }

    const reset =(email)=>{
        return sendPasswordResetEmail(auth, email)

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
      user,setUser,createUser,logout,login,load,updateUser,googleSignin,reset
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
        
};

export default AuthProvider;