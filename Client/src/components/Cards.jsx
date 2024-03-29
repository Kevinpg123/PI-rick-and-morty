import React from "react";
import Card from "./Card";
import style from "./styles_css/Cards.module.css"

export default function Cards({ characters, onClose }) {
	// const { id, name, status, species, gender, origin, image } = props.characters;
	/////mientras haya solo una card

	// console.log("esto es cards---->", characters);
	const showButton = true;
	return (
		<div className={style.bigDiv}>

			{characters.map((element) => {
				const { id, name, status, species, gender, origin, image } = element;
				// console.log(origin.name);
				return (
					<div>

						<Card
							id={id}
							name={name}
							status={status}
							species={species}
							gender={gender}
							origin={origin}
							image={image}
							onClose={onClose}
							showButton={showButton}
						/>
					</div>
				);

			})}



		</div>



	);
}
