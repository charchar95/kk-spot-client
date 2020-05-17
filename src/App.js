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
      <div className="container">
          <header> 
            <h1>KK Spot</h1>
            <img src="https://i.imgur.com/U1zxNlO.png" width="50px" height="50px" alt="kk slider"></img>
            </header>
            <nav className="nav">
              <h1>This is the nav</h1>
            </nav>
            <main className="content">
                {this.state.songs.map(song => {
                  return (
                  <div className="box" key={song.id}>
                    
                      <img src={song.album} width="100px" height="100px" alt={song.name}></img>
                      <p>{song.name}</p>
                      
                    </div>
                    )
            })}
               
               </main>
        <footer className="nowplaying"> this is the footer</footer>
      </div>
       );
    }
  }

export default App;
