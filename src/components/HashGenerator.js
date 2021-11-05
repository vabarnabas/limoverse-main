import React from 'react'
import { sha256 } from 'js-sha256';
import { useState } from 'react';
import { HiServer } from 'react-icons/hi';
import { doc, setDoc } from "firebase/firestore"; 
import { v4 as uuidv4 } from 'uuid';

const HashGenerator = (props) => {

    const[email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [license, setLicense] = useState('');
    const [birthday, setBirthday] = useState('');

    const generateHash = (e) => {
        e.preventDefault();
        setDoc(doc(props.firestore, 'blacklist', uuidv4()),{
            email: sha256(email),
            phone: sha256(phone),
            license: sha256(license),
            birthday: sha256(birthday)
        })
        setEmail('');
        setPhone('');
        setLicense('');
        setBirthday('');
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-secondary py-7 px-8 rounded-md w-4/5 flex items center justify-center flex-col sm:w-2/5">
                <p className="text-center text-3xl text-white mb-8 font-semibold flex items-center mx-auto">SHA256 Generátor</p>
                <form action="" className="flex flex-wrap items-center justify-center w-full" onSubmit={generateHash}>
                    <div className="w-2/5 flex flex-col mb-3 mx-3">
                        <p className="text-white text-sm mb-1 font-semibold">E-mail cím<span className="text-red-500 font-semibold">*</span></p>
                        <input required value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                    </div>
                    <div className="w-2/5 flex flex-col mb-3 mx-3">
                        <p className="text-white text-sm mb-1 font-semibold">Telefonszám<span className="text-red-500 font-semibold">*</span></p>
                        <input required value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" className="w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                    </div>
                    <div className="w-2/5 flex flex-col mb-3 mx-3">
                        <p className="text-white text-sm mb-1 font-semibold">Jogosítvány szám<span className="text-red-500 font-semibold">*</span></p>
                        <input required value={license} onChange={(e) => setLicense(e.target.value)} type="text" className="w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                    </div>
                    <div className="w-2/5 flex flex-col mb-3 mx-3">
                        <p className="text-white text-sm mb-1 font-semibold">Születési Dátum<span className="text-red-500 font-semibold">*</span></p>
                        <input required value={birthday} onChange={(e) => setBirthday(e.target.value)} type="date" className="w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                    </div>
                    <button className="mt-2 py-1 bg-white px-4 rounded-md w-4/6 flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary sm:w-5/6"><HiServer className="mr-2"/>Generálás</button>
                    <p className="text-white w-5/6 text-center text-xs mt-2">A generálás gombra kattintva, feltöltöd a tiltólistára a titkosított adatokat.</p>
                </form>
            </div>
        </div>
    )
}

export default HashGenerator
