import React from 'react'
import './style.css'
import twitter from '../../images/social/twitter.png'
import facebook from '../../images/social/facebook.png'
import instagram from '../../images/social/instagram.png'

function Footer(props){
    return(
        <footer >
            <a href='https://twitter.com/ArcaneandIron' target="_blank"><img className='socialLogo' src={twitter} alt='twitter logo'></img></a>
            <a href='https://www.facebook.com/ArcaneandIron/' target="_blank"><img className='socialLogo' src={facebook} alt='facebook logo'></img></a>
            <a href='https://www.instagram.com/arcaneandiron/' target="_blank"><img className='socialLogo' src={instagram} alt='instagram logo'></img></a>
      </footer>
    )
}

export default Footer