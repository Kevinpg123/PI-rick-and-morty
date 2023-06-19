import React, { useState } from "react";


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
         <input type='search' placeholder="insert id" onChange={handleChange} value={id} />
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}

/////input    onChange={handleChange} value={id} placeholder="insert id"
//////mirar la funcion props.onSearch;???

