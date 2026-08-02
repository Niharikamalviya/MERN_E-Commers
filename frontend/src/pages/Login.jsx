import React from 'react'
import LoginIcons from '../assets/icons8-login.gif'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState, useContext } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast';
import Context from "../context/index";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [data, setData] = useState({
        email: "",
        password: ""
    })


    // navigate
    const navigate = useNavigate()

    //context API
    const { fetchUserDetails } = useContext(Context)
    console.log("generalContext", generalContext.fetchUserDetails())

    //change handler
    const handleOnChange = (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    // submit handler
    const handleSubmit = async (e) => {
        e.preventDefault()

        const dataResponse = await fetch(summaryApi.login.url, {
            method: summaryApi.login.method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)

        })
        const dataApi = await dataResponse.json()

        if (dataApi.success) {
            toast.success(dataApi.meesage)
            navigate('/')
            fetchUserDetails()


        }
        if (dataApit.error) {
            toast.error(dataApi.message)
        }

    }

    console.log("data login", data)


    return (
        <section id='login'>
            <div className="mx-auto p-4 mt-6">


                <div className="bg-white p-2 w-full max-w-md mx-auto ">
                    {/* login Icon */}
                    <div className="w-20 h-20 mx-auto flex justify-center items-center">
                        <img src={LoginIcons} alt='login icons'
                            className="w-25 h-25" />

                    </div>

                    {/* form  */}
                    <form className="pt-6 flex flex-col gap-2"
                        onSubmit={handleSubmit}>
                        <div className="grid">
                            <label>Email:</label>
                            <div className="bg-slate-100 p-2">
                                <input
                                    type='email'
                                    placeholder="enter email"
                                    onChange={handleOnChange}
                                    name='email'
                                    value={data.email}
                                    className="w-full h-full outline-none bg-transparent" />
                            </div>
                        </div>

                        <div>
                            <label>Password:</label>
                            <div className="bg-slate-100 p-2 flex justify-between">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="enter password"
                                    className="w-full h-full outline-none bg-transparent"
                                    name='password'
                                    value={data.password}
                                    onChange={handleOnChange} />

                                {/* password eye icon */}
                                <div className="cursor-pointer text-2xl mr-2" onClick={() => setShowPassword((preve) => !preve)}>
                                    {
                                        showPassword ? (
                                            <FaEye />
                                        ) : (<FaEyeSlash />)
                                    }

                                </div>
                            </div>
                            {/* forget password */}
                            <Link to={"/forget-password"}
                                className="w-fit ml-auto block hover:underline hover:text-slate-500">
                                Forget Password</Link>
                        </div>

                        <button className="bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 trasition-all duration-200 mx-auto block mt-6 mb-4">Login</button>

                        <p className="my-4">Don't have account ? <Link to={"/sign-up"} className="hover:text-red-700 text-red-600"> Sign Up</Link></p>

                    </form>


                </div>
            </div>
        </section>
    )

}
export default Login