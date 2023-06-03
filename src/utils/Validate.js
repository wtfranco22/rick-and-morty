const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*\d).{5,11}$/;
export default function Validate(userData) {
    let errors = {};
    for (let key in userData) {
        if (key === 'email') {
            if (userData[key].length > 35) errors.email = 'Debe contener menos de 35 caracteres'
            if (!regexEmail.test(userData[key])) errors.email = 'Debe ser un correo electrónico'
            if (!userData[key]) errors.email = 'Debe ingresar un correo electrónico';
        } else if (key === 'password') {
            if (!regexPassword.test(userData[key])) errors.password = 'Debe tener al menos un número y de 6 a 10 caracteres';
            if (!userData[key]) errors.password = 'Debe ingresar una contraseña';
        }
    }
    return errors;
}