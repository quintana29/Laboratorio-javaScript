import { countryView } from "./ViewPais.js";
    countryView();

const urlpais =  'https://restcountries.com/v3.1/all';

const pais = () => {
    return fetch(urlpais)
        .then(response => response.json())
        .then(data => data);
}

const listaPaises = () => {
    return new Promise(async(resolve, reject) => {
        const paises = await pais();
        const answer = new Array();

        paises.slice(0, 5).forEach(element => {
            answer.push(element.name.common);
        });
        resolve(answer);
    });
};

    const llamandoFns = async () => {
    const answer = await listaPaises();
    console.log(answer);
};

llamandoFns();
/*countryView();
const countries = () => {
    return fetch(urlCountry)
        .then(response => response.json())
        .then(data => data);
}*/
