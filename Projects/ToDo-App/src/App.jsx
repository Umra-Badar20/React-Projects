import "./App.css";
import NameApp from "./NameApp";
import AddTodos from "./AddTodos";
import TodoItem1 from "./TodoItem1";
import TodoItem2 from "./TodoItem2";
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
