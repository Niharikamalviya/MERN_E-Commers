import React from 'react'
import LoginIcons from '../assets/icons8-login.gif'
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useState } from "react"
import { Link } from 'react-router-dom'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [profile, setProfile] = useState(LoginIcons);
    const [data, setData] = useState({
        email: "", password: "", confirmPassword: "", name: ""
    })
    const handleOnChange = (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }
    const handleUploadPic = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfile(URL.createObjectURL(file));
            // TODO: also send `file` to your upload handler / API here
        }


        console.log("file", file)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    console.log("data SignUp", data)


    return (
        <section id='login'>
            <div className="mx-auto p-4 mt-6">


                <div className="bg-white p-2 w-full max-w-md mx-auto ">
                    {/* login Icon */}

                    <div className="w-20 h-20 mx-auto flex relative justify-center items-center rounded-full overflow-hidden">
                        <img src={profile} alt='login icons'
                            className="w-full h-full object-cover" />

                        {/* upload Photo */}

                        <label className="absolute bottom-0 left-0 w-full z-10">
                            <div className="text-[10px] cursor-pointer bg-slate-200/80  py-2  rounded-b-full text-center">
                                Upload photo
                            </div>
                            <input type='file' accept="image/*" className="hidden" name="profile" onChange={handleUploadPic} />
                        </label>

                    </div>



                    {/* form  */}
                    <form className="pt-6 flex flex-col gap-2"
                        onSubmit={handleSubmit}>

                        <div className="grid">
                            <label>Name:</label>
                            <div className="bg-slate-100 p-2">
                                <input
                                    type='name'
                                    placeholder="enter name"
                                    onChange={handleOnChange}
                                    name='name'
                                    required
                                    value={data.name}
                                    className="w-full h-full outline-none bg-transparent" />
                            </div>
                        </div>
                        <div className="grid">
                            <label>Email:</label>
                            <div className="bg-slate-100 p-2">
                                <input
                                    type='email'
                                    placeholder="enter email"
                                    onChange={handleOnChange}
                                    name='email'
                                    required
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
                                    required
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

                        </div>

                        <div>
                            <label>Confirm Password:</label>
                            <div className="bg-slate-100 p-2 flex justify-between">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="enter password"
                                    className="w-full h-full outline-none bg-transparent"
                                    name='confirmPassword'
                                    required
                                    value={data.confirmPassword}
                                    onChange={handleOnChange} />

                                {/* password eye icon */}
                                <div className="cursor-pointer text-2xl mr-2" onClick={() => setShowConfirmPassword((preve) => !preve)}>
                                    {
                                        showConfirmPassword ? (
                                            <FaEye />
                                        ) : (<FaEyeSlash />)
                                    }

                                </div>
                            </div>

                        </div>

                        <button className="bg-red-600 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 trasition-all duration-200 mx-auto block mt-6 mb-4">Sign Up</button>

                        <p className="my-4">I have already an account <Link to={"/login"} className="hover:text-red-700 text-red-600"> Login</Link></p>


                    </form>


                </div>
            </div>
        </section>
    )

}
export default Login