import React, { Component } from 'react';
import {Board} from './Board';
import {ScoreCounter} from './ScoreCounter';

const style = {
	position: 'absolute',
	height: '100%',
	width: '100%',
	textAlign: 'center',
	background: 'navy'
};

const bStyle = {
	margin: 'auto',
	marginTop: 50,
	width: 'max-content',
	border: '5px solid blue',
	borderRadius: 15
}

export class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  roundNumber:  	1,
		  dim:			5,
		  highlights:  		[],
		  currentMem:		[],
		  awaitInput:		false
		}
		this.intervals = [];
		this.handleGameButtonClick = this.handleGameButtonClick.bind(this);
	}

	componentDidUpdate() {
		if (this.props.game) {
			this.runGame();
		}
	}

	runGame() {
		this.displayPattern();
	}

	displayPattern() {
		if (this.state.highlights == '' && !this.state.awaitInput) {
			this.determineHighlights();
		} else if (!this.state.awaitInput) {
			this.sleep(500 + (25 * (this.state.roundNumber-1))).then(() => {
				this.setState({
				  highlights: 	[],
			 	  awaitInput: 	true
				});
			});
		}
	}

	determineHighlights() {
		var highlightArray = [];
		for (var i = 1; i <= 2 + this.state.roundNumber; i++) {
			var tempHigh = this.getRandomInt(Math.pow(this.state.dim, 2));
			if (!highlightArray.includes(tempHigh)) {
				highlightArray.push(tempHigh);
			} else {
				i--;
			}
		}
		this.setState({
		  highlights: highlightArray,
		  currentMem: highlightArray
		});
	}	

	handleGameButtonClick(e) {
		var id = parseInt(e.target.id);
		var initMem = this.state.currentMem;
		var initHigh = this.state.highlights;
		if (initMem.includes(id)) {
			initMem.splice(initMem.indexOf(id), 1);
			initHigh.push(id);
			this.setState({
			  highlights: initHigh,
			  currentMem: initMem
			});
			if (initMem == '') {
				this.nextRound();
				var round = this.state.roundNumber + 1;
				this.setState({
				  roundNumber: 	round,
				  highlights: 	[],
				  currentMem:	[],
				  awaitInput:	false
				});
			}
		} else {
			this.endGame();
		}
	}

	nextRound() {
		var initDim = this.state.dim;
		var newDim;
		var round = this.state.roundNumber + 1;
		if (round + 2 > (Math.pow(initDim, 2))/2) {
			newDim = this.state.dim + 1;
		} else {
			newDim = this.state.dim;
		}
		this.setState({
		  roundNumber: 	round,
		  dim:		newDim,
		  highlights: 	[],
		  currentMem:	[],
		  awaitInput:	false
		});
	}

	endGame() {
		alert('You lost!');
		var hScore = this.state.roundNumber;
		this.setState({
		  roundNumber:  	1,
		  dim:			5,
		  highlights:  		[],
		  currentMem:		[],
		  awaitInput:		false
		});
		this.props.endGame(hScore);
	}

	render() {
		return(
		  <div style={style}>
		    <ScoreCounter score={this.state.roundNumber} high={false}/>
		    <ScoreCounter score={this.props.highScore} high={true}/>
		    <Board 
			style={bStyle} 
			dim={this.state.dim}
			highlights={this.state.highlights} 
			allowInput={this.state.awaitInput}
			gButHandleClick={this.handleGameButtonClick}/>
		  </div>
		);
	}

	sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	getRandomInt(max) {
		return Math.floor(Math.random() * (max) + 1);
	}
}
