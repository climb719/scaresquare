import { Component } from 'react'
import Horror from '../components/Horror'
//import horrorsObj from '../data'
import HorrorForm from '../components/HorrorForm'

class HorrorList extends Component {

    state = {
        horrors: [],
        search: "",
        votes: 0
    }

    addHorror = (horrorData) => {
        //debugger
       this.setState((prevState) => {
         return {
            horrors: [...prevState.horrors, horrorData]
         } 
       })           
   }

    makeHorrorCard() {
        let horrorCards = this.state.horrors
        if(this.state.search){
            horrorCards = this.state.horrors.filter((horror) => horror.title.toLowerCase().includes(this.state.search.toLowerCase()))
        }
        return horrorCards.map(horror => <Horror key={horror.id} id={horror.id} title={horror.title} year={horror.year} descriptor={horror.descriptor.toLowerCase()} votes={horror.votes}/>)
    }


    componentDidMount(){
        const url ="http://localhost:3000/horrors"
        fetch(url)
        .then(resp => resp.json())
        .then(data=> {
           // console.log(data)
            this.setState({
                horrors: data
            })
        })
    }

    handleSearchChange = (e) => {
       // console.log(e.target.value)
        this.setState({search: e.target.value})
    }

    render() {       
        return (
        <div id="horror-list">
            <div id= "search">
                <label><strong>Search For A Horror:</strong></label><br></br>
                <input type="text"  onChange={this.handleSearchChange}/> 
            </div>
            <p id= "warning"><strong >Warning: </strong>You must search for a title to make sure it does not exist on Scaresquare before adding it below. If YOU cause duplicate entries, destruction will follow...</p>
            <HorrorForm addHorror={this.addHorror}/>
            {this.makeHorrorCard()}
        </div>
        )
    }
}
  

export default HorrorList