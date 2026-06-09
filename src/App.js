import { useState } from "react";
import "./App.css";
import Input from "./Components/Input";
import Todos from "./Components/Todos";

function App() {
  const [taskList, setTaskList] = useState([]);

  return (
    <>
      <div>
        <h2 className="flex items-center justify-center mb-2">TO-DO Board </h2>
        <Input taskList={taskList} setTaskList={setTaskList} />
      </div>
      <Todos taskList={taskList} setTaskList={setTaskList} />
    </>
  );
}

export default App;
