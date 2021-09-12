import React, { Component } from 'react'
import Axios from "axios";
import Giornata from './Giornata';

class Giornate extends Component {

    constructor(props) {
        super(props)
        this.state = { 
       
            listaGiornate: []
            
          }

          
         
    }    

    componentDidMount (){
        
        const baseUrl = 'https://api-football-v1.p.rapidapi.com/v3/'

        const headers ={

            headers:{"x-rapidapi-host": "api-football-v1.p.rapidapi.com","x-rapidapi-key": "8f1bba4ae5msh0d4a72cc01b8247p171e5djsn63792cff8700" }
        }
        const baseurl = 'api/heroes'
        const request = Axios.get(baseUrl+'fixtures/rounds?league=135&season=2021' , headers)
         request.then(res => 
            this.setState({listaGiornate:res.data.response})
            
            
        )
        
        
        
    }
    
    render() {
       const g = this.state.listaGiornate;
       console.log(g)
        return (
            <div>

                {g.map((el,key) => <Giornata key={key} nomeGiornata={el}/>)}
            </div>
            
        
        )
    }
}

export default Giornate