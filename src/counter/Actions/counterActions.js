import { connect } from "react-redux";
import {COUNTER_INCREMENT,COUNTER_DECREMENT}  from './ActionTypes';
import CounterComponent  from '../Components/CounterComponent';

const mapStateToProps =(state) => ({
    count: state.CounterReducer.count
});

const mapDispatchToProps =(dispatch) => ({
    increment: () => dispatch(counterIncrement()),
    decrement: () => dispatch(counterDecrement())
});

export const counterIncrement =()=>({
    type: COUNTER_INCREMENT,
})

export const counterDecrement =()=>({
    type: COUNTER_DECREMENT,
})
export default connect(mapStateToProps,mapDispatchToProps)(CounterComponent);