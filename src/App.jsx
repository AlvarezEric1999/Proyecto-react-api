import { useState } from 'react'
import logo from './assets/logo.png'
import Modal from './Modal'
import { data } from 'autoprefixer'
import axios from 'axios'
import { Link,Navigate,useNavigate } from 'react-router-dom'
import User from './User'

function App() {
 
  //estados 
  const [ user, setUser] = useState({user:undefined,password:undefined})
  const navigate =  useNavigate()
  //const [password, setPassword]= useState('')
 
 
  const [open,setOpen] = useState(false)
  const [message,setMessage]= useState('')
  const [messageColor ,setMessageColor] = useState(true)

  const handleUser = (e)=>{
    setUser({...user , [e.target.name]:e.target.value})
   console.log(user)
  }

  console.log(open,user)
  
  const validateUser = (event)=>{


    if(user.user===undefined){

      setOpen(true)

      setMessage("por favor llena todos los campos")

    }else{


    event.preventDefault();
    
    async function getUsers(){
      const response = await axios({
        url:"http://localhost:3000/api/user/login",
        method:"POST",
        data:{
          email:user.user,
          password:user.password
        }
      })

      if(response.status === 200){
        navigate('/users')
       }

    }
    
    getUsers();
  }}
  return (
    <div>
    <main className="bg-purple-500 w-screen h-screen flex items-center justify-center  ">

    <section className="w-[350px] bg-white h-[500px] rounded-[8px] flex flex-col items-center justify-center">
    <img src={logo} className="w-[230px] h-[220]" alt=""/>
    
      <form className=" w-3/4 h-2/4  flex flex-col pt-[10px]">

          <input className="my-[10px] bg-gray-100 p-[8px]" type="text" placeholder="usuario"  name="user" value={user.name} onChange={handleUser}/>
          <input className=" p-[8px] bg-gray-100" type="text" placeholder="contrasena" name="password" value={user.password} onChange={handleUser}/>
          <button onClick={validateUser} className="my-[10px] text-white	 bg-purple-500 p-[8px]"><a  >Iniciar Sesion</a></button>

          
      </form>

    <div className="flex text-[10px]">

        <p className="px-[5px]">olvidaste tu contrasena?</p>
        <p className="px-[5px]">no tienes un cuenta?  <a href="./register" className='text-purple-500 font-bold'>registrate</a></p>

    </div>

  </section>

  </main>

  <Modal messageColor={messageColor} open={open} onClose={()=>setOpen(false)} message={message}></Modal>

    </div>
  )
}


export default App
