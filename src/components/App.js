import React, {Component} from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import axios from 'axios';


class App extends Component {

  state = {
    player: []
  };

  // API call to balldontlie 
  componentDidMount() {
      // Make a request for a user with a given ID
    axios.get('https://www.balldontlie.io/api/v1/players?search=rondo')
    .then(response => {
      // handle success to see if data is displayed in console 
      console.log(response);
      const player = response.data.data;
      this.setState({ player });
      console.log(this.state.player);
    })
    .catch(error => {
      // handle error
      console.log('Error fetching data',error);
    });
  }


  render() {
    return (
      <div >
        <Header />
        <SearchBar />
      </div>
    );
  }
}

export default App;

