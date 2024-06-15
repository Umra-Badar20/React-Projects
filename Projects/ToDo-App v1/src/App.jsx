import "./App.css";
import NameApp from "./Components/NameApp";
import AddTodos from "./Components/AddTodos";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";
function App() {
  return (
    <center>
      <div className="container">
        <NameApp />
        <AddTodos />
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
