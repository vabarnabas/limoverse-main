import React from 'react'
import { useState } from 'react';
import { fetchToken, fetchUserData } from './Requests';
import { CSVDownload } from 'react-csv';

const Requester = (props) => {

    const [password, setPassword] = useState('');
    const [data, setData] = useState('');
    const [canDownload, setCanDownload] = useState(false);
    let promises = [];

    const getUserData = async () => {
        setCanDownload(false);
        fetchToken(props.user.email);
        const dataArray = data.split(/\r?\n/);
        promises = [];
        for (var i = 0; i < dataArray.length; i++) {
            promises.push(await fetchUserData(dataArray[i]));
        }
        console.log(promises)
        setTimeout(() => {
            setCanDownload(true);
        }, 1200);
    }

    const addPassword = (e) => {
        e.preventDefault();
        localStorage.setItem('vulogPassword',password);
    }

    return (
        <div className='screen-container flex-col'>
            {localStorage.getItem('vulogPassword') === null ?
            <form onSubmit={addPassword} action="" className="flex flex-col justify-center items-center px-6 w-full max-w-sm">
                <div className="w-full flex flex-col mb-4 mx-3">
                    <p className="text-white text-sm mb-1 font-semibold">Jelszó<span className="text-red-500 font-semibold">*</span></p>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="" id="" cols="30" rows="10" className="input-element resize-none"></input>
                </div>
                <button className="w-full mb-4 py-1 bg-white px-4 rounded-md  flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary ">Tovább</button>
            </form>:
            <form action="" className="flex flex-col justify-center items-center px-6 w-full max-w-sm">
                <div className="w-full flex flex-col mb-4 mx-3">
                    <p className="text-white text-sm mb-1 font-semibold">Lista<span className="text-red-500 font-semibold">*</span></p>
                    <textarea value={data} onChange={(e) => setData(e.target.value)} name="" id="" cols="30" rows="10" className="input-element resize-none"></textarea>
                </div>
                <div className="w-full flex items-center justify-center mb-4 mx-3">
                    <button onClick={(e) => {e.preventDefault(); getUserData()}} className="w-full mr-2 py-1 bg-white px-4 rounded-md flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary ">Generálás</button>
                    {canDownload ? ''
                    : ''}
                </div>
            </form>}
        </div>
    )
}

export default Requester
