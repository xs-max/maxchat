import React from 'react'
import FormInput from '../UI/FormInput';
import classes from './AuthForm.module.css';

const AuthForm = ({form, onChange, onSubmit, formType}) => {

    const loginForm = (<form onSubmit={onSubmit}>
                        <FormInput inputType="email" placeholder="enter Email" value={form.email || ''}  onChange={(e) => onChange('name', e.target.value)} required/>
                        <FormInput inputType="password" placeholder="enter Password" value={form.password || ''}  onChange={(e) => onChange('name', e.target.value)} required/>
                        <button className={classes.form__button}>login</button>
                     </form>);
    const registrationForm = (<form onSubmit={onSubmit}>
                                    <FormInput inputType="text" placeholder="enter Name" value={form.name || ''}  onChange={(e) => onChange('name', e.target.value)} required/>
                                    <FormInput inputType="email" placeholder="enter Email" value={form.email || ''}  onChange={(e) => onChange('email', e.target.value)} required/>
                                    <FormInput inputType="password" placeholder="enter Password" value={form.password || ''}  onChange={(e) => onChange('password', e.target.value)} required/>
                                    <button className={classes.form__button}>Register</button>
                            </form>);

  return (
    <div className={classes.form__container}>
        {formType ? loginForm : registrationForm}
    </div>
  )
}

export default AuthForm