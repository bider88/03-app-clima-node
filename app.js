const { argv } = require('./yargs')
const { getLugarLatLng } = require('./lugar')
const { getClima } = require('./clima')

const direccion = argv.direccion || argv.d

const getInfo = async direccion => {
    try {
        const coors =  await getLugarLatLng(direccion)
        const temp =  await getClima(coors.lat, coors.lng)

        return `El clima en ${temp.name} es de ${temp.temp} °C`
    } catch (err) {
        return `No se puede determinar el clima en '${direccion}'`
    }
}

getInfo(direccion)
    .then(msj => console.log(msj))
    .catch(err => console.log(err))

// promises

// getLugarLatLng( direccion )
//     .then(res => getClima(res.lat, res.lng))
//     .then(res => console.log(res))
//     .catch(err => { 
//         if (err.code === 'ENOTFOUND')
//             console.log(`Dirección '${direccion}' no encontrada o no válida`)
//         else
//             console.log(err)
//     })