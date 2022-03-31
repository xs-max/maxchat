import React, { useState } from 'react'
import classes from './FormInput.module.css';

const FormInput = ({error, inputType, placeholder, value, onChange, ...props }) => {

    const [focus, setFocus] = useState(false)

  return (
    <React.Fragment>
        <input className={`${classes.input}`} onFocus={() => setFocus(true)} type={inputType} placeholder={placeholder} value={value} onChange={onChange} {...props} />
        {error && <p>{error}</p>}
    </React.Fragment>
  )
}

export default FormInput