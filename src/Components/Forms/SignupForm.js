import React from 'react';
import Form from './Form';
import useLoggedIn from '../Hooks/useLoggedIn';


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
    },
    {
        name:'firstName',
        type:'text',
        value:'',
        label:'First Name'
    },
    {
        name:'lastName',
        type:'text',
        value:'',
        label:'Last Name'
    },
    {
        name:'email',
        type:'email',
        value:'',
        label:'Email'
    }
]
const SignUpForm=()=>{
    useLoggedIn(true)
    return(
        <Form
        inputs={inputs}
        destination='/'
        authType='Sign Up'

        />
    )
}

export default SignUpForm