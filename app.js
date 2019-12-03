let lugar = require('./lugar/lugar.js');
let clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'dirección de la ciudad'
    }
}).argv;

lugar.obtenerDireccionLngLat(argv.direccion)
    .then(result => {
        console.log(result);
        clima.obtenerClima(result.lat, result.lon)
            .then(temp => {
                console.log(`Temp en ${result.ciudad}: ${temp} grados`);

            })
            .catch(console.log);

    })
    .catch(console.log);