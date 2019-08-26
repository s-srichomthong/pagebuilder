import React, { useState} from 'react';
import '../zcss/App.css';
import '../zcss/SideBar.css'
import Welcome from "./Welcome";
import CopyRight from "./control/CopyRight";
import logo from "../zasset/logo.svg";
import Code from "../zasset/code.png";
import timeline from "../zasset/timeline.png";
import coding from "../zasset/coding.png";
import hobby from "../zasset/hobby.png";
import geek from "../zasset/geek.png";
import Home from "./Home";
import TimeLine from "./TimeLine";
import Experience from "./Experience";
import AboutMe from "./AboutMe";
import Hobby from "./Hobby";

import {Nav as NavLeft, NavItem as NavItemLeft} from "@trendmicro/react-sidenav";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import {Path} from "../utils/Constant";

function App() {
    const [page, setPage] = useState(Welcome());
    const [current, setCurrent] = useState(Path.welcome);
    const [isOpen, setToggle] = useState(false);

    function resetPage(selectedPath) {
        console.log(selectedPath);
        setCurrent(selectedPath);
        if (selectedPath.includes(Path.home)){
            setPage(Home());
        } else if (selectedPath.includes(Path.timeline)){
            setPage(TimeLine());
        } else if (selectedPath.includes(Path.experience)){
            setPage(Experience);
        } else if (selectedPath.includes(Path.hobby)){
            setPage(Hobby);
        }else if (selectedPath.includes(Path.about)){
            setPage(AboutMe);
        }else if (selectedPath.includes(Path.login)){
            setPage(Welcome);
        }else {
            setPage(Welcome);
        }
    }

    function isActive(self) { return current === self }

    return (
        <div className="App">
            <div className="topBar">
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">JAYLERS INFINITE</NavbarBrand>
                    <NavbarToggler onClick={() => setToggle(!isOpen)} />
                    <Collapse isOpen={isOpen} navbar>

                        <Nav className="ml-auto" navbar>
                            <br/>
                            <NavLink className="headerBarItemActive"
                                     onClick={ () => resetPage(Path.home)}
                                     active={isActive(Path.home)}>
                                <Navbar className="headerBarItem">
                                    <NavItem>
                                        Home
                                    </NavItem>
                                </Navbar>
                            </NavLink>

                            <NavLink onClick={ () => resetPage(Path.timeline)}
                                     active={isActive(Path.timeline)}>
                                <Navbar className="headerBarItem">
                                    <NavItem>
                                        Timeline
                                    </NavItem>
                                </Navbar>
                            </NavLink>

                            <NavLink onClick={ () => resetPage(Path.experience)}
                                     active={isActive(Path.experience)}>
                                <Navbar className="headerBarItem">
                                    <NavItem>
                                        Experience
                                    </NavItem>
                                </Navbar>
                            </NavLink>

                            <NavLink onClick={ () => resetPage(Path.hobby)}
                                     active={isActive(Path.hobby)}>
                                <Navbar className="headerBarItem">
                                    <NavItem>
                                        Hobby
                                    </NavItem>
                                </Navbar>
                            </NavLink>

                            <NavLink onClick={ () => resetPage(Path.about)}
                                     active={isActive(Path.about)}>
                                <Navbar className="headerBarItem">
                                    <NavItem>
                                        About me
                                    </NavItem>
                                </Navbar>
                            </NavLink>

                            <NavLink href="/login">
                                <Navbar className="headerBarItem">
                                    <NavItem>
                                        Login
                                    </NavItem>
                                </Navbar>
                            </NavLink>

                            <Navbar>
                                <NavItem className="copyRightTop">
                                    {CopyRight()}
                                </NavItem>
                            </Navbar>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>

            <div className="mainBar">
                <div className="menuBar">
                    <NavLeft>
                        <NavbarBrand>
                            <img src={logo} className="App-brand" alt="logo" />
                        </NavbarBrand>
                        <br/>
                        <Navbar className="menuItem">
                            <NavLink onClick={ () => resetPage(Path.welcome)}
                                     active={isActive(Path.welcome)}>
                                <NavItemLeft eventKey="Home">
                                    <div className='navMenuIcon'>
                                        <span> JAYLERS INFINITE </span>
                                    </div>
                                </NavItemLeft>
                            </NavLink>
                        </Navbar>

                        <NavLink onClick={ () => resetPage(Path.home)}
                                 active={isActive(Path.home)}>
                            <Navbar className="menuItem">
                                <NavItemLeft eventKey="Home">
                                    <img className="navImgItem" src={Code} alt={"Home"}/> Home
                                </NavItemLeft>
                            </Navbar>
                        </NavLink>

                        <NavLink onClick={ () => resetPage(Path.timeline)}
                                 active={isActive(Path.timeline)}>
                            <Navbar className="menuItem">
                                <NavItemLeft eventKey="Timeline">
                                    <img className="navImgItem" src={timeline} alt={"Timeline"}/> Timeline
                                </NavItemLeft>
                            </Navbar>
                        </NavLink>

                        <NavLink onClick={ () => resetPage(Path.experience)}
                                 active={isActive(Path.experience)}>
                            <Navbar className="menuItem">
                                <NavItemLeft eventKey="Experience">
                                    <img className="navImgItem" src={coding} alt={"Experience"}/> Experience
                                </NavItemLeft>
                            </Navbar>
                        </NavLink>

                        <NavLink onClick={ () => resetPage(Path.hobby)}
                                 active={isActive(Path.hobby)}>
                            <Navbar className="menuItem">
                                <NavItemLeft eventKey="Hobby">
                                    <img className="navImgItem" src={hobby} alt={"Hobby"} /> Hobby
                                </NavItemLeft>
                            </Navbar>
                        </NavLink>

                        <NavLink onClick={ () => resetPage(Path.about)}
                                 active={isActive(Path.about)}>
                            <Navbar className="menuItem">
                                <NavItemLeft eventKey="About me">
                                    <img className="navImgItem" src={geek} alt={"About me"}/> About me
                                </NavItemLeft>
                            </Navbar>
                        </NavLink>
                    </NavLeft>
                    <div className="copyRight">
                        {CopyRight()}
                    </div>
                </div>
                <div className="content">
                    {page}
                </div>
            </div>

        </div>
    );
}

export default App;
