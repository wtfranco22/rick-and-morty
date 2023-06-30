const validateForm = (userData) => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let errors = {};
    for (let key in userData) {
        if (key === 'email') {
            if (userData[key].length > 35) errors.email = 'Debe contener menos de 35 caracteres'
            if (!regexEmail.test(userData[key])) errors.email = 'Debe ser un correo electrónico'
            if (!userData[key]) errors.email = 'Debe ingresar un correo electrónico';
        } else if (key === 'password') {
            if (userData[key].length < 6 || userData[key].length > 10) errors.password = 'Debe tener entre 6 y 10 caracteres'
            if (!/\d/.test(userData[key])) errors.password = 'Debe tener al menos un número';
            if (!userData[key]) errors.password = 'Debe ingresar una contraseña';
        }
    }
    return errors;
}
const validateSearch = (id, characters) => {
    let error = '';
    if (id.trim() !== '') {
        if (!isNaN(id)) {
            if (0 < id && id < 827) {
                if (characters.some((character) => Number(character.id) === Number(id))) error = "already exists!"
            } else {
                error = "character not found!";
            }
        } else {
            error = "Is not a number!";
        }
    } else {
        error = "empty value!";
    }
    return error
}
export { validateForm, validateSearch }