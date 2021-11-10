import React from 'react'
import { sha256 } from 'js-sha256';
import { useState } from 'react';
import { HiServer, HiSearch } from 'react-icons/hi';
import { doc, setDoc, collection, query, where, getDocs, limit } from "firebase/firestore"; 
import { v4 as uuidv4 } from 'uuid';

const HashGenerator = (props) => {

    const[email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [license, setLicense] = useState('');
    const [birthday, setBirthday] = useState('');
    const [emailBlackList, setEmailBlackList] = useState([]);
    const [phoneBlackList, setPhoneBlackList] = useState([]);
    const [licenseBlackList, setLicenseBlackList] = useState([]);
    const [modal, setModal] = useState(false);
    const [lastQuery, setLastQuery] = useState({
        email: '',
        phone: '',
        license: '',
    })


    const generateHash = (e) => {
        e.preventDefault();
        setDoc(doc(props.firestore, 'blacklist', uuidv4()),{
            email: sha256(email),
            phone: sha256(phone),
            license: sha256(license),
            birthday: sha256(birthday),
            uID: props.user.uid
        })
        setEmail('');
        setPhone('');
        setLicense('');
        setBirthday('');
    }

    const showModal = async (e) => {
        if (email !== '' && phone !== '' && license !== '') {
            e.preventDefault()
            if (email !== lastQuery.email) {
            const q1 = query(collection(props.firestore, 'blacklist'), where('email', '==', sha256(email)), limit(5));
            const querySnapshot1 = await getDocs(q1);
            setEmailBlackList(querySnapshot1.docs.map((doc) => doc.data()))
            }
            if (phone !== lastQuery.phone) {
            const q2 = query(collection(props.firestore, 'blacklist'), where('phone', '==', sha256(phone)), limit(5));
            const querySnapshot2 = await getDocs(q2);
            setPhoneBlackList(querySnapshot2.docs.map((doc) => doc.data()))
            }
            if (license !== lastQuery.license) {
            const q3 = query(collection(props.firestore, 'blacklist'), where('license', '==', sha256(license)), limit(5));
            const querySnapshot3 = await getDocs(q3);
            setLicenseBlackList(querySnapshot3.docs.map((doc) => doc.data()))
            }
            if (emailBlackList.length > 0 || phoneBlackList.length > 0 || licenseBlackList.length > 0) {
            setModal(true)
            }
            setLastQuery({
                email: email,
                phone: phone,
                license: license,
            })
            setEmail('');
            setPhone('');
            setLicense('');
            setBirthday('');
        }
    }

    const handleChildClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className="flex items-center justify-center h-screen">
            {modal ?
            <div onClick={() => setModal(false)} className="fixed flex items-center justify-center h-screen w-screen top-0 right-0 bg-primary z-50 bg-opacity-90">
                <div onClick={handleChildClick} className="text-white bg-secondary py-7 px-8 rounded-md w-4/5 flex items-center justify-center flex-col sm:w-1/4">
                    <p className="text-3xl mb-6 font-semibold flex items-center">Tiltólista Keresés</p>
                    {(emailBlackList.length > 0) ?
                    <div className="flex items-center justify-center flex-col">
                        <p className="text-lg font-semibold">E-mail egyezések:</p>
                        <p className="text-sm bg-red-400 py-0.5 px-6 mt-0.5 rounded-md">{(emailBlackList.length<5) ? emailBlackList.length : '5+'}</p>
                    </div>
                    :''}
                    {(phoneBlackList.length > 0) ?
                    <div className="flex items-center justify-center flex-col mt-2">
                        <p className="text-lg font-semibold">Telefon egyezések:</p>
                        <p className="text-sm bg-red-400 py-0.5 px-6 mt-0.5 rounded-md">{(phoneBlackList.length<5) ? phoneBlackList.length : '5+'}</p>
                    </div>
                    :''}
                    {(licenseBlackList.length > 0) ?
                    <div className="flex items-center justify-center flex-col mt-2">
                        <p className="text-lg font-semibold">Jogosítvány egyezések:</p>
                        <p className="text-sm bg-red-400 py-0.5 px-6 mt-0.5 rounded-md">{(licenseBlackList.length<5) ? licenseBlackList.length : '5+'}</p>
                    </div>
                    :''}
                </div>
            </div>:''
            }
            <div className="mt-12 bg-secondary py-7 px-8 rounded-md w-4/5 flex items-center justify-center flex-col sm:w-2/5">
                <p className="text-center text-3xl text-white mb-6 font-semibold flex items-center mx-auto">SHA256 Tiltólista</p>
                <form action="" className="flex flex-wrap items-center justify-center w-full" onSubmit={generateHash}>
                    <div className="w-full flex flex-col mb-3 mx-3 sm:w-2/5">
                        <p className="text-white text-sm mb-1 font-semibold">E-mail cím<span className="text-red-500 font-semibold">*</span></p>
                        <input required value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                    </div>
                    <div className="w-full flex flex-col mb-3 mx-3 sm:w-2/5">
                        <p className="text-white text-sm mb-1 font-semibold">Telefonszám<span className="text-red-500 font-semibold">*</span></p>
                        <input required value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" className="w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                    </div>
                    <div className="w-full flex flex-col mb-3 mx-3 sm:w-2/5">
                        <p className="text-white text-sm mb-1 font-semibold">Jogosítvány szám<span className="text-red-500 font-semibold">*</span></p>
                        <input required value={license} onChange={(e) => setLicense(e.target.value)} type="text" className="w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                    </div>
                    <div className="w-full flex flex-col mb-3 mx-3 sm:w-2/5">
                        <p className="text-white text-sm mb-1 font-semibold">Születési Dátum<span className="text-red-500 font-semibold">*</span></p>
                        <input required value={birthday} onChange={(e) => setBirthday(e.target.value)} type="date" className="w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                    </div>
                    <div className="flex items-center justify-center mt-2 sm:w-5/6 w-4/6">
                    <button className="w-11/12 py-1 bg-white px-4 rounded-md  flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary "><HiServer className="mr-2"/>Generálás</button>
                    <button onClick={showModal} className="ml-2 bg-white hover:bg-gray-200 rounded-md py-2 px-2 flex items-center justify-center"><HiSearch className="text-black"/></button>
                    </div>
                    <p className="text-white w-5/6 text-center text-xs mt-2">A generálás gombra kattintva, tiltólistára kerülnek az általad beírt adatok, így kérlek figyelmesen nézd át a formátumokat !</p>
                </form>
            </div>
        </div>
    )
}

export default HashGenerator
