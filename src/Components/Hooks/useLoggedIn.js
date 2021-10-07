import {useContext} from 'react';
import {useHistory} from 'react-router-dom'
import UserContext from '../../UserContext';


const useLoggedIn=(loggedOut=false)=>{
    let history = useHistory();
    let {user}= useContext(UserContext);
    let localUser= JSON.parse(window.localStorage.getItem('user'))
    if(loggedOut){
        if(user!==null||localUser!==null){
            return history.push('/')

        }
    }
    else if(user===null&&localUser===null){
        return history.push('/login')
    }

}

export default useLoggedIn