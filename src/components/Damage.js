import React from 'react'
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { HiChevronLeft, HiChevronRight, HiCheck, HiExclamationCircle } from 'react-icons/hi'
import { doc, getDoc, setDoc, increment } from "firebase/firestore";
import plates from '../json/plates.json'

const Damage = (props) => {

    document.title = 'Limoverse - DCS';

    const [activeWeek, setActiveWeek] = useState(0);
    const [activePlate, setActivePlate] = useState(plates[0].plate);
    const [damagesDid, setDamagesDid] = useState(0);
    const [displayLength, setDisplayLength] = useState(parseInt(localStorage.getItem('displayLength')));
    const [displayPage, setDisplayPage] = useState(0);
    const [isInput, setIsInput] = useState(false);
    const [pageInput, setPageInput] = useState(displayPage+1);

    useEffect(() => {
        (async () => {
            const damageRef = await getDoc(doc(props.firestore, 'aggregate', 'damages'))
            setDamagesDid(damageRef.data().value)
            setActivePlate(plates[damageRef.data().value].plate)
            setDisplayPage(Math.ceil((plates.map((e) => {return e.plate}).indexOf(activePlate)+1)/displayLength)-1)
            console.log('useEffect called')
        })()
        
    }, [props.firestore, displayLength, activePlate])

    const setDamage = async () => {
        await setDoc(doc(props.firestore, 'damage', String(activeWeek) , 'damages', uuidv4()),{
            plate: activePlate,
            uID: props.user.email,
        })
        await setDoc(doc(props.firestore, 'aggregate', 'damages'), {value: increment(1)}, {merge: true})
        setActivePlate(plates[(plates.map((e) => {return e.plate}).indexOf(activePlate)+1)].plate);
        setDisplayPage(Math.ceil((plates.map((e) => {return e.plate}).indexOf(activePlate)+2)/displayLength)-1)
    }

    const decPage = () => {
        if (displayPage > 0) {
            setDisplayPage(displayPage-1)
            setPageInput('')
            setIsInput(false)
        } 
    }

    const incPage = () => {
        if (displayPage < Math.ceil(plates.length/displayLength)-1) {
            setDisplayPage(displayPage+1)
            setPageInput('')
            setIsInput(false)
        }
    }

    const changePage = (e) => {
        e.preventDefault();
        if (pageInput-1 > 0 && pageInput-1 <= Math.ceil(plates.length/displayLength)-1) {
            setDisplayPage(parseInt(pageInput)-1)
        }
        setIsInput(false)
    }

    return (
        <div className="screen-container">
            <div className="flex relative h-full max-h-full lg:pt-1 xl-pt-0 flex-col justify-around items-center md:w-2/5 w-screen mx-4 md:mx-0 mt-2">
                {plates.slice(0+(displayPage*displayLength),displayLength+(displayPage*displayLength)).map((charge) => (
                    <div key={uuidv4()} className={`md:left-2 relative flex flex-col items-start justify-center w-full h-full bg-tertiary hover:bg-quaternary my-1 rounded-md text-white border-solid border-2 ${charge.plate === activePlate ? ' border-greenTop' : 'border-tertiary'}`}>
                        <p className="pl-3 pt-1 pr-2 text-xs xl:text-sm font-bold">{charge.plate}</p>
                        <p className="pb-1 text-xs xl:text-sm pl-3 w-2/3 overflow-hidden">{charge.id}</p>
                        <div className="absolute right-5 text-2xl xl:text-3xl flex items-center justify-center">
                            <HiExclamationCircle className="mr-2 hidden" />
                            {damagesDid-1 >= plates.map((e) => {return e.plate}).indexOf(charge.plate) ?
                                <HiCheck className="text-greenTop" /> : ''
                            }
                        </div>
                    </div>
                ))}
                <div className="bg-secondary mt-auto py-2 w-full flex items-center justify-center text-white">
                    <HiChevronLeft onClick={decPage} className={`text-2xl xl:text-3xl hover:text-gray-200 ${displayPage+1 === 1 ? 'text-quaternary hover:text-quaternary' : ''}`} />
                    <div className="flex items-center justify-center">
                        {isInput ?
                        <form onSubmit={changePage} action="" className="">
                            <input value={pageInput} onChange={(e) => setPageInput(e.target.value)} onBlur={changePage} type="text" className="select-all w-12 text-white text-sm text-center bg-tertiary hover:bg-quaternary rounded-md" />
                        </form> :
                        <p onClick={() => {setIsInput(true);setPageInput('')}} className="mx-1 text-sm">{(displayPage+1) + '/' + Math.ceil(plates.length/displayLength)}</p>
                        }
                    </div>
                    <HiChevronRight onClick={incPage} className={`text-2xl xl:text-3xl hover:text-gray-200 ${displayPage < Math.ceil(plates.length/displayLength)-1 ? '' : 'text-quaternary hover:text-quaternary'}`} />
                </div>
            </div>
            <div className="hidden md:flex bg-secondary py-8 lg:p-0 px-4 rounded-md lg:rounded-none w-3/4 h-auto items-center justify-center flex-col lg:w-full lg:h-full text-center">
                <p className="text-white mb-2">{activePlate}</p>
                <button onClick={setDamage} className="bg-white hover:bg-gray-200 px-4 py-2 rounded-md font-semibold">Leadás</button>
            </div>
        </div>
    )
}

export default Damage
