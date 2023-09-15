import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { addFav, removeFav } from "../redux/action";


export default function Card(props) {


	const dispatch = useDispatch()
	const myFavorites = useSelector((state) => state.myFavorites)

	useEffect(() => {
		myFavorites.forEach((fav) => {
			if (fav === id) {
				setIsFav(true);
			}
		});
	}, [myFavorites]);

	useEffect(() => {
		myFavorites.forEach((fav) => {
			if (fav === id) {
				setIsFav(true);
			}
		});
	}, []);

	const [isFav, setIsFav] = useState(false)

	const handleFavorite = () => {
		if (isFav) {
			setIsFav(false)
			dispatch(removeFav(id))
		}
		if (isFav === false) {
			setIsFav(true)
			dispatch(addFav(props))
		}

	}

	const { id, name, status, species, gender, origin, image, onClose } = props;

	return (
		<div>
			{
				isFav ? (
					<button onClick={handleFavorite}>❤️</button>
				) : (
					<button onClick={handleFavorite}>🤍</button>
				)
			}



			<button onClick={() => onClose(id)}>X</button>
			<Link to={`/detail/${id}`} id={id} >
				<h2>Name: {name}</h2>
			</Link>

			<h2>Status: {status}</h2>
			<h2>Species: {species}</h2>
			<h2>Gender: {gender}</h2>
			<h2>Origin: {origin.name}</h2>
			<img src={image} alt="imagen" />
		</div>
	);
}
