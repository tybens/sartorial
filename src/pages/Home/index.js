import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            Hello Home
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/shop">Shop</Link>
            </li>
            </ul>
        </div>
    )
}

export default Home
