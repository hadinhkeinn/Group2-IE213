import React from "react";
import styles from "./ValueInput.module.css";

// const ValueInput = ({ fieldName, fieldValue, onValueChange }) => {
//   const handleValueChange = (e) => {
//     onValueChange(e);
//   };
//   return (
//     <div className={styles.container}>
//       <p>{fieldName}</p>
//       <input
//         className={styles.fieldInput}
//         value={fieldValue}
//         onChange={handleValueChange}
//       />
//     </div>
//   );
// };





const ValueInput = ({ fieldName, fieldValue, onValueChange, name }) => {
  const handleValueChange = (e) => {
    onValueChange({ target: { name, value: e.target.value } });
  };

  return (
    <div className={styles.container}>
      <p>{fieldName}</p>
      <input
        className={styles.fieldInput}
        value={fieldValue}
        onChange={handleValueChange}
        name={name} // Pass the name attribute for identification
      />
    </div>
  );
};

export default ValueInput;
