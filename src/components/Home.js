import React from "react";
import {Route, Link} from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Link to='/PizzaForm'>
            <button>Order Now!</button>
            </Link>
        </div>
    )
}

export default Home;