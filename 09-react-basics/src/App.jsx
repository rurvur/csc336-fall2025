import { useState } from 'react'
import AssignJSON from "./data.json"
import AssignItem from "./AssignItem.jsx"

function App() {
  const [task, setTask] = useState("");
  
  const [assigns, setAssign] = useState(AssignJSON);
  
   function addAssign() {
    let newAssign = {
      name: task,
      submitted: false, 
      priority: "low",
      id: Date.now()
    }

    setAssign([...assigns, newAssign]);
    setTask("");

  }

  return (
    <div id = "docBody">
      <input 
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} 
      />
      <button onClick={addAssign}>Add Assignment</button>

      <ul>
        {assigns.map((assign) => (
          <AssignItem assign={assign} key={assign.id}/>
        ))}
      </ul>

    </div>
  );
}

export default App;