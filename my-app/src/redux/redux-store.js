import {combineReducers, createStore} from 'redux';
import notesReduser from './notes-reduser';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
    notes: notesReduser, 
    form: formReducer
});


let store = createStore(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;