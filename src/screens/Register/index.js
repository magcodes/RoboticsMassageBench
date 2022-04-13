import React from "react";
import RegisterComponent from "../../components/SignUp";

const Register = () => {

    return (
        <RegisterComponent/>
    );
 }
      
export default Register;
  
    // const [errors, setErrors] = useState({});
    
        // if (value !== '') {
        //   if (name === 'password') {
        //     if (value.length < 6) {
        //       setErrors(prev => {
        //         return {...prev, [name]: 'This field needs min 6 characters'};
        //       });
        //     } else {
        //       setErrors(prev => {
        //         return {...prev, [name]: null};
        //       });
        //     }
        //   } else {
        //     setErrors(prev => {
        //       return {...prev, [name]: null};
        //     });
        //   }
        // } else {
        //   setErrors(prev => {
        //     return {...prev, [name]: 'This field is required'};
        //   });
        // }
    // };

    // const onSubmit = () => {
    //     if (!form.email) {
    //       setErrors((prev) => {
    //         return {...prev, email: 'Please add an email'};
    //       });
    //     }
    //     if (!form.password) {
    //       setErrors((prev) => {
    //         return {...prev, password: 'Please add a password'};
    //       });
    //     }
    //     if (
    //       Object.values(form).length === 5 &&
    //       Object.values(form).every(item => item.trim().length > 0) &&
    //       Object.values(errors).every(item => !item)
    //     ) {
    //   };

