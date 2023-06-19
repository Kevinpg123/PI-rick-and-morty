import React, {useState, useEffect} from "react";
import "./App.css";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import axios from "axios";

import Nav from "./components/Nav";


function App() {
	
	let [characters, setCharacters] = useState([]);

	let onSearch = function (id) {
		// console.log(id);
		characters.forEach(element => {
			console.log(id);
			if (element.id == id) {
				window.alert("Este personaje ya esta en pantalla");
				id = null;
			}
			
		});
		if (id) {
			parseInt(id);
			axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
				if (data.name) {
					setCharacters((oldChars) => [...oldChars, data]);
				} else {
					window.alert('¡No hay personajes con este ID!');
				}
			});
		}
	 }
	
	let onClose = (id) => {
		parseInt(id);
		
		let filtrado = characters.filter(el=>el.id!==id)
		console.log(filtrado);
		setCharacters(filtrado);
	 }

	
	 
	
	
	
	return (
		<div className="App">
			<Nav onSearch={onSearch} />
			<Cards characters={characters} onClose={onClose} />
			{/* <button onClick={onSearch}>search</button> */}
			
		
		</div>
	);
}
export default App;

///cuando se usa axios, primero importar
///import axios form "axios"
/////npm install axios
////axios usar en onSearch
////tambien hacer la funcion onClose(id)=>{characters.filter((ch)=> ch.id!== id )  setCharacter(newCharacters)}