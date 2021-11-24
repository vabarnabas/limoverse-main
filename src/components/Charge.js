import React from 'react'
import { useState } from 'react'
import { HiLightningBolt, HiServer, HiCode, HiArrowSmLeft, HiArrowSmRight, HiDownload } from 'react-icons/hi'
import { MdLocalGasStation } from 'react-icons/md'
import { v4 as uuidv4 } from 'uuid';
import { doc, setDoc, collection, query, where, getDocs, limit, increment, updateDoc } from "firebase/firestore"; 
import MOLRefuel from '../refuel.json'
import MOLCharge from '../charge.json'

const Charge = (props) => {

    const [page, setPage] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [valueJSON, setValueJSON] = useState([]);

    const [place, setPlace] = useState('');
    const [type, setType] = useState('Plugee');

    const [placeList, setPlaceList] = useState([]);
    const [selfSearch, setSelfSearch] = useState(true);

    const places = ((type === 'Plugee') ? MOLCharge : MOLRefuel)

    const handleChildClick = (e) => {
        e.stopPropagation();
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

    const importJSON = async () => {
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
        }
    }

    return (
        <div onClick={() => setSelfSearch(false)} className="flex items-center justify-center h-screen">
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
                    <button onClick={importJSON} className="w-3/4 mx-4 py-1 bg-white px-5 rounded-md flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary"><HiDownload className="mr-2"/>Betöltés</button>
                    </div>
                </div>
            </div>:''
            }
            <div className="mt-12 bg-secondary py-7 px-8 rounded-md w-4/5 flex items-center justify-center flex-col sm:w-2/5 text-center">
                {page > 0 &&
                    <HiArrowSmLeft onClick={() => setPage(page-1)} className="text-white hover:text-gray-200 absolute left-0 text-4xl sm:hidden"/>
                }
                {page < 1 &&
                    <HiArrowSmRight onClick={() => setPage(page+1)} className="text-white hover:text-gray-200 absolute right-0 text-4xl sm:hidden"/>
                }
                <p className="text-center text-3xl text-white mb-6 font-semibold flex items-center mx-auto">Töltés/Tankolás</p>
                <form action="" className="flex flex-wrap items-center justify-center w-full max-h-screen">
                        {page === 0 &&
                        <div className="w-full flex flex-col mb-3 mx-3 sm:w-2/5">
                            <p className="text-white text-sm mb-1 font-semibold">Trip ID<span className="text-red-500 font-semibold">*</span></p>
                            <input type="text" className="w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                        </div>
                        }
                        {page === 0 &&
                        <div className="w-full flex flex-col mb-3 mx-3 sm:w-2/5">
                            <p className="text-white text-sm mb-1 font-semibold">Összeg<span className="text-red-500 font-semibold">*</span></p>
                            <input type="text" className="w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                        </div>
                        }
                        {page === 0 &&
                        <div className="w-full flex flex-col mb-3 mx-3 sm:w-2/5">
                            <p className="text-white text-sm mb-1 font-semibold">Töltés kezdete<span className="text-red-500 font-semibold">*</span></p>
                            <input type="text" className="w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                        </div>
                        }
                        {page === 0 &&
                        <div className="w-full flex flex-col mb-3 mx-3 sm:w-2/5">
                            <p className="text-white text-sm mb-1 font-semibold">Töltés vége<span className="text-red-500 font-semibold">*</span></p>
                            <input type="text" className="w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                        </div>
                        }
                        {((props.smallWindow) ? page === 1 : true) &&
                        <div className="w-full flex flex-col mb-3 mx-3 sm:w-2/5">
                            <p className="text-white text-sm mb-1 font-semibold">Típus<span className="text-red-500 font-semibold">*</span></p>
                            <button onClick={changeType} className="bg-white hover:bg-gray-200 rounded-md py-1 px-2 flex items-center justify-center font-semibold text-secondary"><div className="mr-2">{(type === 'Plugee') ? <HiLightningBolt className="" /> : <MdLocalGasStation className="" />}</div>{type}</button>
                        </div>
                        }
                        {((props.smallWindow) ? page === 1 : true) &&
                        <div onClick={(e) => e.stopPropagation()} className="group relative w-full flex flex-col mb-3 mx-3 sm:w-2/5">
                            <p className="text-white text-sm mb-1 font-semibold">Helyszín<span className="text-red-500 font-semibold">*</span></p>
                            <input onFocus={() => setSelfSearch(true)} onChange={(e) => searchPlace(e.target.value)} value={place} type="text" className="w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
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
                        {((props.smallWindow) ? page === 1 : true) &&
                        <div className="w-full flex flex-col mb-3 mx-3 sm:w-2/5">
                            <p className="text-white text-sm mb-1 font-semibold">Kezdeti hatótáv<span className="text-red-500 font-semibold">*</span></p>
                            <input type="text" className="w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                        </div>
                        }
                        {((props.smallWindow) ? page === 1 : true) &&
                        <div className="w-full flex flex-col mb-3 mx-3 sm:w-2/5">
                            <p className="text-white text-sm mb-1 font-semibold">Vég hatótáv<span className="text-red-500 font-semibold">*</span></p>
                            <input type="text" className="w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                        </div>
                        }
                        <div className="flex items-center justify-center mt-2 sm:w-5/6 w-4/6">
                            <button className="w-11/12 py-1 bg-white px-4 rounded-md  flex items-center justify-center hover:bg-gray-200 font-semibold text-secondary "><HiServer className="mr-2"/>Generálás</button>
                            <button onClick={(e) => {e.preventDefault(); setShowModal(true);}} className="ml-2 bg-white hover:bg-gray-200 rounded-md py-2 px-2 flex items-center justify-center"><HiCode className="text-black"/></button>
                        </div>
                    </form>
            </div>
        </div>
    )
}

export default Charge
