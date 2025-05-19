import { useState } from "react";

useState;
export const AgregarTarea = ({agregarTarea}) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit =(event)=>{
    event.preventDefault()
    agregarTarea(inputValue)
    
  }

  return (
    
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingresa Tarea nueva"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    
  );
};
