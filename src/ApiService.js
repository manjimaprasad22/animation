import axios from 'axios'
const baseurl = import.meta.env.VITE_API_URL;;

export const getData= async()=>{
    try{
        const reposnse = await axios.get(`${baseurl}/api/Tax/GetAll`,
            { headers: {
               "Content-Type":"application/json",
               "Client-App-Key":"1B9D2824-6675-4085-9609-E88B107B94DA",
               "Client-App-Type":"WebClient",
           }})
        return reposnse.data
    }
    catch(error){
        console.log(error);
        
    }

}