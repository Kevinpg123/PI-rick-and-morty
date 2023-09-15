import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from './Card'
import axios from 'axios'
import { filterCards, orderCards } from '../redux/action'

export default function Favorites({ characters }) {

    const myFavorites = useSelector((state) => state.myFavorites)
    const optionGender = ["Male", "Female", "Genderless", "unknown"]
    const dispatch = useDispatch()
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }




    return (
        <div>
            <div>
                <select onChange={handleOrder}>

                    <option value="Ascendente" >Ascendente</option>
                    <option value="Descendente" >Descendente</option>

                </select>

                <select onChange={handleFilter}>

                    {optionGender.map((option) => {
                        return <option value="option">{option}</option>
                    })
                    }
                </select>


            </div>
            {
                myFavorites.map((char) => {
                    const { id, name, status, species, gender, origin, image } = char;
                    // console.log(origin.name);
                    return (
                        <div>



                            <div>

                                <Card
                                    id={id}
                                    name={name}
                                    status={status}
                                    species={species}
                                    gender={gender}
                                    origin={origin}
                                    image={image}


                                />
                            </div>
                        </div>
                    );

                })
            }



        </div>
    )
}
