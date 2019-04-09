import React from 'react';
import {Row} from './Row';

export class Board extends React.Component {
	render() {
		var jsx = [];
		for (var i = 1; i <= this.props.dim; i++) {
			jsx.push(<Row 
				  key={i} 
				  length={this.props.dim} 
				  rowNum={i} 
				  highlights={this.props.highlights} 
				  allowInput={this.props.allowInput}
				  handleClick={this.props.gButHandleClick}/>);
		}

		return (
		  <div style={this.props.style}>
		    {jsx}
		  </div>
		);
	}
}
