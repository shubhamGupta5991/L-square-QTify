
import axios from 'axios'

export const backendApi = 'https://qtify-backend-labs.crio.do';

export const topAlbums = async ()=>{
    try{
        const response =await axios.get( `${backendApi}/albums/top`)
        return response.data;

    }catch(e){
        console.log(e)
    }
}
export const newAlbums = async ()=>{
    try{
        const response =await axios.get( `${backendApi}/albums/new`)
        return response.data;

    }catch(e){
        console.log(e)
    }
}
export const songs = async ()=>{
    try{
        const response =await axios.get( `${backendApi}/songs`)
        return response.data;

    }catch(e){
        console.log(e)
    }
}
export const filters = async ()=>{
    try{
        const response =await axios.get( `${backendApi}/genres`)
        // console.log(response);
        return response.data;

    }catch(e){
        console.log(e)
    }
}
