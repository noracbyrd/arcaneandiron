import React, { Component } from 'react'
import './style.css'

class Nav extends Component {
    render() {
        return (
            <nav className='transparent' id='myNav'>
                <div className='container'>
                    <div className='row'>
                        <ul>
                            <div className='col s4'>
                                <li className='navItem' id='nav1'>About</li>
                            </div>
                            <div className='col s4'>
                                <div className='row'>
                                    <div className='col s4 offset-s4'>
                                    <li className='navItem' id='nav2'>Stuff</li>
                                    </div>
                                </div>
                            </div>
                            <div className='col s4'>
                                <li className='navItem' id='nav3'>Other Stuff</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav