import React from 'react';
import Card from './Card'


const CompanyCard=({company})=>{

    let body=(
    <p className='mcard-description'>
        {company.description}
    </p>
    )
    return(
    <Card
    title={company.name}
    body={body}
    link={`/companies/${company.handle}`}
    clickable
    ></Card>)
}

export default CompanyCard