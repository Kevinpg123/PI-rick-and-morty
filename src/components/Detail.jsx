import React from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"




export default function Detail() {

    const [character, setCharacter] = useState({});
    const { id } = useParams()

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);







    return (
        <div>

            <Link to="/home">
                <h3>Atras</h3>
            </Link>

            <hr></hr>
            <h2>Nombre: {character.name}</h2>
            <h2>Especie: {character.species}</h2>
            <h2>Genero: {character.gender}</h2>
            <img src={character.image} />




        </div>
    )
}
