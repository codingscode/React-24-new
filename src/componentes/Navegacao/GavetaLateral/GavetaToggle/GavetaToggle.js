import React from 'react'
import classes from './GavetaToggle.css'

const gavetaToggle = (props) => (
    <div onClick={props.clicado} className={classes.GavetaToggle}>
         <div></div>
         <div></div>
         <div></div>
    </div>
)

export default gavetaToggle;
