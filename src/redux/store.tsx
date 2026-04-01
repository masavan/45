import  { configureStore } from '@reduxjs/toolkit'
//import {toDoSlice} from "./slices/toDoSlice.tsx";
import toDoReducer from "./slices/toDoSlice.tsx";

export default configureStore({
    reducer: {
        toDo: toDoReducer,
    }
})
