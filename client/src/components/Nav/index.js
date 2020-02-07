import React, { Component } from 'react'
import { Link, animateScroll } from "react-scroll";
import './style.css'

class Nav extends Component {
    render() {
        return (
            <nav className='transparent' id='myNav'>
                <div className='container'>
                    <div className='row'>
                        <ul>
                            <div className='col s4'>
                                <li className='navItem' id='nav1'>
                                    <Link
                                        // activeClass="active"
                                        to="events"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Upcoming Events</Link>
                                </li>
                            </div>
                            <div className='col s4'>
                                <div className='row'>
                                    <div className='col s4 offset-s4'>
                                        <li className='navItem' id='nav2'>
                                        <Link
                                        // activeClass="active"
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        About</Link>
                                            </li>
                                    </div>
                                </div>
                            </div>
                            <div className='col s4'>
                                <li className='navItem' id='nav3'>
                                <Link
                                        // activeClass="active"
                                        to="playtest"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                    >
                                        Playtest</Link></li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav