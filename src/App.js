import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

// 1. Component - Properties
function Biodata(props) {
  return <span>umur : {props.age}</span>
}

function Greeting(props) {
  return <h1>Hallo {props.name} - <Biodata age={props.age} /> </h1>
}

//2. State


class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: props.start
    }
  }

  //lifecycle
  componentDidMount() {
    this.addInterval = setInterval(() => this.increse(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.addInterval)
  }

  increse() {
    //update state time setiap detik
    this.setState((state, props) => ({
      time: parseInt(state.time) + 1
    }))
  }


  render() {
    return (
      <div> {this.state.time} Detik</div>
    )
  }
}

//3. Event
class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toggleStatus: true
    }

    this.handleClick = this.handleClick.bind(this)

  }
  handleClick() {
    this.setState(state => ({
      toggleStatus: !state.toggleStatus
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick} >
        {this.state.toggleStatus ? 'ON' : 'OFF'}
        <p>Kondisi sekarang {this.state.toggleStatus ? 'menyala' : 'mati'} </p>
      </button>
    )
  }
}

//4.Todolist

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todoItem: '',
      items: []

    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      items: [...this.state.items, this.state.todoItem],
      todoItem: ''
    })
  }

  handleChange = (event) => {
    this.setState({
      todoItem: event.target.value
    })

  }

  render() {

    return (

      <div>
        <form onSubmit={this.handleSubmit} >
          <input value={this.state.todoItem} onChange={this.handleChange} />
          <button>Add</button>
        </form>

        <List items={this.state.items} />
      </div>

    );
  }
}

export default App;
