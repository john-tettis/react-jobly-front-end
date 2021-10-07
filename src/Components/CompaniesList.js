import React, {useEffect,useState} from 'react'
import API from '../API'
import CompanyCard from './Cards/CompanyCard'
import SearchBar from './SearchBar'
import useLoggedIn from './Hooks/useLoggedIn'

const CompaniesList= ()=>{
    let [companies,setCompanies]= useState(null);
    let retreive = async()=>{
        let token = await API.getCompanies()
        setCompanies(token)

    }

    useEffect(()=>{
        retreive();
    },[])
    useLoggedIn()
    const filter = async (term)=>{
        if(term===''){
            retreive();
        }
        else{
            let comps = await API.getCompanies({name:term})
            setCompanies(comps)
        }
        
    }

        if(companies!==null){
            return(
                <div className='companies-list card-list'>
                    <SearchBar onSearch={filter}/>
                    <div className='card-list'>
                    {
                        companies.map(c=><CompanyCard company={c}/>)
                    }
                    </div>
                    
                </div>
                )
        }
        else{
            return <div>Loading...</div>
        }

}

export default CompaniesList