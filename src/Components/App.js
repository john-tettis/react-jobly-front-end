import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import '../Styles/App.css'
import Home from './Home'
import Navbar from './Navbar'
import CompaniesList from './CompaniesList'
import LoginForm from './Forms/LoginForm'
import SignupForm from './Forms/SignupForm'
import UserContext from '.././UserContext'
import CompanyInfo from './CompanyInfo'
import JobList from './JobList'
import ProfileInfo from './ProfileInfo'

function App() {
  let [user, setUser]= useState(null)
  useEffect(()=>{
    let storedUser= JSON.parse(window.localStorage.getItem('user'))
    setUser(storedUser)
  },[])
  useEffect(()=>{
        window.localStorage.setItem('user', JSON.stringify(user))
  },[user])
 

  return (
    <BrowserRouter>
        <Switch>
            <UserContext.Provider value={{user, setUser}}>
                <Navbar/>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route exact path='/signup'>
                    <SignupForm/>
                </Route>
                <Route exact path='/login'>
                    <LoginForm/>
                </Route>
                <Route exact path='/companies'>
                    <CompaniesList/>
                </Route>
                <Route exact path='/companies/:handle'>
                    <CompanyInfo/>
                </Route>
                <Route exact path='/jobs'>
                    <JobList/>
                </Route>
                <Route exact path='/profile'>
                    <ProfileInfo/>
                </Route>
            </UserContext.Provider>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
