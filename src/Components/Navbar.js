import React, {useContext, useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import UserContext from '../UserContext';


let Navbar=()=>{
    let {user,setUser}=useContext(UserContext)
    //simply wused to force update on context change
    let [render, setRender] = useState(false)
    const logout=()=>{
        setUser(null)
        setRender(!render)
    }

    return(
        <nav className='navbar'>
            <NavLink to='/'>Jobly</NavLink>
            <div className='navbar-container'>
            {user===null ? 
                <>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/signup'>Signup</NavLink></>:
                <>
                <NavLink to='/companies'>Companies</NavLink>
                <NavLink to='/jobs'>Jobs</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
                <Link onClick={logout} to='/'>Logout ({user.username})</Link>
                </>
                }
                
            </div>


        </nav>
    )

}

export default Navbar;