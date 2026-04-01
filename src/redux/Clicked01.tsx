//import {createStore} from "@reduxjs/toolkit";
import { configureStore } from '@reduxjs/toolkit'
import {useSelector} from "react-redux";



const initialState = {
    value: 0
}

const INCREMENT = 'incremented';
const DECREMENT = 'decremented';

// @ts-ignore
const counter = (state = initialState, action) =>{
    switch(action.type){
        case INCREMENT:
            return ({ ...state,
                value: state.value + 1
            })


        case DECREMENT:
            return ({ ...state,
                value: state.value - 1
            })

        default:
            return state;
    }
}

export const store = configureStore({reducer: counter});

const increment = () => store.dispatch({type: INCREMENT});
const decrement = () => store.dispatch({type: DECREMENT});



// @ts-ignore
//const selectCounterValue = state => state.value;



export const Batb = () => {

    const currentValue = useSelector(state => state.value);


    return(
        <>
            <p  id ='value'>{currentValue}</p>
            <button onClick={ increment}>+1</button>
            <button onClick={decrement}>-1</button>
        </>
    )
}