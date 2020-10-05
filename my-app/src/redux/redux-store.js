import {combineReducers, createStore} from 'redux';
import notesReduser from './notes-reduser';

let reducers = combineReducers({notes: notesReduser});


let store = createStore(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;