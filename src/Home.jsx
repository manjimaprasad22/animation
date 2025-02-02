import React, { useEffect, useState } from 'react'
import { getData } from './ApiService'

const Home = () => {
    const [first, setfirst] = useState([])
    useEffect(() => {
     handleData()
    }, [])
    const handleData=async()=>{
        try{

            const data = await getData()
            
            setfirst(data)
        }
        catch (error){
            console.log(error);
            
        }
    }
  return (
    <div>
      {first.map((e)=>(
        <li>{e.name}</li>
      ))}
    </div>
  )
}

export default Home
