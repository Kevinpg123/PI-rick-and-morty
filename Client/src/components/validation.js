






export const validation = (userData) => {
    let { email, password } = userData;
    
    let errors = {
        email: "",
        password: ""
    }



    if (!email) {
        errors = { ...errors, email: "Email Vacio" }
    }
    else if (! /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        errors = { ...errors, email: "Email incorrecto" }
    } 
    
    
    if (!password) {
        errors = { ...errors, password: "Contraseña Vacio" }
    } else if (!/[0-9]/.test(password)) {
        errors = {...errors, password: "Debe contener al menos un numero"}
    } else if (password.length < 6 || password.length > 10) {
        errors = {...errors, password: "Debe tener entre 6 y 10 caracteres"}
    }

    return errors;





};