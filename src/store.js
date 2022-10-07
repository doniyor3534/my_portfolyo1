import {createStore} from 'redux'
import { ReduserFun } from './redux/Reduser/Reduser';

const store = createStore(ReduserFun,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;