import { Component } from 'react'

class Horror extends Component {

    
    
    
    onClick = (e) => {
        console.log(this)
    }
   

    
    render() {
        const { title, year, descriptor, votes } = this.props
    return (
        <div class="card" >
            <h2>{title}</h2>
            <h3> {year}</h3>
            <p>{descriptor}</p>
            <p>{votes} Votes</p>
            <button onClick={this.onClick}>Vote</button>
        </div>
        )
    }
}

export default Horror

