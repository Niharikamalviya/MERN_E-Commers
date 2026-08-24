import React, { useState, useEffect } from 'react'
import UploadProduct from '../components/uploadProducts'
import summaryApi from "../common/index"

const AllProduct = () => {
    const [openUploadProduct, setOpenUploadProduct] = useState(false)
    const [allProduct, setAllProduct] = useState([])

    const fetchAllProduct = async () => {
        const dataResponse = await fetch(summaryApi.allProduct.url, {
            method: summaryApi.allProduct.method,
        })

        setAllProduct(dataResponse?.data || [])
    }

    useEffect(() => {
        fetchAllProduct()
    }, [])
    return (
        <div>

            <div className="bg-white py-2 px-4 flex justify-between items-center">
                <h1 className="font-bold text-lg"> AllProduct</h1>
                <button className="border-2 border-red-600 text-red-600 hover:text-white hover:bg-red-600 transiiton-all duration-200 py-1 px-3  rounded-full"
                    onClick={() => setOpenUploadProduct(true)}
                >Upload Product</button>

            </div>

            {/* all product */}

            <div className="flex items-center gap-5 py-4 flex-wrap  h-min[calc(100vh-200px)] overflow-y-auto">
                {
                    allProduct.map((product, index) => {
                        return (
                            <AdminProductCard data={product} key={index + "allProduct"}
                                fetchdata={fetchAllProduct} />

                        )
                    })
                }
            </div>

            {/* uplaod product components */}

            {
                openUploadProduct && (
                    <UploadProduct
                        onClose={() => setOpenUploadProduct(false)}
                        fetchdata={fetchAllProduct} />
                )
            }



        </div >
    )

}
export default AllProduct