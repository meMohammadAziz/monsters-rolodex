import React, {Component} from 'react';
import './App.css';
import {SearchBox} from './component/search-box/search-box.component';
import {CardList} from './component/card-list/card-list.component';

class App extends Component{
constructor(){
  super();

  this.state = {
    monsters: [],
    searchField: '',
  }
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters : users}) )
}

handleChange = (e) => {
  this.setState({searchField: e.target.value})
}

  render(){

    const {monsters, searchField} = this.state;
    const FilteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    
    return (
      <div className="App">
        <h1 className="hero-text">Monster Rolodex</h1>
        <SearchBox placeholder="search monsters" handleChange = {this.handleChange}></SearchBox>
        <CardList monsters = {FilteredMonsters}></CardList>
        
      </div>
    );
  } 
}

export default App;
