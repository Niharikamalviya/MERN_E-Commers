import React, { useState } from 'react'
import { MdEdit } from "react-icons/md";
import displayINRCurrency from '../helpers/currency'
import AdminEditProduct from "../components/AdminEditProductCard"

const AdminProductCard = ({ data, fetchdata }) => {

    const [editProduct, setEditProduct] = useState()

    return (
        < div className="bg-white rounded p-4">

            <div className="w-40">
                <div className="w-32 h-32 flex justify-center items-center">
                    <img src={data?.productImage[0]} className="mx-auto object-fill h-full" />
                </div>
                <h1 className="text-ellipsis line-clamp-2">{data.productName}</h1>
            </div>

            <div className="font-semibold">
                {
                    displayINRCurrency(data.sellingPrice)

                }


            </div>

            <div className="w-fit ml-auto hover:bg-green-500 hover:text-white bg-gree-100 cursor-pointer rounded-full"
                onClick={() => setEditProduct(true)}>
                <MdEdit />
            </div>

            {/* edit product data */}

            {
                editProduct && (
                    <AdminEditProduct productData={data}
                        onClose={() => setEditProduct(false)}
                        fetchdata={fetchdata} />
                )
            }


        </div>
    )

}
export default AdminProductCard