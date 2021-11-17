import React from 'react'
import { sha256 } from 'js-sha256';
import { useState } from 'react';
import { HiServer, HiSearch, HiQuestionMarkCircle, HiCheckCircle, HiXCircle } from 'react-icons/hi';
import { doc, setDoc, collection, query, where, getDocs, limit } from "firebase/firestore"; 
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-hot-toast'

const HashGenerator = (props) => {

    const[email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [license, setLicense] = useState('');
    const [birthday, setBirthday] = useState('');

    const [emailBlackList, setEmailBlackList] = useState([]);
    const [phoneBlackList, setPhoneBlackList] = useState([]);
    const [licenseBlackList, setLicenseBlackList] = useState([]);

    const [searchModal, setSearchModal] = useState(false);
    const [approveModal, setApproveModal] = useState(false);

    const q1 = query(collection(props.firestore, 'blacklist'), where('email', '==', sha256(email.toLocaleLowerCase().replace(' ', ''))), limit(5));
    const q2 = query(collection(props.firestore, 'blacklist'), where('phone', '==', sha256(phone.replace(' ', '').slice(-9))), limit(5));
    const q3 = query(collection(props.firestore, 'blacklist'), where('license', '==', sha256(license.toLocaleLowerCase().replace(' ', ''))), limit(5));

    const [lastQuery, setLastQuery] = useState({
        email: '',
        phone: '',
        license: '',
    })


    const generateHash = (e) => {
        e.preventDefault();
        setDoc(doc(props.firestore, 'blacklist', uuidv4()),{
            email: sha256(email.toLocaleLowerCase().replace(' ', '')),
            phone: sha256(phone.replace(' ', '').slice(-9)),
            license: sha256(license.toLocaleLowerCase().replace(' ', '')),
            birthday: sha256(birthday),
            uID: props.user.email
        })
        setEmail('');
        setPhone('');
        setLicense('');
        setBirthday('');
        setApproveModal(false);
        toast.success('Sikeres feltöltés!',{
                style: {
                    borderRadius: '10px',
                    background: '#282828',
                    color: '#fff',
                    padding: '0.5rem 1.25rem'
            },
        })
    }

    const querySearchModal = async (e) => {
        if (email !== '' && phone !== '' && license !== '') {
            e.preventDefault()
            if (email !== lastQuery.email) {
            const querySnapshot1 = await getDocs(q1);
            setEmailBlackList(querySnapshot1.docs.map((doc) => doc.data()))
            }
            if (phone !== lastQuery.phone) {
            const querySnapshot2 = await getDocs(q2);
            setPhoneBlackList(querySnapshot2.docs.map((doc) => doc.data()))
            }
            if (license !== lastQuery.license) {
            const querySnapshot3 = await getDocs(q3);
            setLicenseBlackList(querySnapshot3.docs.map((doc) => doc.data()))
            }
            await showSearchModal()
        }
    }

    const showSearchModal = async () => {
        setLastQuery({
            email: email,
            phone: phone,
            license: license,
        })
        setSearchModal(true)
        setEmail('');
        setPhone('');
        setLicense('');
        setBirthday('');
    }

    const showApproveModal = (e) => {
        e.preventDefault();
        setApproveModal(true);
    }

    const handleChildClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className="flex items-center justify-center h-screen">
            {/* Search Modal */}
            {searchModal ?
            <div onClick={() => setSearchModal(false)} className="fixed flex items-center justify-center h-screen w-screen top-0 right-0 bg-primary z-50 bg-opacity-90">
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
            {/* Approve Modal */}
            {approveModal ?
            <div onClick={() => setApproveModal(false)} className="fixed flex items-center justify-center h-screen w-screen top-0 right-0 bg-primary z-50 bg-opacity-90">
                <div onClick={handleChildClick} className="text-white bg-secondary py-7 px-8 rounded-md w-4/5 flex items-center justify-center flex-col sm:w-1/4">
                    <p className="text-center text-3xl mb-3 font-semibold flex items-center">Tiltólista Hozzáadás</p>
                    <p className="text-center text-xs flex items-center justify-center flex-col"><HiQuestionMarkCircle className="text-5xl mb-3"/>Biztosan jó formátumú adatokat adtál meg és azzal a céllal, hogy ezeket a tiltólistához add?</p>
                    <div className="mt-6 flex justify-center">
                        <button onClick={generateHash} className="mx-4 py-1 bg-white px-5 rounded-md flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary "><HiCheckCircle className="mr-2"/>Igen</button>
                        <button onClick={() => setApproveModal(false)} className="mx-4 py-1 bg-white px-5 rounded-md flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary "><HiXCircle className="mr-2"/>Nem</button>
                    </div>
                </div>
            </div>:''
            }
            {/* Main Form */}
            <div className="mt-12 bg-secondary py-7 px-8 rounded-md w-4/5 flex items-center justify-center flex-col sm:w-2/5">
                <p className="text-center text-3xl text-white mb-6 font-semibold flex items-center mx-auto">SHA256 Tiltólista</p>
                <form action="" className="flex flex-wrap items-center justify-center w-full" onSubmit={showApproveModal}>
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
                    <button onClick={querySearchModal} className="ml-2 bg-white hover:bg-gray-200 rounded-md py-2 px-2 flex items-center justify-center"><HiSearch className="text-black"/></button>
                    </div>
                    <p className="text-white w-5/6 text-center text-xs mt-2">A generálás gombra kattintva, tiltólistára kerülnek az általad beírt adatok, így kérlek figyelmesen nézd át a formátumokat !</p>
                </form>
            </div>
        </div>
    )
}

export default HashGenerator
