import {combineReducers} from 'redux';
import AccountSetupReducer from './reducer_accountSetup';

const rootReducer = combineReducers({account: AccountSetupReducer});

export default rootReducer;
