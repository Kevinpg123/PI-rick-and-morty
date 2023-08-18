import React, {useState, useEffect} from "react";
import "./App.css";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import axios from "axios";
import {Outlet, Route, Routes, useLocation, Navigate, useNavigate} from "react-router-dom"

import Nav from "./components/Nav";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form";
import Favorites from "./components/Favorites";


function App() {
	
	let [characters, setCharacters] = useState([]);

	const location = useLocation()

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
		// console.log(filtrado);
		setCharacters(filtrado);
	 }

	const closeAll = () => {
		setCharacters([])
	}
	
	const navigate = useNavigate()
	const [access, setAccess] = useState(false);
	const EMAIL = "osmarkevinp@gmail.com";
	const PASSWORD = "Rick123";
	
	const login = (dataUser) => {
		if (dataUser.password === PASSWORD && dataUser.email === EMAIL) {
			setAccess(true);
			alert("Login Exitoso")
			navigate('/home')
		}
	}
	
	useEffect(() => {
		!access && navigate('/');
	},[access]);
	
	return (
		<div className="App">
			{location.pathname !== "/" && (
				<>
				<Nav onSearch={onSearch} />
				<hr></hr>
				</>
			)}

			
			
			<Routes>
					
				<Route path="/" element={<Form login={login} />}></Route>

				
				
							<Route path="/home" element={
								<>
								<button onClick={closeAll}>Cerrar todas las tarjetas</button>
								<Cards characters={characters} onClose={onClose} />
								</>
							}></Route>

							<Route path="/about" element={<About />}></Route>

							<Route path="/detail/:id" element={<Detail/>}></Route>
							
				<Route path="/favorites" element={<Favorites characters={characters} />}></Route>

					</Routes>
			
			
		
		</div>
	);
}
export default App;

///cuando se usa axios, primero importar
///import axios form "axios"
/////npm install axios
////axios usar en onSearch
////tambien hacer la funcion onClose(id)=>{characters.filter((ch)=> ch.id!== id )  setCharacter(newCharacters)}

