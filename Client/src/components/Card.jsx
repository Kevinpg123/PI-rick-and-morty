import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { addFav, removeFav } from "../redux/action";
import style from './styles_css/Card.module.css'


export default function Card(props) {


	const { id, name, status, species, gender, origin, image, onClose, showButton } = props;
	const dispatch = useDispatch()
	const myFavorites = useSelector((state) => state.myFavorites)
	const [isFav, setIsFav] = useState(false)

	myFavorites.forEach((char) => { console.log(char) })
	useEffect(() => {
		myFavorites.forEach((fav) => {
			if (fav.id === id) {
				setIsFav(true);
			}
		});
	}, [myFavorites]);

	// useEffect(() => {
	// 	myFavorites.forEach((fav) => {
	// 		if (fav === id) {
	// 			setIsFav(true);
	// 		}
	// 	});
	// }, []);


	const handleFavorite = () => {
		if (isFav) {
			setIsFav(false)
			dispatch(removeFav(id))
		}
		if (isFav === false) {
			setIsFav(true)
			dispatch(addFav({ id, name, status, species, gender, origin, image }))
		}

	}


	return (
		<div className={style.divBig}>

			{
				isFav ? (
					<button onClick={handleFavorite}>❤️</button>
				) : (
					<button onClick={handleFavorite}>🤍</button>
				)
			}

			{
				showButton ? (
					<button onClick={() => onClose(id)}>X</button>
				) : (
					null
				)
			}






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
