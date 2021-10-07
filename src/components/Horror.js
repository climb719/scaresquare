import { Component } from 'react'

class Horror extends Component {

    // initial state
    state = {
        votes: 0
    }


    
    onVoteClick = () => {
        this.setState({votes: this.state.votes + 1})
    }
   

    render() {
        const { title, year, descriptor, id } = this.props
        console.log(this.props)
    return (
        <div className="card" id={id} >
            <h2>{title}</h2>
            <h3> {year}</h3>
            <p>{descriptor}</p>
            <p>{this.state.votes} Votes</p>
            <button onClick={this.onVoteClick}>Vote</button>
        </div>
        )
    }
}

export default Horror

