import React from 'react'
import { useState } from 'react'

const Settings = () => {

    const [displayLength, setDisplayLength] = useState('')

    const changeDisplayLength = (e) => {
        e.preventDefault()
        if (parseInt(displayLength) >= 4 && parseInt(displayLength) <= 7) {
            localStorage.setItem('displayLength', parseInt(displayLength))
        } else if (parseInt(displayLength) < 4) {
            localStorage.setItem('displayLength', 4)
        } else if (parseInt(displayLength) > 7) {
            localStorage.setItem('displayLength', 7)
        }
        setDisplayLength('')
    }

    return (
        <div className="screen-container">
            <div className="bg-secondary py-8 lg:p-0 px-4 rounded-md lg:rounded-none w-3/4 h-auto flex items-center justify-center flex-col lg:w-full lg:h-full text-cente">
                <p className="text-center text-3xl text-white mb-6 font-semibold flex items-center mx-auto">Beállítások</p>
                <div className=" text-white flex flex-col mb-3 mx-3 text-center items-center justify-center">
                    <p className="text-white text-sm mb-1 font-semibold text-center">Listák elemszáma</p>
                    <form action="" onSubmit={changeDisplayLength}>
                        <input required value={displayLength} onChange={(e) => setDisplayLength(e.target.value)} type="text" className="text-center w-full py-1 px-2 text-white rounded-md bg-tertiary border hover:bg-quaternary"/>
                    </form>
                    <p className="mt-2 text-xs">{'Jelenleg ennek a beállításnak az értéke: ' + localStorage.getItem('displayLength')}</p>
                </div>
            </div>
        </div>
    )
}

export default Settings
