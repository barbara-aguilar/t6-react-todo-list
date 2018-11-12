import React from 'react'
import './button.css'

function Button (props){
    let classes = 'button'

    if(props.disable){
        classes += ' button--disable'
    }
    return(
        <button disable={props.disable} className={classes}>
        {props.children}
        </button>
    )
    }
       

export default Button