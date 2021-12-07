import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { HiChevronLeft, HiChevronRight, HiCheck, HiExclamationCircle } from 'react-icons/hi'
import plates from '../json/plates.json'

const Damage = (props) => {

    document.title = 'Limoverse - DCS'
    const [activePlate, setActivePlate] = useState('RIS182');
    const [displayLength, setDisplayLength] = useState(parseInt(localStorage.getItem('displayLength')));
    const [displayPage, setDisplayPage] = useState(Math.ceil((plates.map((e) => {return e.plate}).indexOf(activePlate)+1)/displayLength)-1);
    const [pageInput, setPageInput] = useState(displayPage+1);
    const [isInput, setIsInput] = useState(false);

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
            <div className="md:flex relative h-full max-h-full hidden lg:pt-1 xl-pt-0 flex-col justify-around items-center w-2/5">
                {plates.slice(0+(displayPage*displayLength),displayLength+(displayPage*displayLength)).map((charge) => (
                    <div onClick={() => setActivePlate(charge.plate)} key={uuidv4()} className={`left-2 relative flex flex-col items-start justify-center w-full h-full bg-tertiary hover:bg-quaternary my-1 rounded-md text-white border-solid border-2 ${charge.plate === activePlate ? ' border-greenTop' : 'border-tertiary'}`}>
                        <p className="pl-3 pt-1 pr-2 text-xs xl:text-sm font-bold">{charge.plate}</p>
                        <p className="pb-1 text-xs xl:text-sm pl-3 w-2/3 overflow-hidden">{charge.id}</p>
                        <div className="absolute right-5 text-2xl xl:text-3xl flex items-center justify-center">
                            <HiExclamationCircle className="mr-2 hidden" />
                            <HiCheck className="text-greenTop" />
                        </div>
                    </div>
                ))}
                <div className="bg-secondary mt-auto py-2 w-full flex items-center justify-center text-white">
                    <HiChevronLeft onClick={decPage} className="text-2xl xl:text-3xl hover:text-gray-200" />
                    <div className="flex items-center justify-center">
                        {isInput ?
                        <form onSubmit={changePage} action="" className="">
                            <input value={pageInput} onChange={(e) => setPageInput(e.target.value)} onBlur={changePage} type="text" className="select-all w-12 text-white text-sm text-center bg-tertiary hover:bg-quaternary rounded-md" />
                        </form> :
                        <p onClick={() => {setIsInput(true);setPageInput('')}} className="mx-1 text-sm">{(displayPage+1) + '/' + Math.ceil(plates.length/displayLength)}</p>
                        }
                    </div>
                    <HiChevronRight onClick={incPage} className="text-2xl xl:text-3xl hover:text-gray-200" />
                </div>
            </div>
            <div className="bg-secondary py-8 lg:p-0 px-4 rounded-md lg:rounded-none w-3/4 h-auto flex items-center justify-center flex-col lg:w-full lg:h-full text-center">
            </div>
        </div>
    )
}

export default Damage
