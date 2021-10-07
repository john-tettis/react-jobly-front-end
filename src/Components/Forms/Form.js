import React, {useState, useContext} from  'react';
import {useHistory} from 'react-router-dom'
import {Form, Label, FormGroup,Container} from 'reactstrap'
import API from '../../API'
import UserContext from '../../UserContext'

// inputs={
//     name:'password',
//     type:'password'
//     label:'Password'
//     value:''

// }
//destination='/home'
// => html form with according inputs, with an redirect on submit to <destination> after an axios request based off of <authType>


const GenericForm=({inputs,destination,authType})=>{
    let[error,setError]= useState(null)
    let history= useHistory()
    let {setUser}= useContext(UserContext)
    let temp = {};
    inputs.forEach((i)=>{
        temp = {...temp,[i.name]:i.value}
    })
    let [formData,setFormData] = useState(temp)


    const handleSubmit= async(e)=>{
        e.preventDefault();
        let func = authType==='Sign Up' ? API.signUp:API.Login
        try{
                //register/signup and receive token
            let res = await func(formData)
            let token = res.data.token
            //use token to retreive remaining user info, store in context
            let res2 = await API.getUser(formData.username,token)
            let user = {...res2, token}
            setUser(user)
            history.push(destination);
            setError(null)
        }
        catch(e){
            setError('Invalid username or password!')
        }
       
    }
    const handleUpdate=(e)=>{
        setFormData(d=>({...d,[e.target.name]:e.target.value}))
    }


    return(
        <Container className='d-flex flex-column align-items-center'>
            <h1 className='form-title'>{authType}</h1>
            <Form className='form' onSubmit={handleSubmit}>
                {inputs.map(i=>
                    <FormGroup key={i.name}className='my-4'>
                    <Label for={i.name}>{i.label}</Label>
                    <input className='form-control' type= {i.type} 
                    id={i.name} 
                    name={i.name} 
                    value={formData[i.name]}
                    onChange={handleUpdate}
                    ></input>
                    </FormGroup>
                    
                )}
                
                <button className='mx-0 button-link button-block'><div>{authType}</div></button>
                {error!==null &&<small class='error-message'>{error}</small>}
            </Form>
        </Container>
    )

}

export default GenericForm