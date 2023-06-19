import React from "react";
import Card from "./Card";

export default function Cards({ characters, onClose }) {
	// const { id, name, status, species, gender, origin, image } = props.characters;
	/////mientras haya solo una card

	// console.log("esto es cards---->", characters);

	return (
		<div>

			{characters.map((element) => {
				const { id, name, status, species, gender, origin, image } = element;
				// console.log(origin.name);
				return (
					<Card
						id={id}
						name={name}
						status={status}
						species={species}
						gender={gender}
						origin={origin}
						image={image}
						onClose={onClose}
					/>
				);

			})}



		</div>



	);
}
