import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState("");

  const [show, setShow] = useState(false);

  const handleChange = () => {
    setShow("display:block");
  }

  return (
    <>
      <div>
        <input type="text" value={task} onChange={(event)=> {
          setTask(event.target.value);
        }} />
        <button onClick={handleChange}>Add</button>
        <div>
          <h1>{task}</h1>
        </div>
      </div>
    </>
  )
}

export default App
