import React, { Component } from 'react'
import { Link, animateScroll } from "react-scroll";
import './style.css'
import Social from '../Social'

class Nav extends Component {
    render() {
        return (
            <div>
                <div className='navbar-fixed'>
                <nav className='grey lighten-4' id='myNav'>
                    <div className='nav-wrapper'>
                        <div className='container'>
                            <a href='#' data-target='mobile-demo' className='sidenav-trigger'><i className='material-icons'>menu</i></a>
                            <div className='row'>
                                <ul className='center hide-on-med-and-down'>
                                    <div className='col s2'>
                                        <div className='row'>
                                            <div className='col s4'>
                                                <li className='navItem' id='nav2'>
                                                    <Link
                                                        activeClass="active"
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
                                    <div className='col s3'>
                                        <li className='navItem' id='nav1'>
                                            <Link
                                                activeClass="active"
                                                to="events"
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500}
                                            >
                                                Upcoming Events</Link>
                                        </li>
                                    </div>
                                    <div className='col s2'>
                                        <li className='navItem' id='nav3'>
                                            <Link
                                                activeClass="active"
                                                to="playtest"
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500}
                                            >
                                                Playtest</Link></li>
                                    </div>
                                    <div className='col s2'>
                                        <li className='navItem' id='nav4'>
                                            <Link
                                                activeClass="active"
                                                to="contact"
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500}
                                            >
                                                Contact</Link></li>
                                    </div>
                                </ul>
                                <Social socialLoc='mobileNav'></Social>
                            </div>
                        </div>
                    </div>
                </nav>
                </div>
                <ul className='sidenav' id='mobile-demo'>
                    <li className='navMobile'>
                        <Link
                            activeClass="active"
                            to="events"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Upcoming Events</Link>
                    </li>
                    <li className='navMobile'>
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            About</Link>
                    </li>
                    <li className='navMobile'>
                        <Link
                            activeClass="active"
                            to="playtest"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Playtest</Link></li>
                    <li className='navMobile'>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Contact</Link></li>
                </ul>
            </div>
        )
    }
}

export default Nav