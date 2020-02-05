import React from 'react'
import logo from '../../images/logo.png'
import './style.css'

function Logo(props) {
    return (
        <div>
            <img src={logo} alt='Arcane and Iron logo'></img>
        </div>
    )
}

export default Logo