import {useDispatch, useSelector} from 'react-redux'
import {addToDo, type IArr, indetify} from "./slices/toDoSlice.tsx";
import { useState, } from "react";
//import {IArr} from "./slices/toDoSlice.ts";


export const ToDo = () => {

    const arr = useSelector((state:  {toDo: { arr: IArr[] } }) => state.toDo.arr);
    const dispatch = useDispatch();


    const [input, setInput] = useState('');


    const handleInputChange = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input === '') return;

        dispatch(addToDo(input));
        console.log(input);
        setInput('');
    }


    return (
        <>
            <form onSubmit={handleInputChange}>
                <input value={input} onChange={(e) => setInput(e.currentTarget.value)}></input>
                <button type="submit">Save</button>

            </form>
            <div style={{padding: '10px'}}>{

                arr.map((elem: { id:number; indetifi: boolean; text: string})  => {
                    return(
                        <div key={elem.id} style={{ display:'flex' ,padding: 'auto', color:elem.indetifi ? 'green' : 'red', border: '1px solid black',
                            marginTop: '5px' }}>
                            <p style={{marginRight:'10px'}}>{elem.text}</p>
                            <button onClick={() => dispatch(indetify(elem.id))}>{elem.indetifi ? 'No done' :'Done'  }</button>
                        </div>
                    )
                })
            }</div>
            </>
    )
}