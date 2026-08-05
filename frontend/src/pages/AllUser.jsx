import React from 'react'
import summaryApi from "./common/index"
import toast from "react-hot-toast"
import moment from 'momment'
import { MdEdit } from "react-icons/md";
import changeUserRole from "../compoments/changeUserRole"

const AllUser = () => {
    const [alluser, setAllUser] = useState([])
    const [openUpdateRole, setOpenUpdateRole] = useState(false)
    const [updateUser, setUpdateUser] = useState({
        email: " ",
        name: " ",
        role: " "

    })

    const fetchAllUser = async () => {
        const fetchData = await fetch(summaryApi.allUser.url, {
            method: summaryApi.allUser.method,
            credentails: "include"
        })
        const dataResponse = await fetchData.json()

        if (dataResponse.success) {
            setAllUser(dataResponse.data)
        }
        if (dataResponse.error) {
            toast.error(dataResponse.data)

        }

        cosole.log("dataResponse", dataResponse)
    }
    useEffect(() => {
        fetchAllUser()
    }, [])


    return (
        <div className="pb-4">
            <table classname="w-full border text-base font-medium bg-white">
                <thead>
                    <th>sr.</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Created Date</th>
                </thead>
                <tbody>
                    {
                        allUser.map((ele, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{ele?.name}</td>
                                    <td>{ele?.email}</td>
                                    <td>{ele?.role}</td>
                                    <td>{moment(ele?.createdAt).format('LL')}</td>
                                    <td>
                                        <button className="bg-green-100 hover:bg-green-200 rounded-full cursor-pointer hover:text-white"
                                            onClick={() => {
                                                setupdateUser(ele)
                                                setOpenUserRole(true)
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
                    <changeUserRole
                        onClose={() => setOpenUpdateRole(false)}
                        name={updateUser.name}
                        email={updateUser.email}
                        role={updateUser.role} />
                )
            }

        </div>
    )

}
export default AllUser