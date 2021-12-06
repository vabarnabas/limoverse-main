import React from 'react'
import { useState } from 'react'
import { HiLightningBolt, HiServer, HiCode, HiDownload, HiClock, HiChevronLeft, HiChevronRight, HiEye } from 'react-icons/hi'
import { MdLocalGasStation } from 'react-icons/md'
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc, increment } from "firebase/firestore"; 
import { toast } from 'react-hot-toast';
import MOLRefuel from '../json/refuel.json'
import MOLCharge from '../json/charge.json'

const Charge = (props) => {
    
    const [page, setPage] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [showCharges, setShowCharges] = useState(false);
    const [valueJSON, setValueJSON] = useState([]);

    const [tripId, setTripId] = useState('');
    const [price, setPrice] = useState('');
    const [chargeStart, setChargeStart] = useState('');
    const [chargeEnd, setChargeEnd] = useState('');
    const [type, setType] = useState('Plugee');
    const [place, setPlace] = useState('');
    const [autonomyStart, setAutonomyStart] = useState('');
    const [autonomyEnd, setAutonomyEnd] = useState('');

    const [placeList, setPlaceList] = useState([]);
    const [selfSearch, setSelfSearch] = useState(true);

    const places = ((type === 'Plugee') ? MOLCharge : MOLRefuel)

    const lastCharges = [
        {
            type: 'Plugee',
            date: '2021.11.30 00:00',
            place: 'Balassagyarmat, Óváros tér',
        },
        {
            type: 'Kút',
            date: '2021.11.30 00:00',
            place: 'dummy',
        },
        {
            type: 'Kút',
            date: '2021.11.30 00:00',
            place: 'dummy',
        },
        {
            type: 'Plugee',
            date: '2021.11.30 00:00',
            place: 'dummy',
        },
        {
            type: 'Plugee',
            date: '2021.11.30 00:00',
            place: 'Szigetszentmiklós, Petőfi Sándor utca 139.',
        },
        {
            type: 'Plugee',
            date: '2021.11.30 00:00',
            place: 'Tatabánya, Győri út',
        },
        {
            type: 'Plugee',
            date: '2021.11.30 00:00',
            place: 'Budapest, Október huszonharmadika utca 18.',
        },
    ]

    const handleChildClick = (e) => {
        e.stopPropagation();
    }

    const addZero = (i) => {
        if (i < 10) {i = "0" + i}
        return i;
      }

    const atChargeStart = () => {
        const date = new Date(Date.now());
        setChargeStart(date.getFullYear() + '.' + addZero(date.getMonth()) + '.' + addZero(date.getDate()) + ' ' + addZero(date.getHours()) + ':' + addZero(date.getMinutes()))
    }

    const atChargeEnd = () => {
        const date = new Date(Date.now() + 600000);
        setChargeEnd(date.getFullYear() + '.' + addZero(date.getMonth()) + '.' + addZero(date.getDate()) + ' ' + addZero(date.getHours()) + ':' + addZero(date.getMinutes()))
    }

    const changeType = (e) => {
        e.preventDefault();
        setSelfSearch(false);
        ((type === 'Plugee') ? setType('Kút') : setType('Plugee'))
        setPlaceList(filterItems(places, place));
    }

    const filterItems = (array, query) => {
        return array.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    }

    const searchPlace = (arg1) => {
        setPlace(arg1);
        setPlaceList(filterItems(places, place));
        setSelfSearch(true);
    }

    const searchClick = (arg1) => {
        setPlace(arg1);
        setSelfSearch(false);
    }

    const importFromJSON = async () => {
        if (JSON.parse(valueJSON).version === 'legacy') {
            await setDoc(doc(props.firestore, 'charge', uuidv4()),{
                tripId: JSON.parse(valueJSON).tripId,
                chargeStart: JSON.parse(valueJSON).chargeStart,
                chargeEnd: JSON.parse(valueJSON).chargeEnd,
                plate: JSON.parse(valueJSON).plate,
                place: JSON.parse(valueJSON).place,
                type: JSON.parse(valueJSON).type,
                autonomyStart: JSON.parse(valueJSON).autonomyStart,
                autonomyEnd: JSON.parse(valueJSON).autonomyEnd,
                price: JSON.parse(valueJSON).price,
                uID: props.user.email
            });
            await setDoc(doc(props.firestore, 'aggregate', 'charges'), {value: increment(1)}, {merge: true})
            setValueJSON([]);
            setShowModal(false);
            toast.success('Sikeres feltöltés!',{
                style: {
                    borderRadius: '10px',
                    background: '#282828',
                    color: '#fff',
                    padding: '0.5rem 1.25rem'
            },
            })
        }
    }

    const newCharge = async (e) => {
        e.preventDefault();
        await setDoc(doc(props.firestore, 'charge', uuidv4()),{
            tripId: tripId,
            chargeStart: chargeStart,
            chargeEnd: chargeEnd,
            type: type,
            place: place,
            autonomyStart: parseInt(autonomyStart),
            autonomyEnd: parseInt(autonomyEnd),
            price: parseInt(price),
            couponState: 'READY',
            couponDate: '',
            uID: props.user.email,
        })
        await setDoc(doc(props.firestore, 'aggregate', 'charges'), {value: increment(1)}, {merge: true})
        setTripId('');
        setChargeStart('');
        setChargeEnd('');
        setPlace('');
        setAutonomyStart('');
        setAutonomyEnd('');
        setPrice('');
        toast.success('Sikeres feltöltés!',{
            style: {
                borderRadius: '10px',
                background: '#282828',
                color: '#fff',
                padding: '0.5rem 1.25rem'
        },
        })
    }

    return (
        <div onClick={() => setSelfSearch(false)} className="flex items-center justify-center h-full bg-secondary">
            {/* Modal */}
            {showModal ?
            <div onClick={() => setShowModal(false)} className="fixed flex items-center justify-center h-screen w-screen top-0 right-0 bg-primary z-50 bg-opacity-90">
                <div onClick={handleChildClick} className="text-white bg-secondary py-7 px-8 rounded-md w-4/5 flex items-center justify-center flex-col sm:w-1/4">
                    <p className="text-center text-3xl mb-6 font-semibold flex items-center">Tankolás Feltöltése Régi Rendszerből</p>
                    <div className="w-full flex flex-col mb-3 mx-3 sm:w-3/4 items-center justify-center">
                        <p className="text-white text-sm mb-1 font-semibold">JSON<span className="text-red-500 font-semibold">*</span></p>
                        <input value={valueJSON} onChange={(e) => setValueJSON(e.target.value)} type="text" className="flex w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                    </div>
                    <div className="mt-1 flex justify-center w-full">
                    <button onClick={importFromJSON} className="w-3/4 mx-4 py-1 bg-white px-5 rounded-md flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary"><HiDownload className="mr-2"/>Betöltés</button>
                    </div>
                </div>
            </div>:''
            }
            {/* Form */}
            {/* Left Side */}
            <div className={`relative h-full max-h-full hidden lg:pt-1 xl-pt-0 flex-col justify-around items-center w-2/5 ${showCharges ? "lg:flex" : ""}`}>
                {lastCharges.map((charge) => (
                    <div key={uuidv4()} className="left-2 relative flex flex-col items-start justify-center w-full h-full bg-tertiary hover:bg-quaternary my-1 py-1 rounded-md text-white">
                        <p className="pl-3 pt-1 pr-2 text-xs xl:text-sm font-bold">{charge.place}</p>
                        <p className="pb-1 text-xs xl:text-sm pl-3">{charge.date}</p>
                    </div>
                ))}
                <div className="bg-secondary mt-auto py-2 w-full flex items-center justify-center text-white">
                    <HiChevronLeft className="text-2xl xl:text-3xl hover:text-gray-200" />
                    <p className="mx-1 text-sm">1/5</p>
                    <HiChevronRight className="text-2xl xl:text-3xl hover:text-gray-200" />
                </div>
            </div>
            {/* Right Side */}
            <div className="bg-secondary py-8 lg:p-0 px-4 rounded-md lg:rounded-none w-3/4 h-auto flex items-center justify-center flex-col lg:w-full lg:h-full text-center">
                {page > 0 &&
                    <HiChevronLeft onClick={() => setPage(page-1)} className="text-white hover:text-gray-200 absolute left-1 text-4xl sm:hidden"/>
                }
                {page < 1 &&
                    <HiChevronRight onClick={() => setPage(page+1)} className=" text-white hover:text-gray-200 absolute right-1 text-4xl sm:hidden"/>
                }
                <p className="text-center text-3xl text-white mb-6 font-semibold flex items-center mx-auto">Töltés/Tankolás</p>
                <form onSubmit={newCharge} action="" className="flex flex-wrap items-end lg:items-center justify-center w-full max-h-screen">
                        {page === 0 &&
                        <div className="w-full flex flex-col mb-3 mx-3 sm:w-2/5">
                            <p className="text-white text-sm mb-1 font-semibold">Trip ID<span className="text-red-500 font-semibold">*</span></p>
                            <input required value={tripId} onChange={(e) => setTripId(e.target.value)} type="text" className="w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                        </div>
                        }
                        {page === 0 &&
                        <div className="w-full flex flex-col mb-3 mx-3 sm:w-2/5">
                            <p className="text-white text-sm mb-1 font-semibold">Összeg<span className="text-red-500 font-semibold">*</span></p>
                            <input required value={price} onChange={(e) => setPrice(e.target.value)} type="text" className="w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                        </div>
                        }
                        {page === 0 &&
                        <div className="w-full flex flex-col mb-3 mx-3 sm:w-2/5">
                            <p className="text-white text-sm mb-1 font-semibold">Töltés kezdete<span className="text-red-500 font-semibold">*</span></p>
                            <div className="relative flex items-center justify-center">
                            <input required value={chargeStart} onChange={(e) => setChargeStart(e.target.value)} type="text" className="w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                            <HiClock onClick={atChargeStart} className="absolute right-2 hover:text-gray-200 text-white"/>
                            </div>
                        </div>
                        }
                        {page === 0 &&
                        <div className="w-full flex flex-col mb-3 mx-3 sm:w-2/5">
                            <p className="text-white text-sm mb-1 font-semibold">Töltés vége<span className="text-red-500 font-semibold">*</span></p>
                            <div className="relative flex items-center justify-center">
                            <input required value={chargeEnd} onChange={(e) => setChargeEnd(e.target.value)} type="text" className="w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                            <HiClock onClick={atChargeEnd} className="absolute right-2 hover:text-gray-200 text-white"/>
                            </div>
                        </div>
                        }
                        {((props.windowSize === 'small') ? page === 1 : true) &&
                        <div className="w-full flex flex-col mb-3 mx-3 sm:w-2/5">
                            <p className="text-white text-sm mb-1 font-semibold">Típus<span className="text-red-500 font-semibold">*</span></p>
                            <button onClick={changeType} className="bg-white hover:bg-gray-200 rounded-md py-1 px-2 flex items-center justify-center font-semibold text-secondary"><div className="mr-2">{(type === 'Plugee') ? <HiLightningBolt className="" /> : <MdLocalGasStation className="" />}</div>{type}</button>
                        </div>
                        }
                        {((props.windowSize === 'small') ? page === 1 : true) &&
                        <div onClick={(e) => e.stopPropagation()} className="group relative w-full flex flex-col mb-3 mx-3 sm:w-2/5">
                            <p className="text-white text-sm mb-1 font-semibold">Helyszín<span className="text-red-500 font-semibold">*</span></p>
                            <input required onFocus={() => setSelfSearch(true)} onChange={(e) => searchPlace(e.target.value)} value={place} type="text" className="w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                            {(place !== '' && selfSearch) ?
                            <div className="w-full absolute top-14 bg-tertiary mt-1.5 rounded-md max-h-24 overflow-y-scroll scrollbar-hide">
                            {placeList.map((place) => (
                                <div onClick={() => searchClick(place)} key={uuidv4()} className="px-1 flex items-center text-white hover:bg-quaternary">
                                    <p className="py-2 px-2 text-left">{place}</p>
                                </div>
                            ))}
                            </div>: ''
                            }
                        </div> 
                        }
                        {((props.windowSize === 'small') ? page === 1 : true) &&
                        <div className="w-full flex flex-col mb-3 mx-3 sm:w-2/5">
                            <p className="text-white text-sm mb-1 font-semibold">Kezdeti hatótáv<span className="text-red-500 font-semibold">*</span></p>
                            <input required value={autonomyStart} onChange={(e) => setAutonomyStart(e.target.value)} type="text" className="w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                        </div>
                        }
                        {((props.windowSize === 'small') ? page === 1 : true) &&
                        <div className="w-full flex flex-col mb-3 mx-3 sm:w-2/5">
                            <p className="text-white text-sm mb-1 font-semibold">Vég hatótáv<span className="text-red-500 font-semibold">*</span></p>
                            <input required value={autonomyEnd} onChange={(e) => setAutonomyEnd(e.target.value)} type="text" className="w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                        </div>
                        }
                        <div className="flex items-center justify-center mt-2 sm:w-5/6 w-4/6">
                            <button className="w-11/12 lg:w-2/5 py-1 bg-white px-4 rounded-md  flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary "><HiServer className="mr-2"/>Generálás</button>
                            <button onClick={(e) => {e.preventDefault(); setShowModal(true);}} className="ml-2 bg-white hover:bg-gray-200 rounded-md py-2 px-2 flex items-center justify-center"><HiCode className="text-black"/></button>
                        </div>
                    </form>
                    <HiEye onClick={() => setShowCharges(!showCharges)} className="hidden lg:flex text-white mt-3 hover:text-gray-200"/>
            </div>
        </div>
    )
}

export default Charge
