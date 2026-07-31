import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Header from './components/Header'
import ForgetPassword from './pages/ForgetPassword'
import SignUp from "./pages/SignUp"
import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-slate-100 w-full min-h-[calc(100vh-70px)] overflow-hidden">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>

      </div>
      <Footer />



    </>
  )
}

export default App
