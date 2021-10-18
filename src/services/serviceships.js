import axios from "axios";

export const getShips = () => {

    return new Promise( async (resolve, reject) => {
        try {

            let url = "https://swapi.dev/api/starships";
            let dados = await axios.get(url);
            resolve(dados.data.results);
    
        } catch (error) {
            reject(null);
        }
    })
}