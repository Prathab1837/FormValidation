export default function Validate(values){
    let errors = {};
    
    if (!values.username.trim()) {
        errors.username = "*Username required";
    }

    if (!values.email.trim()) {
        errors.email = "*Email required";
    } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)) {
        errors.email = "*Email address is invalid";
    }

    if (!values.password.trim()) {
        errors.password = "*Password is required";
    } else if (values.password.length<6) {
        errors.password = "*Need to be 6 or more characters";
    }

    if (!values.password2.trim()) {
        errors.password2 = "*Password is required";
    } else if (values.password2 !== values.password) {
        errors.password2 = "*Password do not match";
    }
     
    return errors;
}
