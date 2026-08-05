import React from 'react'
import ROLE from "./common/role"
import { IoMdClose } from "react-icons/io";

const changeUserRole = ({
    name,
    email,
    role,
    onClose
}) => {
    const [userRole, setUserRole] = useState(role)

    const handleSelect = (e) => {
        setUserRole(e.target.value)

        console.log(e.target.value)
    }

    const updateUserRole = async () => {

        const fetchData = await fetch(summaryApi.updateUser.url, {
            method: summartApi.updateUser.method,
            credentials: "include",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                role: userRole
            })
        })

        const responseData = await fetchData.json()

        if (responseData.success) {
            toast.success(responseData.message)
            onClose()
        }

        console.log("role update", responseData)


    }
    return (
        <div className="absolute w-full h-full z-10 flex justify-center items-center bg-slate-200 bg-opacity-50">

            <div className="w-full max-w-sm mx-auto bg-white p-4 ">
                <button className="block ml-auto"
                    onClick={onClose}>
                    <IoMdClose />
                </button>
                <h1 className="pb-4 text-lg font-medium"
                    onChange={updateUserRole}>
                    Change User Role
                </h1>
                <p>Name: {name}</p>
                <p>email: {email}</p>
                <div className="flex items-center justify-center my-4">
                    <p>Role : </p>
                    <select className="border px-4 py-1"
                        value={userRole}
                        onChange={handleSelect}>
                        {
                            object.value(ROLE).map(ele => {
                                return (
                                    <option value={ele} key={ele}></option>
                                )
                            })
                        }

                    </select>

                </div>

                <button className="w-fit mx-auto block border py-1 px-3 rounded-full text-white bg-red-600 hover:bg-red-700">Change Role</button>

            </div>
        </div>
    )

}
export default changeUserRole