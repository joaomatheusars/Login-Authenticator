export default function login_validate(values){
    const erros = {};

    if (!values.email){
        erros.email='Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        erros.email = 'Invalid email address';
    }

    // validation password
    if(!values.password){
        erros.password='Required';
    } else if (values.password.length < 8 || values.password.length > 20){
        erros.password='Must be greater then 8 and les then 20 characters long.';
    } else if(values.password.includes(" ")){
        erros.password = 'Invalid Password';
    }

    return erros
}

export function registerValidate(values){
    const erros = {};

    if (!values.email){
        erros.email='Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        erros.email = 'Invalid email address';
    }

    // validation password
    if(!values.password){
        erros.password='Required';
    } else if (values.password.length < 8 || values.password.length > 20){
        erros.password='Must be greater then 8 and les then 20 characters long.';
    } else if(values.password.includes(" ")){
        erros.password = 'Invalid Password';
    }

    if(!values.cpassword){
        erros.cpassword='Required';
    }else if(values.password !== values.cpassword){
        erros.cpassword='Password do not match'
    }else if(values.cpassword.includes(" ")){
        erros.cpassword='Invalid Confirm Password'
    }

    return erros
}