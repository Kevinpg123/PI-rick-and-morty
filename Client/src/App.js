import React, {useState, useEffect} from "react";
import "./App.css";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import axios from "axios";
import { Outlet, Route, Routes, useLocation, Navigate, useNavigate } from "react-router-dom"
import swal from "sweetalert"  ////////////ESTO ES UN WINDOWS ALERT MAS LINDO

import Nav from "./components/Nav";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form";
import Favorites from "./components/Favorites";
import style from './components/styles_css/App.module.css'


function App() {
	
	let [characters, setCharacters] = useState([]);

	const location = useLocation()

	let onSearch = async function (id) {
		// console.log(id);
		characters.forEach(element => {
			console.log(id);
			if (element.id == id) {
				swal("Este personaje ya esta en pantalla");
				id = null;
			}
			
		});
		if (id) {
			parseInt(id);
			try {
				const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
				if (data.name) {
					setCharacters((oldChars) => [...oldChars, data]);
				} else {
					swal('¡No hay personajes con este ID!');
				}
			
			} catch (error) {
				swal("No existe personaje con ese id");
			}
			
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
	
	const login= async (userData) => {
		const { email, password } = userData;
		const URL = 'http://localhost:3001/rickandmorty/login/';

		try {
			const response = await axios(URL + `?email=${email}&password=${password}`)
			const access = response.data;
			const {data} = response
			
				 setAccess(data);
				console.log("MOSTRAME DATAAAA  " + data);
				if (!access) {
					swal({
						text: "Usuario o contraseña incorrecto",
						icon: "error",
						button: "Aceptar"
				}) }
				if (access) {
					swal({
						text: "Acceso concedido",
						icon: "success",
						button: "Aceptar"
				})}
				access && navigate('/home');
			 
		} catch (error) {
			console.log(error.message);
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
				
				</>
			)}

			
			
			<Routes>
					
				<Route path="/" element={<Form login={login} />}></Route>

				
				
							<Route path="/home" element={
								<>
								<button className={style.button} onClick={closeAll}>Cerrar todas las tarjetas</button>
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

