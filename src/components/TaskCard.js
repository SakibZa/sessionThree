import React from "react";

// export default function taskCard(props) {

 export default function taskCard({task , handleDelete , info}) {
  return (
    <div className="task-item">
      {/* <p>{props.task.name}</p> */}
      <p>{task.name}</p>
      {/* <p>{props.task.status}</p> */}
      <p>{task.status}</p>
      <p>{info}</p>
      <button onClick={() =>handleDelete(task.id)}>Delete</button>
    </div>
  );
}
