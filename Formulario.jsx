import { useRef, useEffect, useState } from "react";
import "./estilos.css";

const Formulario = () => {
  const inputRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (inputRef.current && textareaRef.current) {
      const width = inputRef.current.offsetWidth;
      textareaRef.current.style.width = `${width}px`;
    }
  }, []);

  // Estado para guardar los valores de los inputs
  const [formData, setFormData] = useState({
    nombre: "",
    numero: "",
    opcion: "1", // Valor inicial de la opción en número
  });

  // Manejador para actualizar el estado al cambiar los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejador para el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4200", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });
      if (response.ok) {
        alert("Formulario enviado correctamente");
      } else {
        alert("Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Hubo un problema al enviar el formulario");
    }
  };

  return (
    <>
      <div className="padree">
        <form onSubmit={handleSubmit} className="form">
          <h1 className="title">Quiero participar en la manifestación</h1>

          <div className="inputContainer">
            <input
              type="text"
              className="input"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              ref={inputRef}
            />
            <label className="label">Ingresa tu nombre</label>
          </div>

          <div className="inputContainer">
            <input
              type="text"
              className="input"
              name="numero"
              value={formData.numero}
              onChange={handleChange}
            />
            <label className="label">Número de teléfono</label>
          </div>

          <div className="inputContainer">
            <select
              name="opcion"
              className="input opciones2"
              value={formData.opcion}
              onChange={handleChange}
            >
              <option value="1">Asistiré a la manifestación</option>
              <option value="2">Quiero compartir en redes sociales</option>
              <option value="3">Quiero ayudar en la organización</option>
            </select>
          </div>

          <div className="centrar">
            <input type="submit" className="submitBtn" value="Enviar" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Formulario;
