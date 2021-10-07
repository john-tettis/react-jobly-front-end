import React from 'react';
import { useHistory } from 'react-router-dom';

const Card=({title, body, link,logo, clickable=false})=>{
    let history = useHistory();

const redirect=()=>{
    if(link!==null){
        history.push(link)
    }
}
const click = clickable? 'clickable':''



    return(
        <div onClick={redirect} className={`mcard ${click}`}>
            <div className='mcard-container'>
                <h2 className='mcard-title'>{title}</h2>
                {logo && <img className='mcard-image' src={logo}/>}
            </div>
            {body}
        </div>
    )

}


export default Card;