import React, {useState} from "react";
import { NavbarContainer, NavbarWrapper, IconLogo, Menu, MenuItem, MenuItemLink, IconLogoMovile } from "../styles/NavBar.elements";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaBars, FaTimes, FaUserAlt, FaEnvelope } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

const styleNavLink = {

    textDecoration: "none",
    color:  "#ebc08b"
}

function NavBar() {
    const [click, setClick] = useState(false);

    const changeClick = () =>{
        setClick(!click);
    }
    return ( 
        <>
            <NavbarContainer>
                <NavbarWrapper>
                    <NavLink to="/" style={styleNavLink}>
                        <IconLogo>
                                <div>
                                    <TiWeatherPartlySunny size={"2em"}/>
                                </div>
                                <p>Weather-App</p> 
                        </IconLogo>
                    </NavLink>
                    <IconLogoMovile onClick={() => changeClick()}>
                        {click ? <FaTimes/> : <FaBars/>}
                    </IconLogoMovile>
                    <Menu click={click}>
                        <MenuItem onClick={() => changeClick()}>
                            <MenuItemLink>
                                <div>
                                    <FaUserAlt/>
                                    <NavLink style={styleNavLink} to="/about">ACERCA DE</NavLink>
                                </div>
                            </MenuItemLink>         
                        </MenuItem>
                        <MenuItem onClick={() => changeClick()}>
                            <MenuItemLink>
                                <div>
                                    <FaEnvelope/>
                                    <NavLink style={styleNavLink} to="/contact">CONTACTO</NavLink>                                
                                </div>
                            </MenuItemLink>         
                        </MenuItem>
                    </Menu>
                </NavbarWrapper>
            </NavbarContainer>
        </>
     );
}

export default NavBar;