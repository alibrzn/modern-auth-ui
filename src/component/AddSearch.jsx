/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import confirm from '../assets/plus.svg';
import todolist from '../assets/todolist.svg';
//import { useEffect, useState } from 'react';

let index = 0

function AddSearch( { sendTask } ) {

    const [value_input, setvalue_input] = useState("")

    function Receive_Value(event) {

        /* console.log(event.key)
        console.log(event.target.value) */

        setvalue_input(event.target.value)
        // console.log(event)
        // console.log(value_input)

    }
    function EnterClick(event) {

        if (event.key === 'Enter') {

            // console.log(value_input)
            // alert('receive value input from Enter!')
            handlersendvalue()
            setvalue_input('')

        }

    }
    function onClick_Cursor() {
        
        // alert('receive value input from Cursor!')
        // console.log(value_input)
        handlersendvalue()
        setvalue_input('')
    }

    function handlersendvalue() {

        const arraytask = {
            TaskName : value_input,
            id : index,
            stat : false   
        }

        index++;
        console.log(arraytask)
        // sendTask(value_input)
        sendTask(arraytask)
    }
    
    return (
    <>
        <div className='w-full flex flex-col justify-center items-center gap-10 mt-8'>

            <img src={ todolist } alt="todo list"/>
            
            <div className=' w-10/12 flex flex-row justify-center items-center gap-2'>

                <input value={ value_input } 
                onChange={Receive_Value} onKeyUp={ EnterClick }
                className="bg-none w-10/12 h-13 rounded-4xl border-2 border-gray-950
                  outline-0 p-2 pl-6 text-gray-500 flex flex-row flex-wrap justify-start items-center
                  placeholder:text-lg placeholder:transition-all duration-150 ease-in-out
                  focus:placeholder:text-xs focus:placeholder:-translate-y-5 focus:bg-gray-50"
                placeholder="Adicione uma nova tarefa" type="text" />

                <div onClick={ onClick_Cursor } 
                className='icon-change cursor-pointer bg-gray-800 rounded-full w-12 h-12 flex flex-row justify-center items-center m-0 p-0 hover:bg-gray-900'>
                    <img className='img-icons' src={confirm} alt="icon"/>
                </div>

            </div>

            {/* <p> { value_input } </p> */}
            
        </div>
       
    </>
    )

}

export default AddSearch;