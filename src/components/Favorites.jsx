import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'
import axios from 'axios'

export default function Favorites({ characters }) {

    const myFavorites = useSelector((state) => state.myFavorites)




    return (
        <div>
            {
                myFavorites.map((char) => {
                    const { id, name, status, species, gender, origin, image } = char;
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


                            />
                        </div>
                    );

                })
            }



        </div>
    )
}
