import React, { useState, useEffect } from 'react'
import moment from "moment";
import summaryApi from "../common/index"
import toast from "react-hot-toast"
// import moment from 'momment'
import { MdEdit } from "react-icons/md";
import ChangeUserRole from "../components/changeUserRole"

const AllUser = () => {
    const [allUser, setAllUser] = useState([])
    const [openUpdateRole, setOpenUpdateRole] = useState(false)
    const [updateUser, setUpdateUser] = useState({
        email: " ",
        name: " ",
        role: " ",
        _id: " "

    })

    const fetchAllUser = async () => {
        const fetchData = await fetch(summaryApi.allUser.url, {
            method: summaryApi.allUser.method,
            credentials: "include"
        })
        const dataResponse = await fetchData.json()

        if (dataResponse.success) {
            setAllUser(dataResponse.data)
        }
        if (dataResponse.error) {
            toast.error(dataResponse.data)

        }

        console.log("dataResponse", dataResponse)
    }
    useEffect(() => {
        fetchAllUser()
    }, [])


    return (
        <div className="pb-4 ">
            <table className="w-full text-base font-medium bg-white">
                <thead className="bg-black text-white w-full">
                    <tr >
                        <th>sr.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Created Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUser.map((ele, index) => {
                            return (
                                <tr className="border-b">
                                    <td className="border px-4 py-2">{index + 1}</td>
                                    <td className="border px-4 py-2">{ele?.name}</td>
                                    <td className="border px-4 py-2">{ele?.email}</td>
                                    <td className="border px-4 py-2">{ele?.role}</td>
                                    <td className="border px-4 py-2">{moment(ele?.createdAt).format('LL')}</td>
                                    <td className="border px-4 py-2">
                                        <button className="bg-green-100 hover:bg-green-200 rounded-full cursor-pointer hover:text-white"
                                            onClick={() => {
                                                setUpdateUser(ele)
                                                setOpenUpdateRole(true)
                                            }}>
                                            <MdEdit />
                                        </button>
                                    </td>
                                </tr>
                            )


                        })
                    }
                </tbody>
            </table>

            {
                openUpdateRole && (
                    <ChangeUserRole
                        onClose={() => setOpenUpdateRole(false)}
                        name={updateUser.name}
                        email={updateUser.email}
                        role={updateUser.role}
                        userId={updateUser._id}
                        callFunc={fetchAllUser} />

                )
            }

        </div>
    )

}
export default AllUser