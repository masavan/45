import { createSlice } from '@reduxjs/toolkit'
//import {useState} from "react";

export interface IArr {
    id: number;
    text: string;
    indetifi: boolean;

}

//const [text, setText] = useState('')
export const toDoSlice = createSlice({
    name:'to-do',
    initialState:{
        arr:[] as IArr[],

    },
    reducers:{
        addToDo: (state, action) => {

            state.arr.push({id: state.arr.length, text: action.payload, indetifi : false}) ;
            // state.arr([...state.arr, {id: state.arr.length, text: action.text, indetifi : false}])
        },
        // addText: (text) => {
        //   setText(text)
        // },
        indetify: (state, action )=> {
            const idSta = state.arr.find(item=>item.id === action.payload);
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            idSta && (idSta.indetifi = !idSta.indetifi);
           // idSta && (state.arr([...state.arr, {id, text, indetifi:  !indetifi}]));
        }
    }
})

export const {addToDo, /*addText,*/ indetify} = toDoSlice.actions
export default toDoSlice.reducer