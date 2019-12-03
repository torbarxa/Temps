const axios = require('axios');

const obtenerClima = async(lat, lon) => {



    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3014b25fe9dabee7fddf4aca344dbb8b&units=metric`,
    });

    const resp = await instance.get();
    if (resp.data.main.length === 0) {
        throw new Error('no hay resultados');
    } else {
        return resp.data.main.temp;
    }
}

module.exports = {
    obtenerClima
}