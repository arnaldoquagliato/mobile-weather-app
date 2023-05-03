import axios from "axios";


export const getWeather = async() => {
    const response = await axios.get('https://api.hgbrasil.com/weather')
    // console.log(response)
    return response.data.results
}