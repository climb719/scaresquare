import { Component } from 'react'

export default class HorrorForm extends Component {


    render() {
        return (
            <form id= "horror-form">
                   <strong> Add A New Horror: </strong><br></br>
                <label>Title: </label>
                <input type="text" name="title" /><br></br>
                <label>Year: </label>
                <input type="text" name="year" /><br></br>
                <br></br>
                <textarea name="descriptor" placeholder="Add some descriptors here..."rows="7" cols="25" ></textarea> 
                <br></br>
                <input type="submit" value= "Add Horror"/>
            </form>
        )
    }
}