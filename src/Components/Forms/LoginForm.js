import React from 'react';
import Form from './Form'
import useLoggedIn from '../Hooks/useLoggedIn'


let inputs=[
    {
        name:'username',
        type:'text',
        value:'',
        label:'Username'
    },
    {
        name:'password',
        type:'password',
        value:'',
        label:'Password'
    }
]
const LoginForm=()=>{
    useLoggedIn(true)

    return(
        <Form
        inputs={inputs}
        destination='/'
        authType='Log In'

        />
    )
}

export default LoginForm