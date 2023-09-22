import React, { useState } from 'react'
import { validation } from './validation';
import style from './styles_css/Form.module.css'



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

        <div className={style.divGrande}>
            <h1 className={style.tituloh1} >Rick and Morty</h1>
            <form onSubmit={submitHandler} className={style.form}>
                <h2 className={style.h2Form}>Bienvenido</h2>

                {/* <label htmlFor='email'>Email</label> */}
                <input className={style.inputs} name="email" type='email' placeholder='Email' value={userData.email} onChange={handleChange}></input>

                <div className={style.errorContainer}>
                    {/* {errors.email && <label className={style.errorMessage}>{errors.email}</label>} */}
                    <label className={style.errorMessage}>{errors.email}</label>

                </div>


                {/* <label htmlFor='password'>Password</label> */}
                <input className={style.inputs} name="password" type="password" placeholder='Password' value={userData.password} onChange={handleChange}></input>

                <div className={style.errorContainer}>
                    {/* {errors.password && <label className={style.errorMessage}>{errors.password}</label>} */}
                    <label className={style.errorMessage}>{errors.password}</label>

                </div>

                <button className={style.button} type='submit'>Iniciar Sesión</button>

            </form>
        </div>

    )
}
