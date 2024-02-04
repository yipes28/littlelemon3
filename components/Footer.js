import React from 'react';
import logo from '../images/Logo.svg'
const Footer =() =>{
    return(
        <footer>
            <section>
                <div className='company-info'>

                <img src={logo} alt=''/>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served
                with a modern twist. </p>
                                </div>
                                <div> 
                                    <h3>Important Links</h3>
                                    <ul>
                                <li> <a href='/'>Home</a></li>
                                <li> <a href='/'>About</a></li>
                                <li> <a href='/'>Menu</a></li>
                                <li> <a href='/'>Reservation</a></li>
                                <li> <a href='/'>Order Online</a></li>
                                <li> <a href='/'>Login</a></li>
                                    
                                        
                                    </ul>
                                    </div>

                    <div>
                     <h3>Contact</h3> 
                     <ul>
                        <li>Address: 16 9600 No. 3 Road Richmond, BC<br/></li>
                        <li>Phone: 778-321-6368<br/></li>
                        <li>Email:yipes28@gmail.com<br/></li>
                     </ul>  
                     <div>
                     <h3>Social Media Links</h3> 
                     <ul>
                     <li> <a href='/'>Home</a></li>
                                <li> <a href='/'>Facebook</a></li>
                                <li> <a href='/'>Instagram</a></li>
                         
                                </div>
            </section>
        </footer>



    )
            <div>
            </div>


}    
export default Footer;