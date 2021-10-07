import { Component } from 'react'
import Horror from '../components/Horror'

class HorrorList extends Component {

    state = {
        horrors: []
    }

    render() {
        return (
        <div id="horror-list">
            <Horror />
        </div>
        )
    }
}

export default HorrorList