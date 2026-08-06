import React from 'react'
import { MdEdit } from "react-icons/md";

const AdminProductCard = ({ data, fetchdata }) => {

    const [editProduct, setEditProduct]

    return (
        < div className="bg-white rounded p-4">
            <img src={data?.productImage[0]} width={100} heigth={100} />
            <h1>{data.productName}</h1>

            <div className="font-semibold">
                {
                    displayINRCurrency(data.sellingPrice)

                }


            </div>

            <div className="w-fit ml-auto hover:bg-green-500 hover:text-white bg-gree-100 cursor-pointer"
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