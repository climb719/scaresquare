import React from 'react'

function Horror(props) {

    const { title, year, descriptor, id, format, votes, onVoteClick} = props
    return (
        <div className="card" id={id} >
           <span>{format === 'movie'? '🎥' : '📺' }</span> <h2 className ="title">{title}</h2>
            <h3> {year} </h3>
            <p>{descriptor}</p>
            <p>{votes} {votes === '1'? 'Vote' : 'Votes' }</p>
            <button id="vote" onClick={(e) => onVoteClick(id)}>Vote</button>
        </div>
        )  
}

export default Horror

//import HorrorList from '../containers/HorrorList'

// class Horror extends Component {

    // state = {
    //     votes: 0
    // }

    // onVoteClick = (id) => {
    //     console.log(id)
    //     this.setState(previousState => {
    //         return {
    //           votes: previousState.votes + 1
    //         }
    //       })
    // }
    //    // this.setState({votes: this.state.votes + 1})

    
//    render() {


// if needed to pass down horrors from horrorList - in HL - horrors={this.state.horrors}