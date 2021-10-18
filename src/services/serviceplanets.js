import axios from "axios";

export const getPlanets = () => {

    return new Promise( async (resolve, reject) => {
        try {

            let url = "https://swapi.dev/api/planets";
            let dados = await axios.get(url);
            resolve(dados.data.results);
    
        } catch (error) {
            reject(null);
        }
    })
}