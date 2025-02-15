import React, { useState } from "react";
import InputField from './InputField';
import styles from '@/app/page.module.css';

const LoginForm = ({ setIsAuthenticated }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = () => {
      if (username === "admin" && password === "1234") {
        setIsAuthenticated(true);
      } else {
        alert("Credenciales incorrectas");
      }
    };
  
    return (
      <div>
        <h2 className={styles.title}>Iniciar Sesión</h2>
        <div className={styles.inputGroup}>
          <InputField label="Usuario" type="text" value={username} onChange={setUsername} />
        </div>
        <div className={styles.inputGroup}>
          <InputField label="Contraseña" type="password" value={password} onChange={setPassword} />
        </div>
        <button className={styles.button} onClick={handleLogin}>Ingresar</button>
      </div>
    );
  };
  
  export default LoginForm;