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
        return horrorCards.map(horror => <Horror key={horror.id} id={horror.id} title={horror.title} year={horror.year} descriptor={horror.descriptor} votes={horror.votes}/>)
    }

    //onVoteClick={this.onVoteClick} 
    // onVoteClick = (id) => {
    //     console.log(id)
    //     console.log(this.state.votes)

    //     this.setState((previousState) => {
    //             return {
                  
    //               votes: previousState.votes + 1
    //             }
    //           })
    //         }
        // const horror = this.state.horrors.find((h) => id === h.id)
        // const url ="http://localhost:3000/horrors"
        // fetch(`${url}/${id}`, {
        //     method: 'PATCH', 
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(horror),
        //   })
        //   .then(resp => resp.json())
        //   .then(data => {
        //     this.setState((previousState) => {
        //         const index = previousState.horrors.findIndex((h) => id === h.id)
        //         return {
        //             horrors: [...previousState.horrors.slice(0, index), data, ...previousState.horrors.slice(index + 1)]
        //         }
        //     })
        // })
    //}
       
             // this.setState(previousState => {
        //     return {
        //       votes: previousState.votes + 1
        //     }
        //   })
        //   .catch((error) => {
        //     console.error('Error:', error);
        //   });
        
        
    //     this.setState({votes: this.state.votes + 1})
    // }

    componentDidMount(){
        const url ="http://localhost:3000/horrors"
        fetch(url)
        .then(resp => resp.json())
        .then(data=> {
           // console.log(json)
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
        //const horrors = horrorsObj.horrors.map(horror => <Horror title={horror.title} year={horror.year} descriptor={horror.descriptor} votes={horror.votes}/>)
        return (
        <div id="horror-list">
            <div id= "search">
                <label><strong>Search for a horror:</strong></label><br></br>
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