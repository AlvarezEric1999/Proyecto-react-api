
import axios from "axios";
import { useState,useEffect } from "react";


const User =()=>{


    const [ user , setUser] = useState([]);


    useEffect(() => {
      
        requets()
      },[]);
    


    const requets = async()=> {
        const response = await axios({
          url:"http://localhost:3000/api/user/users",
          method:"GET",
          
        })
  
        setUser(response.data);
      
        console.log(user)
        console.log(response.data)
      }
      
     

      //const nombres = user.map(persona => persona.nombre);


      

    return(

        <main className="bg-purple-500 w-screen h-screen flex items-center justify-center  ">
        <section className="w-[750px] bg-white h-[500px] rounded-[8px] flex flex-col items-center px-[10px] py-[50px]" >
           
           
            <h1 className="font-bold">Bienvenido de Nuevo </h1>

            <div className="w-3/4 p-[10px]  flex items-center justify-center">
                <p>Usuarios Registrados</p>
            </div>


                        <table>
                <thead>
                    <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs   
                    font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                    <th className="px-6 py-3 bg-gray-50 text-left   
                    text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 bg-gray-50 text-left   
                    text-xs font-medium text-gray-500 uppercase tracking-wider">Documento</th>
                    </tr>
                </thead>
                <tbody lassName="bg-white divide-y divide-gray-200">
                    {user.map(user => (
                    <tr >
                        <td className="px-6 py-4 whitespace-nowrap">{user.nombre}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.documento}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
                <p className="px-[5px]"> <a href="./" className='text-purple-500 font-bold'>Inicio</a></p>

            <div className="w-3/4 p-[10px] mt-[50px] text-gray-600">
           
            </div>


          
        </section>
    </main>


       
    )


}

export default User;