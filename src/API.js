import axios from 'axios'
const HOST_PATH = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
class API {
    constructor(){

    }
    static async getCompanies(data){
        try{
            if(data){
                let result = await axios.get(`${HOST_PATH}/companies`,{params:data})
                return result.data.companies
            }
            let result = await axios.get(`${HOST_PATH}/companies`)
            return result.data.companies
        }
        catch(e){
            console.log(e)
            return e
        }

        
    }
    static async getCompany(handle){
        try{
            let result = await axios.get(`${HOST_PATH}/companies/${handle}`)

            return result.data.company
        }
        catch(e){
            console.log(e)
            return e
        }
    }

    static async getJobs(data){
        try{
            if(data){
                let result = await axios.get(`${HOST_PATH}/jobs`,{params:data})
                return result.data.jobs
            }
            else{
                let result = await axios.get(`${HOST_PATH}/jobs`)
                return result.data.jobs

            }
        }
        catch(e){
            console.log(e)
            return e
        }

    }
    static async getUser(username,token){
        try{
            let result = await axios.get(`${HOST_PATH}/users/${username}`,{
                headers:{
                    'Authorization':`${token}`
                }
            })
            return result.data.user
        }
        catch(e){
            console.log(e)
            return e
        }

    }
    
    //{username,password,first_name,last_name,email}=>token
    static async signUp(data){
        try{
            let result = axios.post(`${HOST_PATH}/auth/register`,data);
            return result

        }
        catch(e){
            console.log(e)
            return e
        }

    }
    //{username,password}=>token
    static async Login(data){
        try{
            let result = axios.post(`${HOST_PATH}/auth/token`,data);
            return result

        }
        catch(e){
            console.log(e)
            return e
        }
    }
    // {email,firstName,lastName},username => {modified user object from db }
    static async PatchUser(username,data,token){
       try{
        let res = await axios.patch(`${HOST_PATH}/users/${username}`,data,{
            headers:{'Authorization':`${token}`}
        })
        return res.data
       }
       catch(e){
           console.log(e)
       }
    }
    static async apply(job_id,username, token){
        try{
           let res = await axios.post(`${HOST_PATH}/users/${username}/jobs/${job_id}`,{},{headers:{'Authorization':`${token}`}})
           console.log(res)
        }
        catch(e){
            console.log(e)
        }
    }
   
}

export default API;