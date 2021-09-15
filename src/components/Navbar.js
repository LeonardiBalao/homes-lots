import React from 'react'
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import { AllHomes } from '../features/allHomes/AllHomes';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>Home Plans</li>
                <li>Lots</li>
            </ul>
        </nav>
    )
}

export default Navbar;