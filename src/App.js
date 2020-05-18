import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { FaHeart } from 'react-icons/fa';
import { FaHeartBroken } from 'react-icons/fa';

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
              <button onClick={()=> this.shuffleSong()}>Play A Song</button>
            </nav>
            <main className="content">
                {this.state.songs.map(song => {
                  return (
                  <div className="box" key={song.id}>
                    
                      <img src={song.album} width="100px" height="100px" alt={song.name}></img>
                      <p>{song.name}</p>
                      <FaHeart 
                        size='17px'
                        id='heart'
                        style={{ 
                        color: 'rgb(239,167,167)',
                        margin: '5px' ,
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        paddingLeft: '5%'
                      }} />
                      <FaHeartBroken 
                        size='17px'
                        id='brokenheart'
                        style={{ 
                        color: 'rgb(239,167,167)',
                        margin: '5px' ,
                        display: 'inline-block',
                        verticalAlign: 'middle'
                      }}
                      />
                    </div>
                    )
            })}
               </main> 
        <footer className="nowplaying">
            <audio controls>
                <source src={this.state.firstSong.source} type="audio/mpeg" autoPlay/> 
              </audio>
        </footer>
      </div>
       );
    }
  }

export default App;
