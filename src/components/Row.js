import React from 'react';
import {GameButton} from './GameButton';

export class Row extends React.Component {
	render() {
		var high = false;
		var tempRow = [];
		for (var colNum = 1; colNum <= this.props.length; colNum++) {
			var id = (this.props.rowNum - 1) * this.props.length + colNum;
			high = false;
			this.props.highlights.forEach(function(x) {
				if (id == x) {
					high = true;
				}
			});
			if (high) {
				tempRow.push(<GameButton 
					      	key={id} 
						id={id} 
						highlight={high} 
						allowInput={false} 
						handleClick={this.props.handleClick}/>);
			} else {
				tempRow.push(<GameButton 
					      	key={id} 
						id={id} 
						highlight={high} 
						allowInput={this.props.allowInput} 
						handleClick={this.props.handleClick}/>);
			}
		}

		return (
			<div>
			  {tempRow}
			</div>
		);
	}
}
