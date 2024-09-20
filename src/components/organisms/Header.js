import React from "react";
import Logo from "../atoms/Logo";
import Nav from "../molecules/Nav";

function Header () {
    return(
        <header className="flex justify-between items-center p-6 bg-lightblue-500">
            <Logo />
            <Nav />
        </header>
    )
}

export default Header;

