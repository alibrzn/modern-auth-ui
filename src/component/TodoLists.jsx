//import { useState } from "react";
import emptytodo from "../assets/empty-todo.svg"
import deletebtn from "../assets/delete.svg"
import donempty from "../assets/donempty.svg" 
import yesDone from "../assets/btnDone.svg"

export default function TodoLists(props) {


    console.log(props.arrayTask)
    props.arrayTask.map((task)=> {
        console.log(task)
        //imgDone[index] = task
    })
    // const [Array_Todo, setArray_Todo] = props.arrayTask

    function handlerDonTask(taskid) {
        // console.log(taskid)

        props.setarrayTask(

            props.arrayTask.map(task =>

                task.id === taskid
                    ? { ...task, stat: !task.stat } // if
                    : task                          // else

            )

        )
        
    }

    if (props.arrayTask.length !== 0) {

        return(

            <div className="flex flex-col items-center justify-center gap-6 w-full">

            { props.arrayTask.map((task) => (
                <div key={ task.id }
                className={task.stat ? 'Tasktrue' : 'Taskfalse'} >
                    <img className="imgdel" onClick={ ()=> props.deleteTask(task.id) } src={ deletebtn } alt=""/>
                    <p className={ task.stat ? 'ptrue' : 'pfalse' }>
                        { task.TaskName }
                    </p>
                         {/* در تابع آن کلیک زیر 
                         arrow function 
                         به این دلیل ایجاد شده است که اگر نباشد بدون کلیک اجرا میشودآن تابع! */}
                        <img className="imgDone" onClick={ ()=> handlerDonTask(task.id) } src={ task.stat ? yesDone : donempty } alt=""/>
                </div>
            ) ) }
            
        
        </div>

        );

    }

    else {

        return (
        


            <div className="flex flex-col items-center justify-center">

                    <img src={ emptytodo } alt=""/>
                    <p className="text-gray-500">
                        <b>Você ainda não tem tarefas cadastradas</b><br></br>
                        Crie tarefas e organize seus itens a fazer
                    </p>

            </div>

        );


    }


    
}