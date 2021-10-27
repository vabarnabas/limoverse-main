import React, { Component } from 'react';
import { HiFingerPrint, HiKey, HiArrowNarrowLeft } from 'react-icons/hi';
import { IoLogoFirebase } from 'react-icons/io5'; 
import { useState, useEffect } from 'react';
import {signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSingIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(props.auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }

    const handleChildClick = (e) => {
        e.stopPropagation();
    }
        return (
            <div onClick={props.onClick} className="h-screen w-screen top-0 left-0 fixed bg-black bg-opacity-90 z-20 flex items-center justify-center flex-col">
                <div onClick={handleChildClick} className="relative bg-secondary py-7 px-8 rounded-md w-1/4 flex flex-col justify-center">
                    <p className="text-3xl text-white mb-8 font-semibold flex items-center mx-auto"><HiKey className="mr-2"/>Bejelentkezés</p>
                    <form action="" className="w-full" onSubmit={onSingIn}>
                    <div className="flex flex-col mb-3">
                        <p className="text-white text-sm mb-1 font-semibold">E-mail<span className="text-red-500 font-semibold">*</span></p>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                    </div>
                    <div className="flex flex-col mb-5">
                        <p className="text-white text-sm mb-1 font-semibold">Jelszó<span className="text-red-500 font-semibold">*</span></p>
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="py-1 px-2 rounded-md bg-tertiary border hover:bg-quaternary text-white"/>
                    </div>
                    <button className="py-1 bg-white px-4 rounded-md w-full flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary"><HiFingerPrint className="mr-2"/>Bejelentkezés</button>
                    <p className="text-white text-xs mt-3 underline cursor-pointer">Elfelejtett jelszó</p>
                    </form>
                </div>
                <p className="text-white mt-2 text-sm flex items-center"><IoLogoFirebase className="mr-1"/>Powered by Firebase</p>
            </div>
        )
    }

export default Login
