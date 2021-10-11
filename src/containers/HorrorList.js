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
            horrorCards = this.state.horrors.filter((horror) => horror.title.toLowerCase().startsWith(this.state.search.toLowerCase()))
        }
        return horrorCards.map(horror => <Horror onVoteClick={this.onVoteClick} key={horror.id} id={horror.id} title={horror.title} year={horror.year} descriptor={horror.descriptor} votes={this.state.votes}/>)
    }

    //onVoteClick={this.onVoteClick} 
    onVoteClick = (id) => {
        console.log(id)
        console.log(this.state.votes)
        const horror = this.state.horrors.find((h) => id === h.id)
        const url ="http://localhost:3000/horrors"
        fetch(`${url}/${id}`, {
            method: 'PATCH', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({votes: horror.votes + 1}),
          })
          .then(resp => resp.json())
          .then(data => {

            console.log('Success:', data);
            // this.setState(previousState => {
        //     return {
        //       votes: previousState.votes + 1
        //     }
        //   })
      //  }
       })
        //   .catch((error) => {
        //     console.error('Error:', error);
        //   });
        
    }
       
        
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
            <HorrorForm addHorror={this.addHorror}/>
            {this.makeHorrorCard()}
        </div>
        )
    }
}
  

export default HorrorList