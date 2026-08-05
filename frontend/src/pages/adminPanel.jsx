import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from 'react'
import { useSelector } from 'react-redux'

const AdminPanel = () => {

    const user = useSelector(state => state?.user?.user)
    const navigate = useNavigate()

    useEffect(() => {
        if (user?.role !== ROLE.ADMIN) {
            naavigate("/")
        }

    }, [user])

    return (
        <div className="min-h-[calc(100vh-120px)] md:flex hidden">
            <div className="bg-white w-full max-w-60 min-h-full shadow-lg">
                <div className="h-32 flex justify-center items-center flex-col">
                    <div className="text-5xl cursor-pointer justify-center flex relative">
                        {
                            user?.profilePic ? (
                                <img src={user?.profilePic}
                                    className="w-10 h-10 rounded-full" alt={user?.name} />
                            ) : (<FaRegUserCircle />)
                        }
                    </div>

                    <p className="capitalize text-lg font-semibold">{user?.name}</p>
                    <p className="text-sm">{user?.role}</p>
                </div>
                {/* navigation */}
                <div>
                    <nav className="grid p-4">
                        <Link to={"all-users"}
                            className="px-2 py-1 hover:bg-slate-100">All Users</Link>
                        <Link to={"product"}
                            className="px-2 py-1 hover:bg-slate-100"> product</Link>
                    </nav>
                </div>
            </div>

            <main>
                main
            </main>
        </div>
    )

}
export default AdminPanel