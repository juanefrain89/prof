 import { useState } from "react";
import "./Login.css";
import axios from "axios";

const Login = () => {
    const [estado, setEstado] = useState({
        correo: "",
        contraseña: ""
    });
    const[x ,xx] =useState ()
    
    const handleChange = (e) => {
        setEstado({
            ...estado,
            [e.target.name]: e.target.value
        });
        console.log(estado);
    };

  
    const handleSubmit = () => {
        axios.post("http://localhost:4200/" , estado)
         .then((res) => {
            if (res.data.length > 0) {
                const correoUsuario = res.data[0].correo;
                console.log("Correo del usuario:", correoUsuario);
                localStorage.setItem("correo", correoUsuario);
                window.location.href  = "http://localhost:3000/inicio"
            } else {
                console.log("Usuario no encontrado");
                xx("Usuario no encontrado")
            }
         })                  
    };

    return (
        <div className="padre">
            <h1>Login</h1>
            <p className="sd">{x}</p>
            <label htmlFor="correo">Introduce correo</label>
            <input name="correo" type="text" onChange={handleChange} />
            <label htmlFor="contraseña">Contraseña</label>
            <input name="contraseña" onChange={handleChange} type="password" />
            <button onClick={handleSubmit}>Enviar</button>
        </div>
    );
};

export default Login;
 