import { useState } from "react";

export default function ListaTareas() {
  // Estado para almacenar la lista de tareas
  const [tareas, setTareas] = useState([]);
  
  // Estado para manejar los valores del formulario
  const [formData, setFormData] = useState({ nombre: "", descripcion: "" });

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Maneja el envío del formulario y agrega una nueva tarea
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nombre.trim() && formData.descripcion.trim()) {
      setTareas([...tareas, { ...formData, completada: false }]);
      setFormData({ nombre: "", descripcion: "" }); // Resetea el formulario
    }
  };

  // Marca una tarea como completada o la desmarca
  const marcarCompleta = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  // Elimina una tarea de la lista
  const eliminarTarea = (index) => {
    setTareas(tareas.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Agregar Tarea</button>
      </form>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index} style={{ textDecoration: tarea.completada ? "line-through" : "none" }}>
            <span>{tarea.nombre}: {tarea.descripcion}</span>
            {/* Botón para marcar como completada o desmarcar */}
            <button onClick={() => marcarCompleta(index)}>
              {tarea.completada ? "Desmarcar" : "Completar"}
            </button>
            {/* Botón para eliminar la tarea */}
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}