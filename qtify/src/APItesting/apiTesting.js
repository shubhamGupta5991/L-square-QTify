
import axios from 'axios'

export const BackendApi = 'https://qtify-backend-labs.crio.do';

export const topAlbums = async ()=>{
    try{
        const response =await axios.get( `${BackendApi}/albums/top`)
        return response.data;

    }catch(e){
        console.log(e)
    }
}
// console.log(topAlbums());
export const newAlbums = async ()=>{
    try{
        const response =await axios.get( `${BackendApi}/albums/new`)
        return response.data;

    }catch(e){
        console.log(e)
    }
}
export const songs = async ()=>{
    try{
        const response =await axios.get( `${BackendApi}/songs`)
        return response.data;

    }catch(e){
        console.log(e)
    }
}
export const filters = async ()=>{
    try{
        const response =await axios.get( `${BackendApi}/genres`)
        // console.log(response);
        return response.data;

    }catch(e){
        console.log(e)
    }
}
