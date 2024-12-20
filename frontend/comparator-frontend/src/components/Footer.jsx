import React from "react";
import "../styles/footer.css";

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Soluzioni <span className="footer-highlight">ENERGETICHE</span></p>
            <p>All rights reserved.</p>
        </footer>
    );
}

export default Footer;
