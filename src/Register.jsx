import { useState } from 'react'
import logo from './assets/logo.png'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

const register = () =>{

  //estados 
  const [ user, setUser] = useState({userName:undefined, email:undefined,document:undefined,password:undefined})
  //const [password, setPassword]= useState('')
 
  const [error , setError] = useState({
    error:false,message:'dfgr'
  })
 
  
  const handleUser = (e)=>{
    setUser({...user , [e.target.name]:e.target.value})
    console.log(user)
  }

  
  const validateUser = (event)=>{
    event.preventDefault();
    async function getUsers(){

        try{
      const response = await axios({
        url:"http://localhost:3000/api/user/add",
        method:"POST",
        data:{
          nombre:user.userName,
          email:user.email,
          password:user.password,
          numero_de_documento:user.document
        }
      })
      
    
    }catch(error){
            console.log(error)
        }
      
       }
    getUsers();
   
  }


 
    return(

        <main className="bg-purple-500 w-screen h-screen flex items-center justify-center  ">
        
        <section className="w-[450px] bg-white h-[670px] rounded-[8px] flex flex-col items-center p-[20px] " >
            <img src={logo} className="w-[180px] h-[190]" alt=""/>
            <form className=" w-3/4 h-2/4  flex flex-col pt-[10px]  ">

                <input className="my-[10px] bg-gray-100 p-[8px]" name='userName' type="text" placeholder="nombre" value={user.userName} onChange={handleUser}/>
                <input className=" p-[8px] bg-gray-100" type="text" name='email' placeholder="email" value={user.email} onChange={handleUser}/>
                <input className="p-[8px] bg-gray-100 my-[10px]" type="text"  name='document' placeholder="Numero documento " value={user.documento} onChange={handleUser}/>
                <input className="my-[10px] bg-gray-100 p-[8px]" type="text" name='password' placeholder="Contrasena" value={user.password} onChange={handleUser}/>
               
                <button onClick={validateUser} className=" text-white	 bg-purple-500 p-[8px]">Registrate</button >

           

            </form>

            <div className="flex text-[10px]">

                
               <p className="px-[5px]">olvidaste tu contrasena?</p>
                <p className="px-[5px]">ya tienes un cuenta? <a href="./" className='text-purple-500 font-bold'>Iniciar Sesion</a></p>
               
            </div>

        </section>

    </main>



    )
}


export default register;