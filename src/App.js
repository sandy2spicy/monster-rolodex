import {Component} from 'react';
import {CardList} from './components/card-list/card-list.component.jsx'
import { SearchBox } from "./components/search-box/search-box.component.jsx";
import './App.css';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchFilter: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then( response => response.json()).then(users => {
      this.setState({monsters: users})
    })
  }

  handleChange = (event) => {
    this.setState({searchFilter: event.target.value});
  }

  render(){
    const filteredResult = this.state.monsters.filter((monster)=>{
       return monster.name.toLowerCase().includes(this.state.searchFilter.toLowerCase())
    })
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="Search monsters" handleChange={this.handleChange}/>
        <CardList monsters={filteredResult}/>        
      </div>
    );
  }
}


export default App;
