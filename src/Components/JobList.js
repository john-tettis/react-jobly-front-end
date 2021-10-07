import React, {useEffect,useState} from 'react'
import API from '../API'
import JobCard from './Cards/JobCard'
import SearchBar from './SearchBar'
import useLoggedIn from './Hooks/useLoggedIn'

const JobList= ()=>{
    let [jobs,setJobs]= useState(null);
    let mounted = true;
    let retreive = async()=>{
        let jobs = await API.getJobs()
        if(mounted){
            setJobs(jobs)
        }

    }
    useEffect(()=>{
        retreive();
        return ()=>{mounted=false};
    },[])
    useLoggedIn()
    
    const filter = async (term)=>{
        if(term===''){
            retreive();
        }
        else{
            let jobs = await API.getJobs({title:term})
            setJobs(jobs)
        }
    }
        if(jobs!==null){
            return(
                <div className='job-list'>
                    <SearchBar onSearch={filter}/>
                    <div className='card-list'>
                        {jobs.map(j=><JobCard job={j}/>)}
                    </div>
                </div>
                
                )
        }
        else{
            return <div>Loading...</div>
        }

}

export default JobList