import React from 'react'
import { Navigate, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import SignupPage from './pages/SignupPage'
import LoginPage from './pages/LoginPage'
import OnboardingPage from './pages/OnboardingPage'
import NotificationPage from './pages/NotificationPage'
import CallPage from './pages/CallPage'
import ChatPage from './pages/ChatPage'
import { Toaster} from 'react-hot-toast'
// import { axiosInstance } from './lib/axios'
// import {useQuery} from "@tanstack/react-query"
import PageLoader from './components/PageLoader'

import useAuthUser from './hooks/useAuthUser'
import Layout from './components/Layout'
const App = () => {

  const {isLoading , authUser} = useAuthUser()
  const isAuthenticated = Boolean(authUser);
  const isOnboarded = authUser?.isOnboarded;
  if (isLoading) return <PageLoader/>;
  return (

    <div className='h-screen' data-theme="forest">
      <Routes>
        <Route path='/' element={isAuthenticated && isOnboarded? (
          <Layout showSidebar>
          <HomePage/>
          </Layout>
          ):(<Navigate to={!isAuthenticated?'/login':'/onboarding'}/>)}/>
         <Route path='/signup' element={!isAuthenticated?<SignupPage/>:<Navigate to={'/onboarding'}/>}/>
          <Route path='/login' element={!isAuthenticated?<LoginPage/>:<Navigate to={'/'}/>}/>
            <Route path='/notification' element={isAuthenticated?
            <Layout>
            <NotificationPage/>
            </Layout>
             : <Navigate to={'/login'}/>}/>
              <Route path='/chat' element={isAuthenticated?<ChatPage/>: <Navigate to={'/login'}/>}/>
             <Route path='/call' element={isAuthenticated?<CallPage/>: <Navigate to={'/login'}/>}/>
           <Route path='/onboarding' element={isAuthenticated?(!isOnboarded?(<OnboardingPage/>):(<Navigate to={'/'}/>)):(<Navigate to={'/login'}/>)}/>
      </Routes>
      <Toaster/>

    </div>
  )
}

export default App