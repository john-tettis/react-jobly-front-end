import React, {useContext, useState,useEffect} from 'react'
import UserContext from '../UserContext'
import {Form, Label, FormGroup,Container} from 'reactstrap'
import API from '../API'
import useLoggedIn from './Hooks/useLoggedIn'



const ProfileInfo=()=>{
    let {user,setUser}= useContext(UserContext)
    let [formData,setFormData]= useState({
        firstName: '',
        lastName: '',
        email: '',
        password:''
    });
    let [error, setError]= useState(null)
    let [submitted, setSubmitted]= useState(null)
    
    useEffect(()=>{
        if(user!==null){
            setFormData({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password:''
            })
        }
        return ()=>{setFormData({})}
        
    },[user])
    useLoggedIn()
    const handleChange=(e)=>{
        setFormData(d=>({...d,[e.target.name]:e.target.value}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        const validate= async()=>{
            try{
                let res = await API.Login({username:user.username, password:formData.password})
                console.log(res)
                if(res.data.token){
                    let data = {...formData}
                    delete data.password
                    let newUser = await API.PatchUser(user.username,data, user.token)
                    console.log(newUser)
                    setUser({...newUser.user,token:user.token})
                    setError(null)
                    setSubmitted(true)
                }
            }
            catch(e){
                setError('Password does not match!')
            }
        }
        validate()
    }
    
    if(user!==null){
        return(
            <div className="profile-info">
                <h3 className='profile-info-title'>Profile Information</h3>
                <Form className='form' onSubmit={handleSubmit} >
                        <FormGroup key='username-input' className='my-4'>
                            <Label for='username'>Username</Label>
                            <input className='form-control' type='text' 
                            id='username'
                            name='username'
                            value={user.username}
                            disabled
                            ></input>
                        </FormGroup>
                        <FormGroup key='first-name-input' className='my-4'>
                            <Label for='firstName'>First Name</Label>
                            <input className='form-control' type='text' 
                            id='firstName'
                            name='firstName'
                            value={formData.firstName}
                            onChange={handleChange}
                            ></input>
                        </FormGroup>
                        <FormGroup key='last-name-input' className='my-4'>
                            <Label for='lastName'>Last Name</Label>
                            <input className='form-control' type='text' 
                            id='lastName'
                            name='lastName'
                            value={formData.lastName}
                            onChange={handleChange}
                            ></input>
                        </FormGroup>
                        <FormGroup key='email-input' className='my-4'>
                            <Label for='email'>Email</Label>
                            <input className='form-control' type='email' 
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            ></input>
                        </FormGroup>
                        <FormGroup key='password-input' className='my-4'>
                            <Label for='password'>Input Password to confirm changes</Label>
                            <input className='form-control' type='password' 
                            id='password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            ></input>
                        </FormGroup>
                        <button className='button-link button-block'><div>Save Changes</div></button>
                        {error!==null&& <small className='error-message'>{error}</small>}
                        {error===null&&submitted &&<small className='profile-info-text'>Changes Added!</small>}

                </Form>
            </div>
        )

    }
    return <div>Loading...</div>
    



}


export default ProfileInfo