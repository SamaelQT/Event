import {useState, useEffect} from 'react'
import AuthService from '../../services/auth.service';

const UseForm = (callback, validate) => {

    const [values, setValues] =useState({
        username:'',
        email:'',
        password:'',
        password2:''
    })

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
        if(values.username !=="" && values.email!=="" && values.password!=="" && values.password2!==""){
        AuthService.signup({
            username: values.username,
            email: values.email,
            password: values.password
        }).then(response => {
            console.log(response.data)
        })};
    }

    useEffect(
        () => {
          if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
          }
        },
        [errors]
      );
    return {
        handleChange, values, handleSubmit, errors
    };
}
export default UseForm
