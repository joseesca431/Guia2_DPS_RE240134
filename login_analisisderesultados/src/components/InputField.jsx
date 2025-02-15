import React from "react";
import styles from '@/app/page.module.css';
const InputField = ({ label, type, value, onChange }) => {
    return (
      <div>
        <label>{label}</label>
        <input
          className={styles.input}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  };
  
  export default InputField;
