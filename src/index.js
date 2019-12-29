import React from 'react';
import ReactDOM from 'react-dom';
//import * as serviceWorker from './serviceWorker';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class AnimatedShoppingList extends React.Component {
	constructor(){
		super ();
		this.state = {
			items: [
        {id:1, name: 'Milk'},
        {id:2, name: 'Yogurt'},
        {id:3, name: 'Orange Juice'}
			]
		}
	}
	handleChange(evt) {
		if(evt.key === 'Enter'){
			// Create a new item and set the current time as it's id
			let newItem = {id:Date.now(), name:evt.target.value}
			// Create a new array with the previous items plus the value the user typed
			let newItems = this.state.items.concat(newItem);
			// Clear the text field
			evt.target.value='';
			// Set the new state
			this.setState({items: newItems});
		}
	}
	handleRemove(i) {
		// Create a new array without the clicked item
		var newItems = this.state.items;
		newItems.splice(i, 1);
		// Set the new state
		this.setState({items: newItems});
	}


	render () {
		let shoppingItems = this.state.items.map((item, i) => (
		<div key={item.id} className="item"
		        onClick={this.handleRemove.bind(this, i)}>
		        {item.name}
		</div> ));

		return (
			<div>
				<ReactCSSTransitionGroup transitionName="example"
														 transitionEnterTimeout={300}
														 transitionLeaveTimeout={300}
														 transitionAppear={true}
														 transitionAppearTimeout={300}>
				{shoppingItems}
				</ReactCSSTransitionGroup>
				<input type="text" onKeyDown={this.handleChange.bind(this)}/>
			</div>);
	}

}
ReactDOM.render (<AnimatedShoppingList/>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
