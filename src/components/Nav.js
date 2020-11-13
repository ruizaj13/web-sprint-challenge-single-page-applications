import React from 'react';
import {Link} from 'react-router-dom'


const Nav = () => {
    return (
        <nav>
            <h1>Lambda Eats</h1>
            <ul className='navLinks'>
                <Link to='/'>
                    <li key=''>Home</li>
                </Link>
            </ul>
        </nav>

    )
}

export default Nav;