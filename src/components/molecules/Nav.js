import React from "react";

function Nav () {
    return (
        <nav>
            <ul className="flex space-x-6">
                <li><a href="#home" className="text-blue-700 font-bold">Home</a></li>
                <li><a href="#features" className="text-blue-700 font-bold">Features</a></li>
                <li><a href="#contact" className="text-blue-700 font-bold">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Nav;