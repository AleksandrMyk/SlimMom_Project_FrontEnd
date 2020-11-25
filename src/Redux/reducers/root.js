import { combineReducers } from 'redux';
import spinerReducer from './spinnerReducers';



const root = combineReducers({
    loading: spinerReducer.loadingReducer,
})

export default root;