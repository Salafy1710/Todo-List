import AddStudent from "./AddStudent";
import ListStudent from "./ListStudent";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <h1 className="title">App Manajemen murid</h1>
      <p className="subtitle">
        Tulis nama murid, kelas, dan alamat lalu klik tombol simpan untuk menambahkan murid ke dalam daftar.
      </p>

      <div className="card">
        <AddStudent />
      </div>

      <div className="card">
        <ListStudent />
      </div>
    </div>
  );
}