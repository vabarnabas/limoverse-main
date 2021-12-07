import React from 'react'
import { HiArrowCircleLeft , HiArrowCircleRight, HiKey } from 'react-icons/hi'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const Menu = (props) => {
    document.title = 'Limoverse - Main'

    const menuIcons = [
        {
            id: uuidv4(),
            title: 'Damage Control',
            vulogRequired: false,
            message: '439 hátralévő',
            version: '0.0.1',
            pageState: 'Damage',
        },
        {
            id: uuidv4(),
            title: 'Bírság Kezelés',
            vulogRequired: false,
            message: '',
            version: '0.0.1',
            pageState: 'Fine',
        },
        {
            id: uuidv4(),
            title: 'Töltés, Tankolás',
            vulogRequired: false,
            message: '24 ellenőrizendő',
            version: '0.0.1',
            pageState: 'Charge',
        },
        {
            id: uuidv4(),
            title: 'SHA256 Tiltólista',
            vulogRequired: false,
            message: '',
            version: '0.0.1',
            pageState: 'Hash',
        },
    ]

    const [menuPage, setMenuPage] = useState(0);
    
    const incPage = () => {
        if (menuPage < (Math.ceil(menuIcons.length/((props.windowSize === 'small') ? 2 : ((props.windowSize === 'medium') ? 3 : 4)))-1)) {
            setMenuPage(menuPage+1)
        }
    }

    const decPage = () => {
        if (menuPage > 0) {
            setMenuPage(menuPage-1)
        }
    }

    return (
        <div className="relative flex items-center justify-center h-full flex-col sm:flex-row">
                {menuPage > 0 &&
                    <HiArrowCircleLeft onClick={decPage} className="text-white hover:text-gray-200 absolute left-5 text-4xl"/>
                }
                {menuPage < (Math.ceil(menuIcons.length/((props.windowSize === 'small') ? 2 : ((props.windowSize === 'medium') ? 3 : 4)))-1) &&
                    <HiArrowCircleRight onClick={incPage} className="text-white hover:text-gray-200 absolute right-5 text-4xl"/>
                }
            {menuIcons.slice(((props.windowSize === 'small') ? 0 + menuPage*2 : ((props.windowSize === 'medium') ? 0 + menuPage*3 : 0 + menuPage*4)), ((props.windowSize === 'small') ? 2 + menuPage*2 : ((props.windowSize === 'medium') ? 3 + menuPage*3 : 4 + menuPage*4))).map((menu) => (
            <div onClick={() => props.setPageState(menu.pageState)} key={menu.id} className="min-w-min sm:mx-10 md:mx-4 xl:mx-7 my-4 relative flex w-1/2 h-1/3 md:w-48 md:h-64 lg:w-52 xl:w-56 flex-col bg-tertiary hover:bg-quaternary text-white rounded-xl items-center justify-center flex-wrap">
                <p className="px-4 font-semibold text-3xl text-center">{menu.title}</p>    
                <p className="absolute  bottom-2 right-3 text-xs">{menu.version}</p>
                {menu.vulogRequired ?
                    <HiKey className="absolute bottom-2 left-3"/>:''
                }
                {(menu.message !== '') ?
                <div className="absolute bg-red-400 left-3 top-3 rounded-md">
                    <p className="text-white py-1 px-2 text-xs font-semibold">{menu.message}</p>
                </div>
                :''}
            </div>
            ))}
        </div>
    )
}

export default Menu
