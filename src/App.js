import React, { Component } from 'react';
import './Containers/App.css';
import List from './Components/List';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  }

  removeItem = (props) => {
    this.setState()
  }

  render() {
    return (
      <div>
          <h2 className='tc'>TO-DO LIST</h2>
          <h5 className='tc'>BUILT WITH REACT.JS</h5>
          <form className='pa5 tc' onSubmit={this.onSubmit}>
            <input placeholder='enter an item' 
                   value={this.state.term} 
                   onChange={this.onChange}
                    />
            <button>add</button>
          </form>
          <li id="main">
            <List items={this.state.items} removeItem={this.state.items}
             />
          </li>
      </div>
    );
  }
}