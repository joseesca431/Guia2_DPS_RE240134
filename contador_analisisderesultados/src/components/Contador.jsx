"use client"
import React, { useState } from 'react';
import styles from "../app/page.module.css"
const Contar = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="contador-card">
      <h1>Contador: {count}</h1>
      <div className="buttons-container">
        <button className={styles.btn_contar} onClick={() => setCount(count + 1)}>Incrementar</button>
        <button className={styles.btn_decremento} onClick={() => setCount(count - 1)}>Decrementar</button>
      </div>
    </div>
  );
};

export default Contar;
