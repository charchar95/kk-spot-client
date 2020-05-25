import React from 'react';
// import './style.css';


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenuMood: false,
       displayMenuGenre: false,
     };

  this.showDropdownMenuMood = this.showDropdownMenuMood.bind(this);
  this.hideDropdownMenuMood = this.hideDropdownMenuMood.bind(this);
  this.hideDropdownMenuGenre = this.hideDropdownMenuGenre.bind(this);
  this.showDropdownMenuGenre = this.showDropdownMenuGenre.bind(this);
};

// MOOD //

showDropdownMenuMood(event) {
    event.preventDefault();
    this.setState({ displayMenuMood: true }, () => {
    document.addEventListener('click', this.hideDropdownMenuMood);
    });
  }

  hideDropdownMenuMood() {
    this.setState({ displayMenuMood: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenuMood);
    });
  }


  // GENRE //
  showDropdownMenuGenre(event) {
    event.preventDefault();
    this.setState({ displayMenuGenre: true }, () => {
    document.addEventListener('click', this.hideDropdownMenuGenre);
    });
  }

  hideDropdownMenuGenre() {
    this.setState({ displayMenuGenre: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenuGenre);
    });

}

 // MOODS //

filterMoodGrumpy = ()=> {
    let grumpy = this.props.songs.filter(song => song.mood === 'Grumpy')
            this.props.handleDropDown(grumpy)
            console.log(grumpy)
        }

    

filterMoodSad = ()=> {
    let sad = this.props.songs.filter(song => song.mood === 'Sad')
            this.props.handleDropDown(sad)
            console.log(sad)
        }

filterMoodLazy = ()=> {
    let mood = this.props.songs.filter(song => song.mood === 'Lazy')
    this.props.handleDropDown(mood)
    console.log(mood)
}

filterMoodGood = ()=> {
    let mood = this.props.songs.filter(song => song.mood === 'Good')
    this.props.handleDropDown(mood)
    console.log(mood)
}

filterMoodHard = ()=> {
    let mood = this.props.songs.filter(song => song.mood === 'Hard to say' || song.mood === 'Hard to day' || song.mood === 'Hard to Say') 
        this.props.handleDropDown(mood)
        console.log(mood)
    }


// GENRE //
filterGenreWorld = ()=> {
    let genre = this.props.songs.filter(song => song.genre === 'World' || song.genre === 'Bard') 
        this.props.handleDropDown(genre)
        console.log(genre)
    }

filterGenreBeach = ()=> {
    let genre = this.props.songs.filter(song => song.genre === 'Beach')
    this.props.handleDropDown(genre)
    console.log(genre)
}

filterGenreMarch = ()=> {
    let genre = this.props.songs.filter(song => song.genre === 'March' || song.genre === 'Children\'s music') 
    this.props.handleDropDown(genre)
    console.log(genre)
}

filterGenreRagtime = ()=> {
    let genre = this.props.songs.filter(song => song.genre === 'Country' || song.genre === 'Blues' || song.genre === 'Ragtime') 
    this.props.handleDropDown(genre)
    console.log(genre)
}


filterGenreLove = ()=> {
    let genre = this.props.songs.filter(song => song.genre === 'Love')
    this.props.handleDropDown(genre)
    console.log(genre)
}

filterGenreDance = ()=> {
    let genre = this.props.songs.filter(song => song.genre === 'Dance' || song.genre === 'Electronic' || song.genre === 'House'|| song.genre === 'Disco') 
    this.props.handleDropDown(genre)
    console.log(genre)
}


filterGenreMinimalist = ()=> {
    let genre = this.props.songs.filter(song => song.genre === 'Minimalist' || song.genre === 'Bossa Nova') 
    this.props.handleDropDown(genre)
    console.log(genre)
}



filterGenreRock = ()=> {
    let genre = this.props.songs.filter(song => song.genre === 'Rock' || song.genre === 'Swing') 
    this.props.handleDropDown(genre)
    console.log(genre)
}



filterGenreAmbient = ()=> {
    let genre = this.props.songs.filter(song => song.genre === 'Ambient' || song.genre === 'Stroll') 
    this.props.handleDropDown(genre)
    console.log(genre)
}


filterGenreWaltz = ()=> {
    let genre = this.props.songs.filter(song => song.genre === 'Waltz') 
    this.props.handleDropDown(genre)
    console.log(genre)
}


filterGenreBallad = ()=> {
    let genre = this.props.songs.filter(song => song.genre === 'Ballad') 
    this.props.handleDropDown(genre)
    console.log(genre)
}


filterGenreFunk = ()=> {
    let genre = this.props.songs.filter(song => song.genre === 'Funk' || song.genre === 'G-Funk') 
    this.props.handleDropDown(genre)
    console.log(genre)
}


filterGenreSoundtrack = ()=> {
    let genre = this.props.songs.filter(song => song.genre === 'Soundtrack' || song.genre === 'Theme song' || song.genre === 'American traditional') 
    this.props.handleDropDown(genre)
    console.log(genre)
}

filterGenreJazz = ()=> {
    let genre = this.props.songs.filter(song => song.genre === 'Jazz' || song.genre === 'Soul') 
    this.props.handleDropDown(genre)
    console.log(genre)
}


filterGenreFolk = ()=> {
    let genre = this.props.songs.filter(song => song.genre === 'Folk' || song.genre === 'Fold' || song.genre === 'Jongara'|| song.genre === 'Enka') 
    this.props.handleDropDown(genre)
    console.log(genre)
}


filterGenreClassical = ()=> {
    let genre = this.props.songs.filter(song => song.genre === 'Classical') 
    this.props.handleDropDown(genre)
    console.log(genre)
}


  render() { 

    return (
    <div  className="dropdown">
        
         <div className="mood" onClick={this.showDropdownMenuMood}>Pick A Mood</div>
            <hr className='hr'></hr>
          { this.state.displayMenuMood ? (
              <>
         <p onClick={this.filterMoodGrumpy}>Grumpy</p>
         <p onClick={this.filterMoodSad}>Sad</p>
         <p onClick={this.filterMoodLazy}>Lazy</p>
         <p onClick={this.filterMoodGood}>Good</p>
         <p onClick={this.filterMoodHard}>Hard to Say</p>
        </>
        ):
        (
          null
        )
        }
        <div className="genre" onClick={this.showDropdownMenuGenre}>Pick A Genre</div>
            <hr className='hr'></hr>
            { this.state.displayMenuGenre ? (
            <>
            <p onClick={this.filterGenreWorld}>World</p>
            <p onClick={this.filterGenreBeach}>Beach</p>
            <p onClick={this.filterGenreMarch}>March</p>
            <p onClick={this.filterGenreRagtime}>Country</p>
            <p onClick={this.filterGenreLove}>Love</p>
            <p onClick={this.filterGenreDance}>Dance</p>
            <p onClick={this.filterGenreMinimalist}>Minimalist</p>
            <p onClick={this.filterGenreRock}>Rock</p>
            <p onClick={this.filterGenreAmbient}>Ambient</p>
            <p onClick={this.filterGenreWaltz}>Waltz</p>
            <p onClick={this.filterGenreBallad}>Ballad</p>
            <p onClick={this.filterGenreFunk}>Funk</p>
            <p onClick={this.filterGenreSoundtrack}>Soundtrack</p>
            <p onClick={this.filterGenreJazz}>Jazz</p>
            <p onClick={this.filterGenreFolk}>Folk</p>
            <p onClick={this.filterGenreClassical}>Classical</p>
            </>
            ):
            (
            null
            )
            }

       </div>

    );
  }
}

export default Dropdown;