const axios = require('axios')
const API_KEYS = require('../config')

const getLugarLatLng = async direccion => {

    const encodeURL = encodeURI(direccion)

    const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeURL }&key=${ API_KEYS.api_google }`)
    
    if (res.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`)
    }

    const location = res.data.results[0].formatted_address
    const coors = res.data.results[0].geometry.location

    return {
        direccion: location,
        lat: coors.lat, 
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}

