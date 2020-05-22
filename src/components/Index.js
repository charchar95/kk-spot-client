import React from 'react';
import '../App.css';
import { FaHeart, FaHeartBroken, FaPlay } from 'react-icons/fa';
import Footer from '../components/Footer'


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
                  <img src={song.album} width="100px" height="100px" alt={song.name}></img>
                  <p>Likes: {this.state.likes}</p>
                  <p>{song.name}</p>
                  <form>
                <FaHeart
                  type='submit'
                  itemID={song.id}
                 onClick={()=> this.updateLike(song.id)} 
                  value={song.likes}
                    size='17px'
                    id='heart'
                    style={{ 
                    color: 'rgb(239,167,167)',
                    margin: '5px' ,
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    paddingLeft: '5%'
                  }} />
                </form>
                  <FaHeartBroken
                  onClick={()=> this.updateLike(song.id)} 
                    size='17px'
                    id='brokenheart'
                    style={{ 
                    color: 'rgb(239,167,167)',
                    margin: '5px' ,
                    display: 'inline-block',
                    verticalAlign: 'middle'
                  }}
                  />
                <FaPlay
                    itemID={song.id}
                    onClick={()=> this.playSong(song.id)} 
                    size='17px'
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
           : 
           <main className="content">
           {this.props.showSongs.map(song => {
             return (
             <div className="box" key={song.id}>
                 <img src={song.album} width="100px" height="100px" alt={song.name}></img>
                 <p>Likes: {this.state.likes}</p>
                 <p>{song.name}</p>
               <FaHeart
                 type='submit'
                 itemID={song.id}
                 onClick={this.handleChange} 
                 value={song.likes}
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
                 onClick={()=> this.updateLike(song.id)} 
                   size='17px'
                   id='brokenheart'
                   style={{ 
                   color: 'rgb(239,167,167)',
                   margin: '5px' ,
                   display: 'inline-block',
                   verticalAlign: 'middle'
                 }}
                 />
               <FaPlay
                   itemID={song.id}
                   onClick={()=> this.playSong(song.id)} 
                   size='17px'
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
           }
    <Footer 
        currentlyPlaying={this.state.currentlyPlaying}
        setCurrentSong={this.setCurrentSong}
        onDone={this.onSongDone}
        nextSongId={this.state.nextSongId}
        // onNext={this.onPlayerNext}
        // onPrev={this.onPlayerPrev}
        />

    </>
        )
    }
}

export default Index