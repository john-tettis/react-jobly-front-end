import React, {useState} from 'react'
import {useParams} from 'react-router-dom'
import JobCard from './Cards/JobCard'
import API from '../API'
import useLoggedIn from './Hooks/useLoggedIn'

const CompanyInfo=()=>{
    let [company, setCompany] = useState(null)
    let {handle} = useParams()

    useState(()=>{
        const retreive= async()=>{
        let company = await API.getCompany(handle)
        setCompany(company)
        }
        retreive();
    },[])
    useLoggedIn()

    if(company!==null){
        return(
            <div className='company-info'>
                <h2 className='company-info-title'>{company.name}</h2>
                <p className='company-info-description'>{company.description}</p>
                <div className='card-list'>
                    {company.jobs.map(j=><JobCard key={j.id}job={j}/>)}
                </div>
            </div>
        )
    }
    else{
        return <div>Loading...</div>
    }
    

}

export default CompanyInfo