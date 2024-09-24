import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    let navStyle = {}
    const linkStyle = {
        textDecorationLine: "none",
        color: "#fff",
    };
    return(
        <nav className="bg-primary">
            <ul style={{ listStyleType: "none", padding: 0 , display: "inline-flex", gap: "20px"}}>
                <li><Link to="/"  style={linkStyle}>Refresh</Link></li>
                <li><Link to="/subjects" style={linkStyle}>Create Subjects</Link></li>
                <li><Link to="/subjects/show" style={linkStyle}>List the Subjects</Link></li>
            </ul>
        </nav>
    );
};

export default Header;