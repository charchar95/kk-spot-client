import React from 'react';

import './App.css';



class App extends React.Component {
  state = {
    songs: []
  }
  componentDidMount(){
    this.getSongs()
    
  }

  getSongs () {
    fetch('http://localhost:3000/songs')
    .then(response => response.json())
    .then(json => this.setState({ songs: json }))
    .catch(error => console.error(error))
  }


  
    render () {
  return (
    <>

    </>
  );
}
  }

export default App;
