import React, { useState } from "react";



export default function Card(props) {




	// console.log(props.onClose);
	const { id, name, status, species, gender, origin, image, onClose } = props;
	// console.log("card console logggg  "+props.species);
	// let [id, setId] = useState(key)
	// console.log(id);
	return (
		<div>
			<button onClick={() => onClose(id)}>X</button>
			<h2>Name: {name}</h2>
			<h2>Status: {status}</h2>
			<h2>Species: {species}</h2>
			<h2>Gender: {gender}</h2>
			<h2>Origin: {origin.name}</h2>
			<img src={image} alt="imagen" />
		</div>
	);
}
