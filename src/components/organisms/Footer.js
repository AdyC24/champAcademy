import React from "react";
import SocialLinks from "../molecules/SocaialLinks";

function Footer() {
    return(
        <footer className="bg-lightblue-500 py-6 text-center">
            <p className="white-text">&copy; 2024 Platform Pembelajaran Anak</p>
            <SocialLinks/>
        </footer>
    )
}

export default Footer;