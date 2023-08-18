






export const validation = (errors, setErrors, userData) => {
    setErrors({});
    const { email, password } = userData;


    if (!email) {
        setErrors({ ...errors, email: "Email Vacio" })
    }
    else if (! /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)) {
        setErrors({ ...errors, email: "Email incorrecto" })
    } 
    
    
    if (!password) {
        setErrors({ ...errors, password: "Contraseña Vacio" })
    } else if (!/[0-9]/.test(password)) {
        setErrors({...errors, password: "Debe contener al menos un numero"})
    } else if (password.length < 6 || password.length > 10) {
        setErrors({...errors, password: "Debe tener entre 6 y 10 caracteres"})
    }

   





};