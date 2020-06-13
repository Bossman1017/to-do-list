import React from 'react';
import './App.css';
import List from './components/list'


export default class App extends React.Component {
  //Array of Items XX
  //Property that holds an empty string of values XX
  //state -- setState??
  //list out the items
  //onSubmit
  //onChange XX
  //bind??


  constructor(props){
    super(props)

    this.state ={

      term:``,
      items: [],

    }
  }

  onChange = event => {
    this.setState({term: event.target.value})
  }

  onSubmit = event => {
    event.preventDefault()
      this.setState({
      term:'',
      items:[...this.state.items, this.state.term]
    })
  }



  render(){
    return (
      <>
      <div className = "header">
        <div className = "wrapper">
          <img src = "/img/Road.jpg" />
          <p className = "title">Road2Hire</p>
        </div>
      </div>
      <div className = "app">
        <div className = "app-wrapper">
          <p className = "app-title">To-Do List</p>
          <form 
          className = "App"
          onSubmit = {this.onSubmit}>
            <input 
            value = {this.state.term}
            onChange = {this.onChange}
            place holder="Type here to add a task"
            type = "text"
            id = "box" 
            />

            <br />
          </form>
          <br />

          <List items = {this.state.items} />

        </div>
        <br />
      </div>
      </>
    )
  }
}


