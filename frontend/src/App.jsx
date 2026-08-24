import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import "./App.css";
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
import AdminPanel from "./pages/adminPanel";
import Alluser from "./pages/AllUser";
import AllProduct from "./pages/AllProduct"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/cart"
import searchBar from "./pages/searchBar"
import { setUserDetails } from "./slices/userSlice";


function App() {

  const dispatch = useDispatch()
  const [cartProductCount, setCartProductCount] = useState(0)

  const fetchUserDetails = async () => {
    const dataResponse = await fetch(summaryApi.current_user.url, {
      method: summaryApi.current_user.method,
      credentials: 'include'

    })
    const dataApi = await dataResponse.json()

    if (dataApi.success) {
      dispatch(setUserDetails(dataApi.data))
    }
    console.log("data-user", dataApi)
  }

  const fetchUserAddToCart = async () => {
    const dataResponse = await fetch(summaryApi.countAddToCart.url, {
      method: summaryApi.countAddToCart.method,
      credentials: 'include'

    })
    const dataApi = await dataResponse.json()


    console.log("add to cart", dataResponse)
    setCartProductCount(dataApi?.data?.count)

  }
  useEffect(() => {
    fetchUserDetails()
    fetchUserAddToCart()
  }, [])



  return (
    <>
      <Context.Provider value={{
        fetchUserDetails,
        cartProductCount,
        fetchUserAddToCart
      }}>

        <Header />
        <Toaster />
        <div className="bg-slate-100 w-full min-h-[calc(100vh-70px)] overflow-hidden pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/admin-panel" element={<AdminPanel />}>
              <Route path="all-products" element={<AllProduct />} />
              <Route path="all-users" element={<Alluser />} />
            </Route>
            <Route path="/product-Details/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<searchBar />} />
          </Routes>

        </div>
        <Footer />


      </Context.Provider>
    </>
  )
}

export default App
