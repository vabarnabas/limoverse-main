import React, { Component } from 'react';
import { HiFingerPrint, HiKey, HiArrowNarrowLeft } from 'react-icons/hi';
import { IoLogoFirebase } from 'react-icons/io5'; 
import { useState, useEffect } from 'react';
import {signInWithEmailAndPassword, sendPasswordResetEmail, getAuth } from "firebase/auth";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const onSingIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(props.auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            console.log(error.code);
            (() =>
                        {switch(error.code) {
                            case 'auth/invalid-email':
                                return setError('Hibás vagy ismeretlen e-mail cím!');
                            case 'auth/internal-error':
                                return setError('Hibás vagy hiányzó adatok!');
                            case 'auth/wrong-password':
                                return setError('Hibás jelszó!');
                            case 'auth/too-many-requests':
                                return setError('Túl sok próbálkozás');
                            case 'auth/user-not-found':
                                return setError('Ismeretlen felhasználó!')
                            default:
                                setError('');
                        }})() 

          });
    }

    const handleChildClick = (e) => {
        e.stopPropagation();
    }
        return (
            <div onClick={props.onClick} className="h-screen w-screen top-0 left-0 fixed bg-primary bg-opacity-90 z-20 flex items-center justify-center flex-col">
                <div onClick={handleChildClick} className="relative bg-secondary py-7 px-8 rounded-md w-4/5 flex flex-col justify-center sm:w-1/4">
                    <p className="text-3xl text-white mb-8 font-semibold flex items-center mx-auto">Bejelentkezés</p>
                    <form action="" className="w-full" onSubmit={onSingIn}>
                    <div className="flex flex-col mb-3">
                        <p className="text-white text-sm mb-1 font-semibold">E-mail<span className="text-red-500 font-semibold">*</span></p>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                        <p className="text-xs mt-1 text-red-500">{error}</p>
                    </div>
                    <div className="flex flex-col mb-5">
                        <p className="text-white text-sm mb-1 font-semibold">Jelszó<span className="text-red-500 font-semibold">*</span></p>
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="py-1 px-2 rounded-md bg-tertiary border hover:bg-quaternary text-white"/>
                    </div>
                    <button className="mt-6 py-1 bg-white px-4 rounded-md w-full flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary"><HiFingerPrint className="mr-2"/>Bejelentkezés</button>
                    </form>
                </div>
                <p className="text-white mt-2 text-sm flex items-center"><IoLogoFirebase className="mr-1"/>Powered by Firebase</p>
            </div>
        )
    }

export default Login
