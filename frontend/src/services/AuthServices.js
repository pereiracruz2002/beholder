import axios from 'axios';

const API_URL = process.env.REACT_APP_API;

export async function doLogin(email, password){
   
   const loginUrl = `${API_URL}/login`;
   const response = await axios.post(loginUrl, {email, password});
   return response.data;

   
}

export async function doLogout(token){
   
    const loginUrl = `${API_URL}/logout`;
    const headers = {
      'authorization': token
    }
    const response = await axios.post(loginUrl, {}, headers);
    return response.data;
 
    
 }