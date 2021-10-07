import { Component } from 'react'
import Horror from '../components/Horror'
//import horrorsObj from '../data'

class HorrorList extends Component {

    state = {
        horrors: [],
        search: ""
    }

    makeHorrorCard() {
        let horrorCards = this.state.horrors
        return horrorCards.map(horror => <Horror key={horror.id} title={horror.title} year={horror.year} descriptor={horror.descriptor} votes={horror.votes}/>)
    }

    componentDidMount(){
        const url ="http://localhost:3000/horrors"
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
           // console.log(json)
            this.setState({
                horrors: json
            })
        })
    }

    handleSearchChange = (e) => {
       // console.log(e.target.value)
        this.setState({search: e.target.value})
    }



    render() {
        //const horrors = horrorsObj.horrors.map(horror => <Horror title={horror.title} year={horror.year} descriptor={horror.descriptor} votes={horror.votes}/>)
        return (
        <div id="horror-list">
            <div id= "search">
                <label><strong>Search for a horror:</strong></label><br></br>
                <input type="text"  onChange={this.handleSearchChange}/>
            </div>
            {this.makeHorrorCard()}
        </div>
        )
    }
}
  

export default HorrorList