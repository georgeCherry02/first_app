import React, { Component } from 'react';
import { NavBar } from './components/NavBar';
import { Content } from './components/Content';

class App extends Component {
	constructor(props) {
		super(props);
		this.startGame = this.startGame.bind(this);
		this.endGame = this.endGame.bind(this);
		this.restartGame = this.restartGame.bind(this);
		this.state = {
			game: 	    false,
			highScore:  1
		}
	}

	startGame() {
		this.setState({
			game: true
		});
	}

	endGame(hScore) {
		var nHScore;
		if (hScore > this.state.highScore) {
			nHScore = hScore;
		} else {
			nHScore = this.state.highScore;
		}
		this.setState({
			game: 	   false,
			highScore: nHScore
		});
	}

	restartGame() {
		this.endGame(1);
		this.startGame();
	}

  	render() {
    		return (
			<div>
				<NavBar game={this.state.game} startGame={this.startGame} restartGame={this.restartGame}/>
				<Content game={this.state.game} endGame={this.endGame} highScore={this.state.highScore}/>
			</div>

    		);
  	}
}

export default App;
