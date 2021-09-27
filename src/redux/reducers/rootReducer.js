import csvReducer from './csvReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    csvData: csvReducer
})

export default rootReducer;