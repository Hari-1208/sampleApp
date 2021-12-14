import {createStore,combineReducers} from 'redux';
import {reducertextdata} from '../../redux/reducer/reducer';
const rootReducer = combineReducers({
    textInstore:reducertextdata
});
const store  = () =>{
    // console.log("reducertextdata",reducertextdata)
    return createStore(rootReducer);
}
export default store;