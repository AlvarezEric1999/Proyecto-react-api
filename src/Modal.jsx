import React from 'react'

const Modal = ({messageColor,open,onClose,message}) => {
  
    

    return (

       <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors  ${open ? "visible bg-black/20":"invisible"}`}>
    
   
  
    

    <div className="bg-red-500 flex items-center justify-center rounded-xl shadow p-6 transition-all ">
        <p className='text-white'>{message}</p>
    </div>


    </div>
  )
}

export default Modal