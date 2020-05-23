import React from 'react';
import '../App.css';
import { FaPlay } from 'react-icons/fa';
import Footer from '../components/Footer'
import Likes from '../components/Likes'

class Index  extends React.Component {
    state = {
        likes: 0,
        currentlyPlaying: [],
    }

    playSong (itemID) {
      console.log(itemID)
        fetch(`http://localhost:3000/songs/${itemID}`)
        .then(response => response.json())
        .then(json => this.setState({ 
            currentlyPlaying: json,
            nextSongId: itemID,
            play: true,
        }))
        .catch(error => console.error(error))
    }

 
    
    render() {
        return(
            <>
            {!this.props.filtered ? 
            <main className="content">
            {this.props.songs.map(song => {
              return (

              <div className="box" key={song.id}>
                
                  <img className='image' src={song.album} width="100px" height="100px" alt={song.name} onClick={()=> this.playSong(song.id)}></img>
                 <div className="middle">
                  <FaPlay
                      onClick={()=> this.playSong(song.id)} 
                      size='25px'
                      style={{ 
                        color: 'rgb(239,167,167)',
                      }}
                    />
                  </div>
                
                 <Likes />
                  <p>{song.name}</p>
                </div>
                )
        })}
           </main> 
           : 
           <main className="content">
           {this.props.showSongs.map(song => {
             return (
             <div className="box" key={song.id}>
                 <img className='image' src={song.album} width="100px" height="100px" alt={song.name} onClick={()=> this.playSong(song.id)} ></img>
                 <div className="middle">
                  <FaPlay
                    onClick={()=> this.playSong(song.id)} 
                    size='17px'
                    style={{ 
                      color: 'rgb(239,167,167)',
                      margin: '5px' ,
                  }}
                  />
                 </div>
                 <p>{song.name}</p>
                 <Likes />
               
               </div>
               )
       })}
          </main> 
           }
    <Footer 
        currentlyPlaying={this.state.currentlyPlaying}
        nextSongId={this.state.nextSongId}
        />

    </>
        )
    }
}

export default Index