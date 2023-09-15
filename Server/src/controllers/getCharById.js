const axios = require("axios")
const express = require('express')
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
    const { id } = req.params;
    // if (id < 1 || id > 826) { return res.status(404).json({message: "Not Found"}) }
    try {
        const response = await axios(URL + id)
        
            if (response.data) {
                const { status, name, species, origin, image, gender } = response.data;
                const char = { id, status, name, species, origin, image, gender };
                console.log(char);
                return res.status(200).json(char);
            }
            // else { return res.status(404).json({ message: "Not Found" }) }
        
        // .catch((error) => {
        //     console.log(error);
        //     return res.status(error.response.status).json({ message: error.message })
        // } )
        
    } catch (error) {
        return res.status(error.response.status).json({ message: error.message })
    }
    
}

module.exports = getCharById;