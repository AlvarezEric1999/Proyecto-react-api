import React from 'react'

const Modal = ({messageColor,open,onClose,message}) => {
  
    

    return (

       <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors  ${open ? "visible bg-black/20":"invisible"}`}>
    
   
  
    

    <div className={`${messageColor ? "bg-red-500": "bg-green-400" } w-[400px]  h-[200px] flex items-center justify-center rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
        <p className='text-white'>{message}</p>
    </div>


    </div>
  )
}

export default Modal