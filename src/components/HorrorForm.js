import { Component } from 'react'

export default class HorrorForm extends Component {

    state = {
        title: "",
        year: "",
        descriptor: ""
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
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
        //     console.log('Success:', data);
       })
        //   .catch((error) => {
        //     console.error('Error:', error);
        //   });
        
    }

    onFormChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        this.setState({
            [name]: value
        }, () => console.log(this.state))
    }


    render() {
        const { title, year, descriptor } = this.state
        return (
            <form id= "horror-form" onSubmit={this.handleFormSubmit}>
                <strong> Add A New Horror: </strong><br></br>
                <label>Title: </label>
                <input type="text" name="title" onChange={this.onFormChange} value={title}/><br></br>
                <label>Year: </label>
                <input type="text" name="year" onChange={this.onFormChange} value={year} /><br></br>
                <br></br>
                <textarea name="descriptor" placeholder="Add some descriptors here..."rows="7" cols="25" onChange={this.onFormChange} value={descriptor} ></textarea> 
                <br></br>
                <input type="submit" value= "Add Horror"/>
            </form>
        )
    }
}

