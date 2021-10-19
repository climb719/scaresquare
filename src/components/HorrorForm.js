import { Component } from 'react'

export default class HorrorForm extends Component {

    state = {
        title: "",
        format: "",
        year: "",
        descriptor: ""
    }

    handleFormSubmit = (e) => {
        console.log(e.target)
        e.preventDefault()
        e.target.reset()
        const horror = {...this.state, votes: 0}
        const url ="http://localhost:3000/horrors"
        fetch(url, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(horror),
          })
          .then(resp => resp.json())
          .then(data => {
              this.props.addHorror(data)
              this.setState({
                title: "",
                year: "",
                descriptor: "",
                format: ""
            })
       })
    }

    onFormChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value
        }, () => console.log(this.state))
    }


    render() {
        const { title, format, year, descriptor } = this.state
        return (
            <form id= "horror-form" onSubmit={this.handleFormSubmit}>
                <strong> Add A New Horror: </strong><br></br>
                <label>Title: </label>
                <input required type="text" name="title" onChange={this.onFormChange} value={title}/><br></br>
                <label>Year: </label>
                <input required type="text" name="year" onChange={this.onFormChange} value={year} /><br></br>
                <br></br>
                <textarea required name="descriptor" placeholder="Add some descriptors here..."rows="7" cols="25" onChange={this.onFormChange} value={descriptor} ></textarea> 
                <br></br>
                Horror Format: <select required name="format" id="format" onChange={this.onFormChange} value={format}>
                <option value="" >Please Select</option>
                <option value="movie">&nbsp;&nbsp; Movie 🎥 </option>
                <option value="show"> &nbsp;&nbsp; Show 📺 </option>
                </select>
                <br></br>
                <br></br>
                <input type="submit" value= "Add Horror"/>
            </form>
        )
    }
}

