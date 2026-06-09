import Todo from "./Todo";

function Todos({ taskList, setTaskList }) {
  function handdleDelte(index) {
    let newTaskList = taskList.filter((_, i) => i !== index);

    setTaskList(newTaskList);
  }
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto space-y-4">
        {taskList.map((value, index) => (
          <Todo key={index} index={index}  value={value} handdleDelte={handdleDelte} />
        ))}
      </div>
    </div>
  );
}

export default Todos;
