import React from "react";
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to='/PizzaForm'>
            <button id='orderBtn'>Order Now!</button>
            </Link>
        </div>
    )
}

export default Home;