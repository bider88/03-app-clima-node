const axios = require('axios')
const API_KEYS = require('../config')

const getClima = async(lat, lng) => {

    const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=${ API_KEYS.api_openweather }`)
    
    if (res.data.code === '400') {
        throw new Error(`Los valores de latitud y longitud no son válidos lat - ${ lat }, lng - ${ lng }`)
    }

    const temp = res.data.main.temp
    const name = res.data.name

    return {
        temp,
        name
    }
}

module.exports = {
    getClima
}