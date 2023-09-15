import React, { useState } from 'react'
import { validation } from './validation';

export default function Form(props) {
    const { login } = props;

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })


    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({ ...userData, [property]: value })
        setErrors(validation({ ...userData, [property]: value }))

    }

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    const submitHandler = (event) => {
        event.preventDefault();
        login(userData);

    }


    return (
        <div>
            <form onSubmit={submitHandler}>

                <label htmlFor='email'>Email</label>
                <input name="email" type='email' value={userData.email} onChange={handleChange}></input>
                {errors.email && <label>{errors.email}</label>}
                <br></br>
                <br></br>
                <label htmlFor='password'>Password</label>
                <input name="password" type="password" value={userData.password} onChange={handleChange}></input>
                {errors.password && <label>{errors.password}</label>}
                <br></br>
                <button type='submit'>Submit</button>

            </form>
        </div>
    )
}
