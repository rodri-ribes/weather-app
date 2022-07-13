import React from "react";
import { NavbarContainer, NavbarWrapper, IconLogo } from "../styles/NavBar.elements";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { NavLink } from 'react-router-dom'

const styleNavLink = {

    textDecoration: "none",
    color: "#ebc08b"
}

function NavBar() {

    return (
        <>
            <NavbarContainer>
                <NavbarWrapper>
                    <NavLink to="/" style={styleNavLink}>
                        <IconLogo>
                            <div>
                                <TiWeatherPartlySunny size={"2em"} />
                            </div>
                            <p>Weather-App</p>
                        </IconLogo>
                    </NavLink>
                </NavbarWrapper>
            </NavbarContainer>
        </>
    );
}

export default NavBar;