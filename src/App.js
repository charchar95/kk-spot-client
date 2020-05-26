import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Index from './components/Index';
import './fonts/FinkHeavy.ttf'
import './fonts/FOT-Seurat-Pro-B.otf'

class App extends React.Component {
  state = {
    songs: [],
    showSongs: [], 
    filtered: false,
  }

  componentDidMount(){
    this.getSongs()
  }

handleDropDown = (arr)=> {
    this.setState({ 
      showSongs: arr, 
      filtered: true
    });
}


  getSongs () {
    fetch('https://kk-spot-api.herokuapp.com/songs')
    .then(response => response.json())
    .then(json => this.setState({ songs: json }))
    .catch(error => console.error(error))
  }



    render () {
    return (
      <div className="container">
    
          <header> 
            <div className="hbox">
              <h1>KK Spot</h1>
            </div>
            <img src="https://i.imgur.com/U1zxNlO.png" width="50px" height="50px" alt="kk slider"></img>
            </header>
            <nav className="nav">
              <Nav 
              songs={this.state.songs}
              handleDropDown={this.handleDropDown}
              />
            </nav>
           <Index 
           songs={this.state.songs}
           showSongs={this.state.showSongs}
           filtered={this.state.filtered}
           
           />
  
      </div>
       );
    }
  }

export default App;