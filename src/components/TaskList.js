import React, { useState } from 'react'
import TaskCard from './TaskCard';
export default function TaskList() {
    const [task , setTask] = useState([
        {id:154, name:"Work", status:"completed"},
        {id:254, name:"Gym", status:"inComplete"},
        {id:356, name:"Fitness", status:"completed"},
        {id:4587, name:"Study", status:"inComplete"},
    ]);
   function handleDelete(id){
        return(

            setTask(task.filter((task)=>task.id!==id))
        )
    }
  return (
    <div>

       <h4>TaskList</h4>
       {task.map((task)=>(
          <TaskCard key = {task.id} task={task} handleDelete={handleDelete}/>
       ))}  
    </div>
  )
  
}

