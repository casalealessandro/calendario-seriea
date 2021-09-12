import React, { Component } from 'react'
import '../../css/giornata/giornata.css';
class Giornata extends Component {
    
    constructor(props) {
        super(props)
        this.state ={

            matchs:[]
        }
    }    

   
    
    getElementi = str =>{

      
        const url = `https://api-football-v1.p.rapidapi.com/v3/fixtures?league=135&season=2021&round=${str}`;
    
        this.setState({ inCaricamento: true})
        fetch(url,{
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
            "x-rapidapi-key": "8f1bba4ae5msh0d4a72cc01b8247p171e5djsn63792cff8700"
          }
        })
        .then(r=>r.json())
        .then(r=>{
            
            console.log(r.response)
            this.setState({ matchs: r.response})
          
        })
        .catch((error)=>{
         
          console.log('Fetch failed', error)
        })
      }

    match = nome =>{

        this.getElementi(nome)
    }  

    render() {

        const outputMatch = this.state.matchs;
        console.log('ci sei ' + outputMatch)
        

        return (
 
            <div onClick={() =>this.match(this.props.nomeGiornata)}>
                {this.props.nomeGiornata}
                <table>
                
                {outputMatch.map((match,inde)=>{
                    return (
                        <tr>
                            <td>{match.teams.home.name}</td>
                            <td>{match.goals.home} - {match.goals.away}</td>
                            <td>{match.teams.away.name}</td>

                        </tr>
                    )
                })}
                </table>
            </div>

           
      
            
        )
    }
}

export default Giornata
