import React, { useContext, useState } from 'react'
import AuthForm from '../../components/AuthForm'
import registerUser from '../../context/actions/Auth/registerUser';
import { AuthContext } from '../../context/AuthContext';
import classes from './Auth.module.css'

 const Auth = () => {

    const [form, setForm] = useState({});
    const [formLogin, setFormLogin] = useState(true)

    const context = useContext(AuthContext);

    const onChange = (key, value) => {
        setForm({...form, [key]: value});
    }

    const changeFormTypeHandle = () => {
        setFormLogin(!formLogin)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (formLogin == true) {
            alert("login")
        }else {
            registerUser(form)(context.authDispatch);
        }
        
    }

  return (
    <div className={classes.auth__container} >
        <div className={classes.form__switch}>
            <div className={`${classes.switcher} ${formLogin == true ? classes.active : ''}`} onClick={changeFormTypeHandle}>Login</div>
            <div className={`${classes.switcher} ${!formLogin == true ? classes.active : ''}`} onClick={changeFormTypeHandle}>Register</div>
        </div>
        <AuthForm onChange={onChange} onSubmit={onSubmit} form={form} formType={formLogin} />
    </div>
  )
}

export default Auth