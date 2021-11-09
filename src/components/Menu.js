import React from 'react'
import { HiArrowCircleLeft , HiArrowCircleRight } from 'react-icons/hi'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

const Menu = () => {
    const menuIcons = [
        {
            id: uuidv4(),
            title: 'Damage Control',
            message: 'Week 21',
            bubble: '439 ellenőrzés',
            version: '0.0.1',
            pageState: 'dcs',
        },
        {
            id: uuidv4(),
            title: 'Bírság Kezelés',
            message: '',
            bubble: '26 ellenőrzés',
            version: '0.0.1',
            pageState: 'fine',
        },
        {
            id: uuidv4(),
            title: 'Töltés, Tankolás',
            message: 'Week 21',
            bubble: '12 ellenőrzés',
            version: '0.0.1',
            pageState: 'dcs',
        }
    ]

    const [menuPage, setMenuPage] = useState(0);
    
    const incPage = () => {
        if (menuPage < (Math.ceil(menuIcons.length/2)-1)) {
            setMenuPage(menuPage+1)
        }
    }

    const decPage = () => {
        if (menuPage > 0) {
            setMenuPage(menuPage-1)
        }
    }

    console.log(menuPage)

    return (
        <div className="relative flex items-center justify-center h-full flex-col sm:flex-row">
                {menuPage > 0 &&
                    <HiArrowCircleLeft onClick={decPage} className="text-white hover:text-gray-200 absolute left-5 text-4xl sm:invisible"/>
                }
                {menuPage < (Math.ceil(menuIcons.length/2)-1) &&
                    <HiArrowCircleRight onClick={incPage} className="text-white hover:text-gray-200 absolute right-5 text-4xl sm:invisible"/>
                }
            {menuIcons.slice(((window.innerWidth > 480) ? 0 : 0 + menuPage*2), ((window.innerWidth > 480) ? menuIcons.length : 2 + menuPage*2)).map((menu) => (
            <div key={menu.id} className="min-w-min sm:mx-10 my-4 relative flex w-1/2 h-1/3 sm:w-56 sm:h-64 flex-col bg-tertiary hover:bg-quaternary text-white rounded-lg items-center justify-center">
                <p className="px-2 font-semibold text-3xl text-center">{menu.title}</p>    
                <p className="text-xs ">{menu.message}</p>
                {menu.bubble !== null &&
                <div className="bg-red-400 rounded-lg py-1 px-2 mt-6">
                        <p className="font-semibold text-sm">{menu.bubble}</p>
                </div>
                }
                <p className="absolute right-3 bottom-2 text-xs">{menu.version}</p>
            </div>
            ))}
        </div>
    )
}

export default Menu
