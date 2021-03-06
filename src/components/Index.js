import React from 'react';
import '../App.css';
import { FaPlay } from 'react-icons/fa';
import Footer from '../components/Footer'
import Likes from '../components/Likes'
import Modal from '../components/Modal'

class Index  extends React.Component {
    state = {
        likes: 0,
        currentlyPlaying: [],
        nextSongId: [],
        showModal: 0
    }

    playSong = (itemID) => {
      console.log(itemID)
        fetch(`https://kk-spotify-api.herokuapp.com/songs/${itemID}`)
        .then(response => response.json())
        .then(json => this.setState({ 
            currentlyPlaying: json,
            nextSongId: itemID,
        }))
        .catch(error => console.error(error))
    }

fetchNext= (newId)=> {
    fetch(`https://kk-spotify-api.herokuapp.com/songs/${newId}`)
    .then(response => response.json())
    .then(json => this.setState({ 
        currentlyPlaying: json,
        nextSongId: newId
    }))
    .catch(error => console.error(error))
  }

  fetchPrevious= (newId)=> {
    fetch(`https://kk-spotify-api.herokuapp.com/songs/${newId}`)
    .then(response => response.json())
    .then(json => this.setState({ 
        currentlyPlaying: json,
        nextSongId: newId
    }))
    .catch(error => console.error(error))
  }

  getModal = value => {
    this.setState({ showModal: value });
  };

  hideModal = value => {
    this.setState({ showModal: 0 });
  };

  handleShuffle = (arr)=> {
   let itemID = arr[0].id
    console.log(itemID)
    fetch(`https://kk-spotify-api.herokuapp.com/songs/${itemID}`)
    .then(response => response.json())
    .then(json => this.setState({ 
        currentlyPlaying: json,
        nextSongId: itemID,
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
                  <h4>{song.name}</h4> <br></br>
                 <div className="middle">
                  <FaPlay
                      onClick={()=> this.playSong(song.id)} 
                      size='25px'
                      style={{ 
                        color: 'rgb(255,255,203)',
                        paddingBottom: '250%'
                      }}
                    />
                  </div>
                  <button className="open" onClick={() => this.getModal(song.id)}> More </button>
                 <Likes />
                 
        <div>
        
              <Modal 
                  show={this.state.showModal === song.id}    
                  onHide={() => this.hideModal(song.id)}
                  img={song.album}
                  name={song.name}
                  genre={song.genre}
                  mood={song.mood}
                  playSong={()=> this.playSong(song.id)}
                  songid={song.id}
                      />
          </div>
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
                 <h4>{song.name}</h4> <br></br>
                 <div className="middle">
                  <FaPlay
                    onClick={()=> this.playSong(song.id)} 
                    size='17px'
                    style={{ 
                      color: 'rgb(175,111,9)',
                      margin: '5px' ,
                  }}
                  />
                 </div>
                 <button  className="open"  onClick={() => this.getModal(song.id)}> More </button>
                  <Likes /> 
                  
              <div>
                 
              <Modal 
                  show={this.state.showModal === song.id}    
                  onHide={() => this.hideModal(song.id)}
                  img={song.album}
                  name={song.name}
                  genre={song.genre}
                  mood={song.mood}
                  playSong={()=> this.playSong(song.id)}
                  songid={song.id}
                      />
          </div>
   
               </div>
               )
       })}
 

          </main> 
           }
    <Footer 
        currentlyPlaying={this.state.currentlyPlaying}
        nextSongId={this.state.nextSongId}
        fetchNext={this.fetchNext}
        fetchPrevious={this.fetchPrevious}
        songs={this.props.songs}
        handleShuffle={this.handleShuffle}
        />

    </>
        )
    }
}

export default Index