
import axios from 'axios'

export const BackendApi = 'https://qtify-backend-labs.crio.do';

export const topAlbums = async ()=>{
    try{
        const response =await axios.get( `${BackendApi}/albums/top`)
        // console.log(response.data);
        return response.data;

    }catch(e){
        console.log(e)
        return null;
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
        // console.log(response.data);
        return response.data;

    }catch(e){
        console.log(e)
    }
}
export const filters = async ()=>{
    try{
        const response =await axios.get( `${BackendApi}/genre`);
        console.log(response.data[0]);
        return response.data;

    }catch(e){
        console.log(e)
    }
}
