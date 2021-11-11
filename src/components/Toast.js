import React from 'react'

const Toast = (props) => {
    return (
        <div
        className={`bg-white px-6 py-4 shadow-md rounded-full ${
          props.visible ? 'animate-enter' : 'animate-leave'
        }`}
      >
        Hello TailwindCSS! 👋
      </div>  
    )
}

export default Toast
