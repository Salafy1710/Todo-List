import AddStudent from "./AddStudent";
import ListStudent from "./ListStudent";
import TodoApp from "./TodoApp";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <h1 className="title">App Manajemen</h1>

      <div className="card">
        <h2>Manajemen Murid</h2>
        <AddStudent />
        <ListStudent />
      </div>

      <div className="card">
        <TodoApp />
      </div>
    </div>
  );
}