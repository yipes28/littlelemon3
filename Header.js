import React from 'react';
import react from 'react-router-dom';
import bannerImg from '.../images/'restaurantfood.jpg   
const Header = () => {
    
    return(
    <header className ='header'>
        <section>
            <div className='banner'>   
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served
                with a modern twist. </p>
               <Link to ='/booking'> <button aria-label='on Click'>Reserve Table</button></Link>
            </div>

);
        </section>

    </header>
    <div>
        <img src = {bannerImg}alt=''/>
    </div>

    



export default Header;
