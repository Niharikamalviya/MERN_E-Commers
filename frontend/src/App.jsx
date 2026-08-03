import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Header from './components/Header'
import ForgetPassword from './pages/ForgetPassword'
import SignUp from "./pages/SignUp"
import Footer from "./components/Footer"
import { Toaster } from "react-hot-toast";
import { useEffect } from 'react'
import { useDispatch } from "react-redux";
import { useContext } from "react";
import Context from "./context/index"
import summaryApi from "./common/index"

function App() {

  const dispatch = useDispatch()

  // const fetchUserDetails = async () => {
  //   const dataResponse = await fetch(summaryApi.current_user.url, {
  //     method: summaryApi.current_user.method,
  //     credentials: 'include'

  //   })
  //   const dataApi = await dataResponse.json()

  //   if (dataApi.success) {
  //     dispatch(setUserDetails(dataApi.data))
  //   }
  //   console.log("data-user", dataResponse)
  // }
  // useEffect(() => {
  //   // user Details
  //   fetchUserDetails();
  // })


  return (
    <>
      {/* <Context.Provider value={{
        fetchUserDetails

      }}> */}
      <div className="bg-slate-100 w-full min-h-[calc(100vh-70px)] overflow-hidden">
        <Header />
        <Toaster />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>

      </div>
      <Footer />


      {/* </Context.Provider> */}
    </>
  )
}

export default App
