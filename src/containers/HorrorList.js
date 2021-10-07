import { Component } from 'react'
import Horror from '../components/Horror'
import horrorsObj from '../data'

class HorrorList extends Component {

    state = {
        horrors: []
    }

    makeHorrorCards() {
        console.log(horrorsObj.horrors)
        //horrorObj.horrors.map((horror))
    }

    render() {
        return (
        <div id="horror-list">
            {this.makeHorrorCards()}
        </div>
        )
    }
}

export default HorrorList