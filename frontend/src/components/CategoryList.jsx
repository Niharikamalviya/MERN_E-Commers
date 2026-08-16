import React from 'react'
import { useState, useEffect } from 'react'

const CategoryList = () => {

    const [categoryProduct, setCategoryProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const categoryLoading = new Array(13).fill(null)

    const fetchCategoryProduct = async () => {
        setLoading(true)
        const response = await fetch(summaryApi.categoryProduct.url)
        const dataResponse = await response.json()
        setLoading(false)
        setCategoryProduct(dataResponse.data)
    }


    useEffect(() => {
        fetchCategoryProduct()
    }, [])

    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center gap-4 justify-between overflow-hidden scrollbar-none ">
                {

                    loading ? (

                        categoryLoading.map((el, index) => {
                            return (
                                < div className="h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden bg-slate-200">
                                    key={"categoryLoading" + index}
                                </div>

                            )
                        })



                    ) : (
                        categoryProduct.map((product, index) => {
                            return (
                                <Link to={"/product-category" + product?.category} className="cursor-pointer" >
                                    <div className="cursor-pointer">
                                        <div className="md:w-20 md:h-20 w-16 h-16 rounded-full overflow-hidden p-2 bg-slate-200 flex justify-center items-center">
                                            <img src={product?.productImage[0]} alt={product?.category} className="h-full object-fill mix-blend-multiply hover:scale-125 transition-all duration-200" />
                                        </div>
                                        <p className="text-center text-sm md:text-base capitalize">{product?.category}</p>

                                    </div>
                                </Link>

                            )
                        }
                        ))

                }
            </div>
        </div >
    )

}
export default CategoryList