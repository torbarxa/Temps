const axios = require('axios');

const obtenerDireccionLngLat = async(ciudad) => {

    let encodedUrl = encodeURI(ciudad);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "81360213c5mshaf771e00d70c592p1874d5jsn6f9bb5b97425"
        }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error('no hay resultados');
    } else {
        return {
            ciudad: resp.data.Results[0].name,
            lat: resp.data.Results[0].lat,
            lon: resp.data.Results[0].lon
        }
    }
}

module.exports = {
    obtenerDireccionLngLat
}