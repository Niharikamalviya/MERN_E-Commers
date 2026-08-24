import React from 'react'
import Logo from './Logo'
import { ImSearch } from "react-icons/im";
import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { toast } from "react-hot-toast"
import summaryApi from '../common/index'
import { useDispatch, useSelector } from 'react-redux'
import { setUserDetails } from '../slices/userSlice'
import { useState, useContext } from 'react'
import ROLE from "../common/role"
import Context from '../context'


const Header = () => {

    // display user details on header
    const user = useSelector(state => state?.user?.user)
    const dispatch = useDispatch()

    console.log("user-header", user)

    const [menuDisplay, setMenuDisplay] = useState(false)
    const context = useContext(Context)
    const navigate = useNavigate()

    // logout handler
    const handleLogout = async () => {
        const fetchData = await fetch(summaryApi.logout_user.url, {
            method: summaryApi.logout_user.method,
            credentials: 'include'
        })

        const data = await fetchData.json()

        if (data.success) {
            toast.success(data.message)
            dispatch(setUserDetails(null))
            navigate("/")
        }

        if (data.error) {
            toast.error(data.message)
        }
    }

    // search handle

    const handleSearch = (e) => {
        const { value } = e.target

        if (value) {
            navigate(`/search?q=${value}`)
        }
        else {
            navigate("/search")
        }

    }


    return (
        <header className='h-16 shadow-md bg-white fixed w-full z-40'>
            <div className='h-full container mx-auto flex items-center px-4 justify-between'>

                {/* Logo */}
                <div>
                    <Link to={'/'}>
                        <Logo /></Link>

                </div>

                {/* search bar */}
                <div className="hidden lg:flex items-center w-full justify-between max-w-sm border border-slate-300 rounded-full focus-within:shadow-md">
                    <input type='text' placeholder='search product here....'
                        className="outline-none w-full pl-3"
                        onChange={handleSearch} />
                    <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center rounded-r-full justify-center text-white">
                        <ImSearch />
                    </div>

                </div>

                {/* user icon and card */}
                <div className="flex itemx-center gap-7">
                    {/* user Icon */}
                    <div className="relative flex justify-center">

                        {
                            user?._id && (
                                <div className="text-3xl cursor-pointer"
                                    onClick={() => setMenuDisplay(preve => !preve)}>
                                    {
                                        user?.profilePic ? (
                                            <img src={user?.profilePic}
                                                className="w-10 h-10 rounded-full" alt={user?.name} />
                                        ) : (<FaRegUserCircle />)
                                    }
                                </div>
                            )
                        }

                        {/* admin-panel */}
                        {
                            menuDisplay && (
                                <div className=" absolute bg-white bottom-0 top-11 h-fit p-1 rounded shadow-lg  ">

                                    <nav>

                                        {
                                            user?.role === ROLE.ADMIN && (
                                                <Link to={"/admin-panel"}
                                                    className="whitespace-nowrap text-lg hover:bg-slate-100 p-2">Admin panel</Link>

                                            )
                                        }

                                    </nav>
                                </div>
                            )
                        }


                    </div>

                    {/* shooping cart */}


                    {
                        user?._id && (
                            <Link to={"/cart"} className="text-3xl relative">
                                <span>
                                    <FaShoppingCart />
                                </span>
                                <div className="bg-red-600 text-white w-5 p-1 flex justify-center items-center h-5 rounded-full absolute -top-2 -right-2">
                                    <p className="text-xs">{context?.cartProductCount}</p>
                                </div>
                            </Link>
                        )
                    }




                    {/* login button */}

                    <div>
                        {
                            user?._id ? (
                                <button
                                    onClick={handleLogout}
                                    className="px-3 bg-red-600 py-1 rounded-full p-1 flex justify-center items-center text-white hover:bg-red-700">
                                    Logout</button>
                            ) : (
                                <Link to={'/login'}>
                                    <button className="px-3 bg-red-600 py-1 rounded-full p-1 flex justify-center items-center text-white hover:bg-red-700">
                                        login
                                    </button></Link>
                            )
                        }


                    </div>

                </div>
            </div>
        </header>
    )

}
export default Header