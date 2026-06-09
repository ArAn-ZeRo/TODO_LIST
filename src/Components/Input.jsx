import { useState } from "react";

const Input = ({ taskList , setTaskList}) => {
  const [task, setTask] = useState("");
  function InputHandler(e) {
    setTask(e.target.value);
  }

  function addHandler() {
    if (task) {
      setTaskList([...taskList , task])
    }
  }
  return (
    <div className="w=full flex items-center justify-center gap-x-3">
      <input onChange={InputHandler} type="text" className="border rounded-md p-1" />
      <button onClick={addHandler} className="border rounded-md p-1 px-4 bg-purple-400">Add</button>
    </div>
  );
};

export default Input;