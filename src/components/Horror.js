import { Component } from 'react'

class Horror extends Component {
   

    
    
    render() {
    return (
        <div class="card" >
            <h2 class="title">{props.title}</h2>
            <h3> {props.year}</h3>
            <p>{props.descriptor}</p>
            <p>{props.votes} Votes</p>
            <button class="vote-btn">Vote</button>
        </div>
        )
    }
}

export default Horror

