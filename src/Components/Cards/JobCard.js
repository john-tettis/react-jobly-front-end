import React, { useEffect, useContext, useState} from 'react';
import UserContext from '../../UserContext';
import Card from './Card'
import API from '../../API'
import {useHistory} from 'react-router-dom'



const JobCard=({job})=>{
    let {user,setUser}= useContext(UserContext);
    let [applied, setApplied] = useState(false);
    let history=useHistory()

    useEffect(()=>{
        if(user!==null){
            let applications = user.applications
            if(applications.includes(job.id)){
                setApplied(true)
            }
        }
        
        
    },[])
    
    const apply=async()=>{
        try{
            if(user===null){
                history.push('/login')
            }
            await API.apply(job.id, user.username,user.token)
            setUser(u=>({...u,applications:[...u.applications, job.id]}))
            setApplied(true)

        }
        catch(e){
            console.log(e)
            setApplied(false)
        }
    }
    let body=(
        <div className='mcard-container'>
            <ul className='mcard-list'>
                <li>Salary: {job.salary}</li>
                <li>Equity: {job.equity}</li>
            </ul>
            {!applied? (
                <button onClick={apply}className='button-link success'><div>Apply!</div></button>
            ):
            (
                <button  className='button-link success disabled'><div>Applied!</div></button>
            )}

        </div>
    )

    return(
        <Card
        title={job.title}
        body={body}
        />
    )



}

export default JobCard
