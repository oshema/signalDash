import csvReducer from './csvReducer';
import chartReducer from './chartReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    csvData: csvReducer,
    chartData: chartReducer
})

export default rootReducer;