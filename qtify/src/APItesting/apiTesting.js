
import axios from 'axios'

export const BackendApi = 'https://qtify-backend-labs.crio.do';

export const topAlbums = async ()=>{
    try{
        const response =await axios.get( `${BackendApi}/albums/top`);
        return response.data;

    }catch(e){
        console.log(e)
        return null;
    }
}

export const newAlbums = async ()=>{
    try{
        const response =await axios.get( `${BackendApi}/albums/new`);
        console.log(response.data[0].songs);
        return response.data;

    }catch(e){
        console.log(e)
    }
}
export const songs = async ()=>{
    try{
        const response =await axios.get( `${BackendApi}/songs`);
        return response.data;

    }catch(e){
        console.log(e)
    }
}


