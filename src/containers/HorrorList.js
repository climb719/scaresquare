import { Component } from 'react'
import Horror from '../components/Horror'
//import horrorsObj from '../data'
import HorrorForm from '../components/HorrorForm'

class HorrorList extends Component {

    state = {
        horrors: [],
        search: "",
        isSorted: false
    }

    addHorror = (horrorData) => {
        //debugger
       this.setState((prevState) => {
         return {
            horrors: [...prevState.horrors, horrorData].sort((a, b) => a.title.localeCompare(b.title))
         } 
       })           
   }

   onSortClick = (e) => {
       console.log(e.target)
       let horrorCards = this.state.horrors
       let isSorted = !this.state.isSorted
       if (!this.state.isSorted) {
       e.target.innerText = "Back to Alphabetical"
        horrorCards = horrorCards.sort((a, b) => parseFloat(b.votes) - parseFloat(a.votes))
       } else {
        e.target.innerText = "Sort By Most Popular"
           horrorCards.sort((a, b) => a.title.localeCompare(b.title))
       }
        this.setState({
         horrorCards, isSorted
        })
   
   }


    makeHorrorCards() {
        let horrorCards = this.state.horrors
       
        if (this.state.search) {
            horrorCards = this.state.horrors.filter((horror) => horror.title.toLowerCase().includes(this.state.search.toLowerCase()))
        }
        return horrorCards.map(horror => <Horror key={horror.id} id={horror.id} title={horror.title} year={horror.year} descriptor={horror.descriptor.toLowerCase()} votes={horror.votes} format={horror.format} onVoteClick={this.onVoteClick}/>)
    }
    
    componentDidMount() {
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

    onVoteClick = (id) => {
        const horror = this.state.horrors.find((h) => id === h.id)
        //console.log(horror)
        // debugger
        //console.log(id)
        fetch(`http://localhost:3000/horrors/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({votes: parseInt(horror.votes) + 1})
            })
         .then(resp => resp.json())
         .then(data => {
            this.setState((previousState) => {
            const index = previousState.horrors.findIndex((h) => id === h.id)
                return {
                horrors: [...previousState.horrors.slice(0, index), data, ...previousState.horrors.slice(index + 1)]
                }
            })
        })
    }

    render() {       
        return (
        <div id="horror-list">
            <div id= "search">
                <label><strong>Search For A Horror:</strong></label><br></br>
                <input type="text"  onChange={this.handleSearchChange}/> 
            </div>
            <button id="popular" onClick={this.onSortClick}>Sort by Most Popular</button>
            <p id="warning"><strong >Warning: </strong>You must search for a title to make sure it does not exist on Scaresquare before adding it below. If YOU cause duplicate entries, destruction will follow...</p>
            <HorrorForm addHorror={this.addHorror}/>
            {this.makeHorrorCards()}
        </div>
        )
    }
}
  

export default HorrorList