import { Component } from 'react'
import Horror from '../components/Horror'
import horrorsObj from '../data'

class HorrorList extends Component {

    state = {
        horrors: []
    }


    render() {
        const horrors = horrorsObj.horrors.map(horror => <Horror title={horror.title} year={horror.year} descriptor={horror.descriptor} votes={horror.votes}/>)
        return (
        <div id="horror-list">
            {horrors}
        </div>
        )
    }
}

export default HorrorList