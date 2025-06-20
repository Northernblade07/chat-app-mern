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
const App = () => {

  const {isLoading , authUser} = useAuthUser()
  
  if (isLoading) return <PageLoader/>;
  return (

    <div className='h-screen' data-theme="forest">
      <Routes>
        <Route path='/' element={authUser? <HomePage/>:<Navigate to={'/login'}/>}/>
         <Route path='/signup' element={!authUser?<SignupPage/>:<Navigate to={'/onboarding'}/>}/>
          <Route path='/login' element={!authUser?<LoginPage/>:<Navigate to={'/'}/>}/>
           <Route path='/onboarding' element={authUser?<OnboardingPage/>: <Navigate to={'/login'}/>}/>
            <Route path='/notification' element={authUser?<NotificationPage/> : <Navigate to={'/login'}/>}/>
              <Route path='/chat' element={authUser?<ChatPage/>: <Navigate to={'/login'}/>}/>
             <Route path='/call' element={authUser?<CallPage/>: <Navigate to={'/login'}/>}/>
      </Routes>
      <Toaster/>

    </div>
  )
}

export default App