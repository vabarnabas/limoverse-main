import React from "react";
import { HiFingerPrint, HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { signOut } from "firebase/auth";
import { useState } from 'react';

const Navbar = (props) => {
    const [dropdown,setDropdown] = useState(false);

    const onSignOut = () => {
        signOut(props.auth);
        props.setLogin(false);
        setDropdown(false);
    }

    const handleChildClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className="fixed top-0 right-0 left-0 h-12 bg-tertiary w-screen flex items-center shadow-md ">
            {dropdown ?
            <div onClick={() => setDropdown(false)}className="h-screen w-screen top-0 left-0 fixed flex z-40">
                <div onClick={handleChildClick} className="fixed top-14 right-0 mr-4 w-40 bg-tertiary flex flex-col rounded-md items-center text-white">
                    <p className="mt-2 py-1 hover:bg-quaternary w-full text-center">Profilom</p>
                    <p className="py-1 hover:bg-quaternary w-full text-center">Beállítások</p>
                    <p onClick={onSignOut} className="mb-2 py-1 hover:bg-quaternary w-full text-center cursor-pointer">Kijelentkezés</p>
                </div>
            </div> : ''
            }
            <div className="fixed right-0 top-0 pr-4 pl-1">
                <div className="flex items-center h-12">
                {props.user ?
                    <div className="flex items-center mr-3">
                        <p className="text-xs text-white mr-2">{props.user.email}</p>
                    </div>
                : ''}
                {props.user ?
                    ( dropdown ?
                    <HiChevronDown onClick={() => setDropdown(!dropdown)} className="text-white text-4xl py-1 px-2 bg-quaternary rounded-md"/> :
                    <HiChevronUp onClick={() => setDropdown(!dropdown)} className="text-white text-4xl py-1 px-2 bg-quaternary rounded-md"/>
                    ) : 
                    <button onClick={() => props.setLogin(true)} className="bg-white py-1 px-4 rounded-md flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary"><HiFingerPrint className="mr-2"/>Bejelentkezés</button>
                }
                </div>
            </div>
        </div>
    );
}

export default Navbar;