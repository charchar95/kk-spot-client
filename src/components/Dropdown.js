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

          { this.state.displayMenuMood ? (
          <ul>
         <li onClick={this.filterMoodGrumpy}>Grumpy</li>
         <li onClick={this.filterMoodSad}>Sad</li>
         <li onClick={this.filterMoodLazy}>Lazy</li>
         <li onClick={this.filterMoodGood}>Good</li>
         <li onClick={this.filterMoodHard}>Hard to Say</li>
          </ul>
        ):
        (
          null
        )
        }
        <div className="genre" onClick={this.showDropdownMenuGenre}>Pick A Genre</div>

            { this.state.displayMenuGenre ? (
            <ul>
            <li onClick={this.filterGenreWorld}>World</li>
            <li onClick={this.filterGenreBeach}>Beach</li>
            <li onClick={this.filterGenreMarch}>March</li>
            <li onClick={this.filterGenreRagtime}>Country</li>
            <li onClick={this.filterGenreLove}>Love</li>
            <li onClick={this.filterGenreDance}>Dance</li>
            <li onClick={this.filterGenreMinimalist}>Minimalist</li>
            <li onClick={this.filterGenreRock}>Rock</li>
            <li onClick={this.filterGenreAmbient}>Ambient</li>
            <li onClick={this.filterGenreWaltz}>Waltz</li>
            <li onClick={this.filterGenreBallad}>Ballad</li>
            <li onClick={this.filterGenreFunk}>Funk</li>
            <li onClick={this.filterGenreSoundtrack}>Soundtrack</li>
            <li onClick={this.filterGenreJazz}>Jazz</li>
            <li onClick={this.filterGenreFolk}>Folk</li>
            <li onClick={this.filterGenreClassical}>Classical</li>
            </ul>
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