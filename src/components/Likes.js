import React, {Component} from 'react';
import { FaHeart, FaHeartBroken } from 'react-icons/fa';

class Likes extends Component { 
    state = {
        likes: 0,
    }

    handleVote(type) {
        this.setState(prevState => ({
            likes: type === "add" ? prevState.likes + 1 : prevState.likes - 1
        }));
    }

    render() {
        const { likes } = this.state;
        return (
              <>
                <FaHeart
                    onClick={ this.handleVote.bind(this, 'add') }
                    size='17px'
                    id='heart'
                    style={{ 
                        color: 'rgb(175,111,9)',
                        margin: '5px' ,
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        paddingLeft: '5%',
                        cursor: 'pointer'
                        }} /> 
                <FaHeartBroken
                  onClick={ this.handleVote.bind(this, 'min') }
                    size='17px'
                    id='brokenheart'
                    style={{ 
                        color: 'rgb(175,111,9)',
                        margin: '5px' ,
                        display: 'inline-block',
                        verticalAlign: 'middle',
                        cursor: 'pointer'
                    }} />
                <p value={ likes }> Likes: { likes }</p>
            </>
        )
    }
}
export default Likes

