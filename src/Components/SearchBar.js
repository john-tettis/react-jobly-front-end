import React,{useState} from 'react'


const SearchBar=({onSearch})=>{
    let[searchValue,setSearchValue] = useState('')

    const handleChange=(e)=>{
        setSearchValue(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        onSearch(searchValue)
    }


    return(
            <form onSubmit={handleSubmit} className='search-bar'>
                <input  className='search-bar-input form-control ' 
                type='text' 
                placeholder='Search...' 
                value={searchValue} 
                onChange={handleChange}>
                </input>
                <button className='button-link'><div>Search</div></button>
            </form>
    )

}

export default SearchBar