import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "./studentSlice";

export default function AddStudent() {
  const dispatch = useDispatch();

  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [alamat, setAlamat] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!nama || !kelas || !alamat) return;

    dispatch(addStudent(nama, kelas, alamat));

    setNama("");
    setKelas("");
    setAlamat("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Tambah Siswa</h2>

      <input
        type="text"
        placeholder="Nama"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
      />

      <input
        type="text"
        placeholder="Kelas"
        value={kelas}
        onChange={(e) => setKelas(e.target.value)}
      />

      <input
        type="text"
        placeholder="Alamat"
        value={alamat}
        onChange={(e) => setAlamat(e.target.value)}
      />

      <button type="submit">Simpan</button>
    </form>
  );
}