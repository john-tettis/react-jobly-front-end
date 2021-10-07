import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import UserContext from '../UserContext'


let Home=()=>{
    let {user} = useContext(UserContext)
    let inner=(
        <>
            <Link className='button-link' to='/login'><div>Login</div></Link>
            <Link className='button-link' to='/signup'><div>Sign Up</div></Link>
        </>
    )
    if(user!==null){
        inner=<p className='home-greet'>Welcome back {user.firstName}!</p>
    }


    return(
       <div className='home'>
           <div className='home-container'>
               <h1 className='home-title'>Jobly</h1>
               <p className='home-text'>Find your perfect career match through our extensive listings!</p>
               <div className='home-button-container'>
                   {inner}
               </div>
           </div>
       </div>
    )

}

export default Home;