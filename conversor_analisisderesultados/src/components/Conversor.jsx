import React, {useState} from "react";
import styles from '@/app/page.module.css';

const Conversion = () => {
    const [temperatura, setTemperatura] = useState('');
    const [convertirTemp, setConvertirTemp] = useState('');
    const [escala, setEscala] = useState('C');

    const handleInputChange = (event) => {
        setTemperatura(event.target.value);
    };

    const convertToFahrenheit = () => {
        if (escala === 'C') {
            setConvertirTemp((temperatura * 9 / 5) + 32);
        } else {
            setConvertirTemp((temperatura - 32) * 5 / 9);
        }
    };

    const handleScaleChange = (newScale) => {
        setEscala(newScale);
        setConvertirTemp('');
    };

    return (
        <div className={styles.conversionContainer}>
            <h2 className={styles.title}>Conversor de Temperatura</h2>
            <div className={styles.inputContainer}>
                <label>
                    Ingrese la temperatura:
                    <input 
                        type="number" 
                        value={temperatura} 
                        onChange={handleInputChange} 
                        placeholder="Temperatura"
                        className={styles.inputField}
                    />
                </label>
            </div>
            <div>
                <button onClick={() => handleScaleChange('C')} className={`${styles.button} ${styles.celsiusButton}`}>Celsius</button>
                <button onClick={() => handleScaleChange('F')} className={`${styles.button} ${styles.fahrenheitButton}`}>Fahrenheit</button>
            </div>
            <div>
                <button onClick={convertToFahrenheit} className={`${styles.button} ${styles.convertButton}`}>Convertir</button>
            </div>
            <div>
                {convertirTemp && (
                    <p className={styles.result}>Temperatura Convertida: {convertirTemp}° {escala === 'C' ? 'Fahrenheit' : 'Celsius'}</p>
                )}
            </div>
        </div>
    );
};

export default Conversion;
