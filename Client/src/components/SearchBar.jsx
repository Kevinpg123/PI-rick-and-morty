import React, { useState } from "react";
import style from "./styles_css/SearchBar.module.css"


export default function SearchBar({ onSearch }) {
   // console.log(props.onSearch);
   // const [id, setId] = useState([])
   // const handleChange = (event) => {
   //    // console.log("event----->" + event.target.value);
   //    // setId(event.currentTarget.value)
   // }

   let [id, setId] = useState("")

   let handleChange = (id) => {
      // console.log("esta es la id que se ingresa -->", id.target.value);
      setId(id.target.value)
   }

   return (

      <div>
         <input className={style.input} type='search' placeholder="insert id" onChange={handleChange} value={id} />
         <button className={style.button} onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}

/////input    onChange={handleChange} value={id} placeholder="insert id"
//////mirar la funcion props.onSearch;???

