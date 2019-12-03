let lugar = require('./lugar/lugar.js');
let clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'dirección de la ciudad'
    }
}).argv;


const getInfo = async(direccion) => {
    try {
        const result = await lugar.obtenerDireccionLngLat(direccion);
        //        console.log('lon' + result.lon + result.lat);
        const temp = await clima.obtenerClima(result.lat, result.lon);
        //        console.log('clima:' + temp);
        return (`Temp en ${result.ciudad}: ${temp} grados`);
    } catch {
        err => {
            throw new Error('Error al obtener los datos' + err);
        }


    }

}

getInfo(argv.direccion)
    .then(result => {
        console.log(result)

    })
    .catch(console.log);


// lugar.obtenerDireccionLngLat(argv.direccion)
//     .then(result => {
//         console.log(result);
//         clima.obtenerClima(result.lat, result.lon)
//             .then(temp => {
//                 console.log(`Temp en ${result.ciudad}: ${temp} grados`);

//             })
//             .catch(console.log);

//     })
//     .catch(console.log);