import { combineReducers } from 'redux';

import appReducer from './appState'

const rootReducer = combineReducers({ app: appReducer })

export default rootReducer; 
