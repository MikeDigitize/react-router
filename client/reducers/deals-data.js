import { ADDDEAL } from '../actions/deals-action';

let initialState = {
    deals : [{
        type : 'laundry',
        name : 'Washing Machine',
        price : 299
    }, {
        type: 'AV',
        name : 'TVs',
        price : 599
    }]
};

export default function dealsData(state = initialState, action = {}) {
    switch(action.type) {
        case "ADDDEAL" :
            return Object.assign({}, state, {
                deals : state.deals.concat(action.state)
            });
        default :
            return state;
    }
}