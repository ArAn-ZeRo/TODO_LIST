function Todo({value , handdleDelte , index}) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow-md border border-gray-100">
      <p className="text-gray-700 font-medium">{value}</p>

      <button onClick={()=>handdleDelte(index)} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
        Delete
      </button>
    </div>
  );
}

export default Todo;
