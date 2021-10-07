import { Component } from 'react'
import Horror from '../components/Horror'
//import horrorsObj from '../data'

class HorrorList extends Component {

    state = {
        horrors: []
    }

    makeHorrorCard() {
        return this.state.horrors.map(horror => <Horror id={horror.id} title={horror.title} year={horror.year} descriptor={horror.descriptor} votes={horror.votes}/>)
    }

    componentDidMount(){
        const url ="http://localhost:3000/horrors"
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            console.log(json)
            this.setState({
                horrors: json
            })
        })
    }


    render() {
        //const horrors = horrorsObj.horrors.map(horror => <Horror title={horror.title} year={horror.year} descriptor={horror.descriptor} votes={horror.votes}/>)
        return (
        <div id="horror-list">
            {this.makeHorrorCard()}
        </div>
        )
    }
}

export default HorrorList