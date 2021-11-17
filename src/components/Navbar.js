import React from "react";
import { HiFingerPrint, HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { signOut } from "firebase/auth";
import { useState } from 'react';

import limoverseLogo from '../resources/limoverse_logo.svg'

const Navbar = (props) => {
    const [dropdown,setDropdown] = useState(false);

    const onSignOut = () => {
        signOut(props.auth);
        props.setPageState('News');
        props.setLogin(false);
        setDropdown(false);
    }

    const handleChildClick = (e) => {
        e.stopPropagation();
        setDropdown(false);
    }
    return (
        <div className="fixed top-0 right-0 left-0 h-12 bg-tertiary w-screen flex items-center shadow-md z-20">
            <img onClick={() => props.setPageState('Menu')} src={limoverseLogo} alt="" className="fixed h-32 pl-4" />
            {dropdown ?
            <div onClick={() => setDropdown(false)}className="h-screen w-screen top-0 left-0 fixed flex z-40">
                <div onClick={handleChildClick} className="fixed top-14 right-0 mr-4 bg-tertiary flex flex-col rounded-md items-center text-white shadow-md">
                    <p onClick={() => props.setPageState('Profile')} className="mt-2 px-16 py-1 hover:bg-quaternary w-full text-center">Profilom</p>
                    <p onClick={() => props.setPageState('News')} className=" px-16 py-1 hover:bg-quaternary w-full text-center">Hírek</p>
                    <p className="py-1 hover:bg-quaternary w-full text-center">Beállítások</p>
                    <p onClick={onSignOut} className="mb-2 py-1 hover:bg-quaternary w-full text-center cursor-pointer">Kijelentkezés</p>
                </div>
            </div> : ''
            }
            <div className="fixed right-0 top-0 pr-4 pl-1">
                <div className="flex items-center h-12">
                {props.user ?
                    <div className="flex items-center mr-3">
                        <p className="text-xs text-white mr-2 sm:visible invisible">{props.user.email}</p>
                    </div>
                : ''}
                {props.user ?
                    ( dropdown ?
                    <HiChevronDown onClick={() => setDropdown(!dropdown)} className="text-primary text-3xl py-1 px-2 bg-white hover:bg-gray-200 rounded-md"/> :
                    <HiChevronUp onClick={() => setDropdown(!dropdown)} className="text-primary text-3xl py-1 px-2 bg-white hover:bg-gray-200 rounded-md"/>
                    ) : 
                    <button onClick={() => props.setLogin(true)} className="bg-white py-1 px-4 rounded-md flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary"><HiFingerPrint className="mr-2"/>Bejelentkezés</button>
                }
                </div>
            </div>
        </div>
    );
}

export default Navbar;