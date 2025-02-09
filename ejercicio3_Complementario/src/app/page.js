"use client";
import { useState } from "react"; import styles from "./page.module.css"; 

export default function Home() { 
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState(''); 
  const [resultado, setResultado] = useState(null);
  const sumar = () => {
    const resultadoSuma = parseFloat(numero1) + parseFloat(numero2); setResultado(`Resultado de la suma:
   ${resultadoSuma}`);
   };
   const restar = () => {
    const resultadoResta = parseFloat(numero1) - parseFloat(numero2); setResultado(`Resultado de la resta:
   ${resultadoResta}`);
   };
   const multiplicar = () =>{
    const resultadomultiplicacion = parseFloat(numero1) * parseFloat(numero2);
    setResultado(`Resultado de la multiplicacion ${resultadomultiplicacion}`)
   }
   const division = () =>{
    if(parseFloat(numero2)===0){
      setResultado(`Error: No se puede dividir un numero entre cero`);
    }
    else{
      const resultadodivision = parseFloat(numero1) / parseFloat(numero2);
      setResultado(`Resultado de la division ${resultadodivision}`)
    }
   }
   const raiz=()=>{
    if(parseFloat(numero1)<0){
      setResultado(`No se puede calcular la raiz cuadrada de un negativo`);
    }
    else{
      const resultadoRaiz = Math.sqrt(parseFloat(numero1));
      setResultado(`Raíz cuadrada de ${numero1}: ${resultadoRaiz}`);
    }
   }
   const potencia=()=>{
    const resultadoPotencia = Math.pow(parseFloat(numero1), parseFloat(numero2));
    setResultado(`${numero1} elevado a ${numero2}: ${resultadoPotencia}`);
   }
   return ( <main className={styles.main}>
    <div className={styles.calculadora}>
    <div className={styles.numeros}>
    <label className={styles.text}>Número 1:</label> <input className={styles.inputnum} type="number" value={numero1} onChange={(e) => setNumero1(e.target.value)}/>
    </div>
    <div className={styles.numeros}>
    <label className={styles.text} >Número 2:</label> <input className={styles.inputnum} type="number" value={numero2} onChange={(e) => setNumero2(e.target.value)} />
    </div>
    <div>
    <button className={styles.button} onClick={sumar}>Sumar</button>
    <button className={styles.button} onClick={restar}>Restar</button>
    <button className={styles.button} onClick={multiplicar}>Multiplicar</button>
    <button className={styles.button} onClick={division}>Dividir</button>
    <button className={styles.button} onClick={raiz}>Raíz Cuadrada</button>
    <button className={styles.button} onClick={potencia}>Potencia</button>
    </div>
    {resultado && <div className={styles.resultado}>{resultado}</div>}
    </div>
 </main> 
);
}
