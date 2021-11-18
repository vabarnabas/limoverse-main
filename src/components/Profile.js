import React from 'react'
import { useState, useEffect } from 'react'
import { HiPencil, HiX, HiRefresh } from 'react-icons/hi'
import { MdSave } from 'react-icons/md'
import { toast } from 'react-hot-toast'

const Profile = (props) => {
    const [password, setPassword] = useState('');

    const savePassword = (e) => {
        e.preventDefault();
        localStorage.setItem('vulogPassword', password);
    }

    const resetPassword = (e) => {
        e.preventDefault();
    }

    const removePassword = (e) => {
        e.preventDefault();
        localStorage.removeItem('vulogPassword');
    }

    const getToken = () => {
        fetch('https://java-eu01.vulog.com/auth/realms/MOL-HUBUD/protocol/openid-connect/token', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Accept-Encoding': 'gzip, deflate, br',
                'Connection': 'keep-alive',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cache-Control': 'no-cache',    
            },
            body: 'username=' + props.user.email + '&client_secret=69f1286c-6466-4d92-bc2b-1d67c1bda9c5&grant_type=password&client_id=MOL-HUBUD_secure&password=' + localStorage.getItem('vulogPassword')
        }).then(res => {
            if (res.ok) {
                toast.success('Token sikeresen generálva!',{
                    style: {
                        borderRadius: '10px',
                        background: '#282828',
                        color: '#fff',
                        padding: '0.5rem 1.25rem'
                },
            })
            } else {
                toast.error('Hiba lépett fel a generálás során!',{
                    style: {
                        borderRadius: '10px',
                        background: '#282828',
                        color: '#fff',
                        padding: '0.5rem 1.25rem'
                },
            })
            }
            return res.json()
        })
        .then(data => {
            if (props.tokenState === false) {
                props.setToken(data.access_token)
                props.setTokenState(true)
                setTimeout(resetToken, 300000)
            }
        })
    }

    const resetToken = () => {
        props.setTokenState(false)
        toast('Lejárt a tokened!',{
            icon: '🔑',
            style: {
                borderRadius: '10px',
                background: '#282828',
                color: '#fff',
                padding: '0.5rem 1.25rem'
        },
    })
    }

    return (
        <div className="flex items-center justify-center h-screen bg-primary text-center text-white">
            <div className="mt-12 bg-secondary py-7 px-8 rounded-md w-4/5 flex items-center justify-center flex-col sm:w-2/5">
                <p className="text-center text-3xl text-white mb-6 font-semibold flex items-center mx-auto">Profilom</p>
                <form onSubmit={savePassword} className="flex flex-wrap items-center justify-center w-full">
                    {(localStorage.getItem('vulogPassword') === null) ? 
                    <div className="w-full flex items-center flex-col mb-3 mx-3 sm:w-1/2">
                        <p className="text-white text-sm mb-1 font-semibold">Vulog jelszavam<span className="text-red-500 font-semibold">*</span></p>
                        <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                        <button className="mt-3 w-full py-1 bg-white px-4 rounded-md flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary "><MdSave className="mr-2"/>Mentés</button>
                        <p className="text-white text-xs font-light mt-3 text-center">Ezt az adatot, csak a böngésződ belső tárhelye menti el, semmilyen külsős adatbázisba nem fog kerülni.</p>
                    </div>:''
                    }
                </form>
                {(localStorage.getItem('vulogPassword') !== null) ?
                <div className="flex flex-col items-center justify-center mt1-">
                    <div className="w-full flex items-center justify-center text-white">
                        <p className="">Vulog jelszavam: <span className="font-semibold">Mentve</span></p>
                        <button onClick={resetPassword} className="ml-2"><HiPencil /></button>
                        <button onClick={removePassword} className="ml-1"><HiX /></button>
                    </div>
                    <div className="flex">
                        <p className="">Bearer Token: <span className="font-semibold">{(props.token ? (props.tokenState ? 'Mentve' : 'Lejárt') : 'Nincs')}</span></p>
                        <button onClick={getToken} className="ml-2"><HiRefresh /></button>
                    </div>
                    <p className="">User ID: <span className="font-semibold">{(props.user.uid).toLowerCase()}</span></p>
                </div>
                :''
                }
            </div>
        </div>
    )
}

export default Profile
