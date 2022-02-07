import React from "react";
import styles from "./css/Button.module.css";

const Button = (props) => {
  const { className, children, type, onClick } = props;
  const classes = `${styles.button} ${className}`;

  return (
    <button type={type || "button"} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
