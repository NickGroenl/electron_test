
import axios from './index';
export const getAllPokemons = async () => {
    
    try{
        const response: any = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=50");
        console.log(response?.data);
        if(response?.data?.results !== undefined){
            return response?.data?.results;
        } else return null;
    }
    catch(error){
        return null;
    }
}

export const getPokemonById = async (url: string) => {
    try{
        const response: any = await axios.get(url);
        console.log(response?.data);
        if(response?.data !== undefined){
            return response?.data;
        } else return null;
    }
    catch(error){
        return null;
    }
}
