import React, { Component } from 'react';
import DealsStore from '../store/router-store';
import Deal from './deal';
import { addDeal } from '../actions/deals-action';

export default class Deals extends Component {
	
	constructor() {
		
		super();
		let { deals } = DealsStore.getState().dealsData;
	    this.state = {
	        deals,
	        unsubscribe : DealsStore.subscribe(this.onStoreUpdate.bind(this))
	    };

	}

	onClick() {
		DealsStore.dispatch(addDeal({ name : 'Dishwasher', price : 500 }));
	}

	onStoreUpdate() {
		this.setState({
			deals : DealsStore.getState().dealsData.deals
		});
	}

	render() {
		let html = this.state.deals.map((deal, i) => <Deal key={i} name={deal.name} price={deal.price} />);
		return (
			<div>
				<button onClick={ this.onClick.bind(this) }>Click me</button>	
				{ html }
			</div>
		);
	}
	
}