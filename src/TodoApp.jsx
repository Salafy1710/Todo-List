import { useDispatch, useSelector } from "react-redux";
import { tambahTugas, hapusSemua } from "./todoslice";

export default function TodoApp() {
  const dispatch = useDispatch();
  const listTugas = useSelector((state) => state.todo.listTugas);

  return (
    <div>
      <h2>Todo List</h2>

      <ul>
        {listTugas.map((tugas, index) => (
          <li key={index}>{tugas}</li>
        ))}
      </ul>

      <button onClick={() => dispatch(tambahTugas("Belajar React"))}>
        Tambah Tugas Belajar
      </button>

      <button onClick={() => dispatch(hapusSemua())}>
        Bersihkan Semua
      </button>
    </div>
  );
}