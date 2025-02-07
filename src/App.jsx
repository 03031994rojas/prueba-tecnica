import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [multiplicador, setMultiplicador] = useState(1)
  const [tarea, setTarea] = useState({ nombre: "", descripcion: "" })
  const [listaTareas, setListaTareas] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTarea({ ...tarea, [name]: value });
  };

  const miFuncion = () => {
    if (tarea.nombre != "" && tarea.descripcion != "") {
      setListaTareas([...listaTareas, tarea]);
      setTarea({ nombre: "", descripcion: "" });
    }
  }

  return (
    <>
    <h3>Ingresa tu tarea</h3>
      <label htmlFor="descripcion">Descripcion: </label>
      <input type="text" name='descripcion' value={tarea.descripcion} onChange={handleChange} />
      <br />
      <label htmlFor="nombre">Nombre: </label>
      <input type="text" name='nombre' value={tarea.nombre} onChange={handleChange} />
      <br />

      <button onClick={miFuncion}>
        Guardar
      </button>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripcion</th>
          </tr>
        </thead>
        {listaTareas.map(i => (
          <tr>
            <td>{i.nombre}</td>
            <td>{i.descripcion}</td>
          </tr>))}
      </table>
    </>
  )
}

export default App
