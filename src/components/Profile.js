import React from 'react'
import { useState } from 'react'
import { HiPencil, HiX } from 'react-icons/hi'
import { MdSave } from 'react-icons/md'

const Profile = (props) => {
    const [password, setPassword] = useState('');
    const [vulogPassword, setVulogPassword] = useState('');

    const savePassword = (e) => {
        e.preventDefault();
        setVulogPassword(password);
        localStorage.setItem('vulogPassword',vulogPassword);
    }

    const removePassword = (e) => {
        e.preventDefault();
        localStorage.removeItem('vulogPassword');
        setVulogPassword(null);
    }

    return (
        <div className="flex items-center justify-center h-screen bg-primary text-center">
            <div className="mt-12 bg-secondary py-7 px-8 rounded-md w-4/5 flex items-center justify-center flex-col sm:w-2/5">
                <p className="text-center text-3xl text-white mb-6 font-semibold flex items-center mx-auto">Profilom</p>
                <form onSubmit={savePassword} className="flex flex-wrap items-center justify-center w-full">
                    {(vulogPassword === null) ? 
                    <div className="w-full flex items-center flex-col mb-3 mx-3 sm:w-1/2">
                        <p className="text-white text-sm mb-1 font-semibold">Vulog jelszavad<span className="text-red-500 font-semibold">*</span></p>
                        <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                        <button className="mt-3 w-full py-1 bg-white px-4 rounded-md flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary "><MdSave className="mr-2"/>Mentés</button>
                        <p className="text-white text-xs font-light mt-3 text-center">Ezt az adatot, csak a böngésződ belső tárhelye menti el, semmilyen külsős adatbázisba nem fog kerülni.</p>
                    </div>:
                    <div className="w-full flex items-center justify-center text-white">
                        <p className="">Vulog jelszavam: <span className="font-semibold">Mentve</span></p>
                        <button onClick={() => setVulogPassword(null)} className="ml-2"><HiPencil /></button>
                        <button onClick={removePassword} className="ml-1"><HiX /></button>
                    </div>
                    }
                </form>
            </div>
        </div>
    )
}

export default Profile
