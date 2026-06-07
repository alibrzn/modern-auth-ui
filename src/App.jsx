/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import AddSearch from "./component/AddSearch";
import TodoLists from "./component/TodoLists"
// import Exersice from "./component/Exersice";
// import Card from "./component/Card";

function App() {

  const [Task, setTask] = useState([])

  console.log(Task)

   function sendTask(newTask) {

    setTask([...Task, newTask])

  }
  function DeleteYourTask(taskid) {
    setTask(Task.filter((tasks)=> tasks.id !== taskid ));
  
    console.log(Task); // مقدار قبلی را نشان میدهد نه فعلی چون استیت است
  }

  return (

     <div className="flex flex-col justify-center items-center mt-6 gap-20">

      {/* <Exersice /> */}
      

      <AddSearch sendTask={sendTask} />
      <hr className="text-gray-500 w-9/12"></hr>
      <TodoLists arrayTask={ Task } setarrayTask={ setTask }
                deleteTask={DeleteYourTask} 
      />

      {/* <Card>
        <h1>Hello To card</h1>
        <p>Text by Child</p>
      </Card>

      <p>
        { user.map((Users)=> {
          return <span>{ Users?.name }</span>
          console.log(Users.name)
        }) }
      </p> */}
    

    </div>

  );

  }

export default App;
