import React, { Component } from 'react'

export class DataLoader extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            isLoading: false,
            data : [],

        }


    }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoading : true,
                data : json,
            })
        });

    }
    componentDidUpdate(){
        console.log(this.state.data)
        console.log(this.state.data.name)
        //console.log(this.state.data.rounds.matches)
        console.log(this.state.data.rounds.map(i => i.matches.map(i => i.date, i.team1)))
        
        

    }

    render() {

            var {data} = this.state
            return (
                <div>
                    <h1>{data.name}</h1>

                    {/* <ul>
                        {data.rounds.map(i => i.matches.map(i => (
                            <li>{i.date}</li>)))}
                    </ul> */}
                </div>
            )

        }
        
    }


export default DataLoader
