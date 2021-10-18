import axios from "axios";

export const getFilms = () => {

    return new Promise( async (resolve, reject) => {
        try {

            let url = "https://swapi.dev/api/films";
            let dados = await axios.get(url);
            resolve(dados.data.results);
    
        } catch (error) {
            reject(null);
        }
    })
}