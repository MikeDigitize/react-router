import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dealsData from '../reducers/deals-data';

function Store(state = {}, action = {}) {``
    return {
        dealsData : dealsData(state.dealsData, action)
    }
}


let DealsStore = applyMiddleware(thunk)(createStore)(Store);
export default DealsStore;