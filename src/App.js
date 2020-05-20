import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Index from './components/Index';



class App extends React.Component {
  state = {
    songs: [],
    firstSong: []
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

  shuffleSong(){
    let random = Math.floor(Math.random()*96)
    console.log(random)
    let oneSong = this.state.songs[random]
    console.log(this.state.songs[random])
    this.setState({ firstSong: oneSong })
    console.log('shuffle song ' + this.state.firstSong)
  } 

  updateLike (id, event) {
    console.log("clicked");
    // event.preventDefault()
    fetch(`http://localhost:3000/songs/${id}`, {
      body: JSON.stringify({
        likes: +1
      }),
      method: 'PUT',
   headers: {
    "Content-Type": "application/json"
   }
  })
   .then(updatedSong => {
     this.getSongs()
    //  this.setState({
    //   editVisible: false,  
    //  })
   })
   .catch(error => console.log(error))
    }


    render () {
    return (
      <div className="container">
    
          <header> 
            <h1>KK Spot</h1>
            <img src="https://i.imgur.com/U1zxNlO.png" width="50px" height="50px" alt="kk slider"></img>
            </header>
            <nav className="nav">
              <Nav 
              songs={this.state.songs}
              />
            </nav>
           <Index 
           songs={this.state.songs}
           updateLike={this.updateLike}
           getSongs={this.getSongs}
           />
  
      </div>
       );
    }
  }

export default App;
