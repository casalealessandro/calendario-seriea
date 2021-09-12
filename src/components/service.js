import axios from 'axios'
const baseUrl = 'https://api-football-v1.p.rapidapi.com/v3/'

const headers ={

    headers:{"x-rapidapi-host": "api-football-v1.p.rapidapi.com","x-rapidapi-key": "8f1bba4ae5msh0d4a72cc01b8247p171e5djsn63792cff8700" }
}


/*
     const request = axios.put(` ${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
*/


/*LETTURA*/

const getGiornate = () => {

    const request = axios.get(baseUrl+'fixtures/rounds?league=135&season=2021' , headers)
    return request.then(res => res.data.response)

}

export default {
    getGiornate
    
}