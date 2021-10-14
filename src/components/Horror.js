import { Component } from 'react'
//import HorrorList from '../containers/HorrorList'

class Horror extends Component {
// function Horror(props) {
    
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

    
   render() {
        const { title, year, descriptor, id, format, votes, onVoteClick} = this.props
   // console.log(this.props)
    return (
        <div className="card" id={id} >
           <span>{format === 'movie'? '🎥' : '📺' }</span> <h2 className ="title">{title}</h2>
            <h3> {year} </h3>
            <p>{descriptor}</p>
            <p>{votes} {votes === '1'? 'Vote' : 'Votes' }</p>
            <button onClick={(e) => onVoteClick(id)}>Vote</button>
        </div>
        )
    }
}

export default Horror

