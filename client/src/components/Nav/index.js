import React, { Component } from 'react'
import { Link, animateScroll } from "react-scroll";
import './style.css'

class Nav extends Component {
    render() {
        return (
            <div>
                <nav className='transparent' id='myNav'>
                    <div className='nav-wrapper'>
                        <div className='container'>
                            <a href='#' data-target='mobile-demo' className='sidenav-trigger'><i className='material-icons'>Menu</i></a>
                            <div className='row'>
                                <ul className='center hide-on-med-and-down'>
                                    <div className='col s3'>
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
                                    <div className='col s3'>
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
                                    <div className='col s3'>
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
                                    <div className='col s3'>
                                        <li className='navItem' id='nav4'>
                                            <Link
                                                // activeClass="active"
                                                to="contact"
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500}
                                            >
                                                Contact</Link></li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <ul className='sidenav' id='mobile-demo'>
                    <li id='nav1mobile'>
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
                    <li id='nav2mobile'>
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
                    <li id='nav3mobile'>
                        <Link
                            // activeClass="active"
                            to="playtest"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Playtest</Link></li>
                    <li id='nav4mobile'>
                        <Link
                            // activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            Contact</Link></li>
                </ul>
            </div>
            //     <div>
            //     <nav>
            //     <div class="nav-wrapper">
            //       <a href="#!" class="brand-logo">Logo</a>
            //       <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            //       <ul class="right hide-on-med-and-down">
            //         <li><a href="sass.html">Sass</a></li>
            //         <li><a href="badges.html">Components</a></li>
            //         <li><a href="collapsible.html">Javascript</a></li>
            //         <li><a href="mobile.html">Mobile</a></li>
            //       </ul>
            //     </div>
            //   </nav>

            //   <ul class="sidenav" id="mobile-demo">
            //     <li><a href="sass.html">Sass</a></li>
            //     <li><a href="badges.html">Components</a></li>
            //     <li><a href="collapsible.html">Javascript</a></li>
            //     <li><a href="mobile.html">Mobile</a></li>
            //   </ul>

            //   </div>
        )
    }
}

export default Nav