import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import SummaryApi from '../common/index'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import displayINRCurrency from "../helpers/currency"
import VerticalCardProduct from '../components/VerticalCardProduct'


const ProductDetails = () => {

    const [loading, setLoading] = useState(false)
    const productImageListLoading = new Array(4).fill(null)
    const [activeImage, setActiveImage] = useState("")
    const [data, setData] = useState({
        productName: "",
        brandName: "",
        category: "",
        productImage: [],
        description: "",
        price: "",
        sellingPrice: ""

    })

    const params = useParams()

    console.log("product id", params)

    const fetchProductDetails = async () => {
        setLoading(true)
        const response = await fetch(SummaryApi.productDetails.url, {
            method: SummaryApi.productDetails.method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                productID: params?.id
            })
        })

        setLoading(false)
        const dataResponse = await response.json()

        setData(dataResponse?.data || {})
        setActiveImage(dataResponse?.data?.productImage?.[0] || "")
    }

    useEffect(() => {
        fetchProductDetails()
    }, [])

    const handleMouseEnterProduct = (imageurl) => {
        setActiveImage(imageurl)
    }
    return (
        <div className="container mx-auto p-4">

            <div className="min-h-[200px] flex flex-col lg:flex-row gap-4">

                {/* product image */}
                <div className="h-96 flex-col flex lg:flex-row-reverse gap-4">

                    <div className="lg:h-96 lg:w-96 h-[300px] w-[300px] bg-slate-200">
                        <img src={activeImage} className="h-full w-full object-scale-down mix-blend-multipy" />
                        {/* product image zoom */}

                    </div>

                    <div className="h-full">
                        {
                            loading ? (

                                <div className="flex gap-2 h-full lg:flex-col overflow-scroll scrollbar-none">
                                    {
                                        productImageListLoading.map((ele, index) => {
                                            return (
                                                <div className="h-20 w-20 bg-slate-200 rounded"
                                                    key={index}>

                                                </div>

                                            )
                                        })
                                    }

                                </div>

                            ) : (
                                <div className="flex gap-2 h-full lg:flex-col overflow-scroll scrollbar-none">
                                    {
                                        data?.productImage?.map((imageurl, index) => {
                                            return (
                                                <div className="h-20 w-20bg-slate-200 rounded animate-pulse" key={imageurl}>
                                                    <img src={imageurl} className="w-full h-full object-scale-down mix-blend-multipy cursor-pointer"
                                                        onMouseEnter={() => handleMouseEnterProduct(imageurl)}
                                                        onClick={() => handleMouseEnterProduct(imageurl)} />

                                                </div>


                                            )
                                        })
                                    }

                                </div>
                            )
                        }

                    </div>

                </div>

                {/* product details */}
                <div>
                    {
                        loading ? (
                            <div className="w-full gap-1">
                                <p className="bg-slate-200 animate-pulse h-6 lg:h-8 w-full  py-2 px-5 rounded-full w-fit"> </p>
                                <h2 className="bg-slate-200 animate-pulse h-6 p-2 text-2xl lg:text-4xl font-medium lg:h-8 w-full"> </h2>
                                <p className="capitalize bg-slate-200 p-2 h-4 animate-pulse lg:h-8 w-full"> </p>
                                {/* rating */}
                                <div className="bg-slate-200 p-1 h-6 animate-pulse items-center flex gap-1 lg:h-8 w-full">
                                </div>

                                {/* price */}

                                <div className="flex items-center gap-2 font-medium text-2xl lg:text-3xl lg:h-8 w-full">
                                    <p className="bg-slate-200 animate-pulse p-1 h-6 lg:h-8 w-full"></p>
                                    <p className="bg-slate-200 animate-pulse p-1 h-6 lg:h-8 w-full"></p>
                                </div>

                                {/* add to cart / buy now */}

                                <div className="flex items-center gap-3 my-2 ">
                                    <button className="h-6 bg-slate-200  rounded px-3 py-1 min-w-[120px] lg:h-8 w-full"></button>
                                    <button className="h-6 bg-slate-200 animate-pulse min-w-[120px] lg:h-8 w-full"> </button>
                                </div>

                                {/* description */}

                                <div>
                                    <p className="bg-slate-200 animate-pulse  rouunded my-1 h-6 lg:h-8 w-full"> </p>
                                    <p className="bg-slate-200 animate-pulse  rouunded my-1 h-6 lg:h-8 w-full"> </p>
                                </div>
                            </div>

                        ) : (
                            <div className="flex flex-col gap-1">
                                <p className="bg-red-200 text-red-600 px-2 rounded-full w-fit"> {data?.brandName}</p>
                                <h2 className="text-2xl lg:text-4xl font-medium"> {data?.productName}</h2>
                                <p className="capitalize text-slate-400"> {data?.category}</p>
                                {/* rating */}
                                <div className=" text-red-600 items-center flex gap-1 ">

                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfAlt />

                                </div>

                                {/* price */}

                                <div className="flex items-center gap-2 font-medium text-2xl lg:text-3xl">
                                    <p className="text-red-600">{displayINRCurrency(data?.sellingPrice)}</p>
                                    <p className="text-slate-400 line-through">{displayINRCurrency(data?.price)}</p>
                                </div>

                                {/* add to cart / buy now */}

                                <div className="flex items-center gap-3 my-2">
                                    <button className="border-2 border-red-600 rounded px-3 py-1 min-w-[120px] text-red-600 font-medium hover:bg-red-600 hover:text-white"> Buy Now</button>
                                    <button className="border-2 bg-red-600 text-white transition-all hover:bg-red-700 cursor-pointer min-w-[120px]"> Add To Cart</button>
                                </div>

                                {/* description */}

                                <div>
                                    <p className="text-slate-600 font-medium my-1"> Description :</p>
                                    <p> {data?.description}</p>
                                </div>
                            </div>

                        )
                    }
                </div>
            </div>

            {
                data?.category && (
                    <VerticalCardProduct category={data?.category} heading={"Recommended Product"} />
                )
            }



        </div >
    )

}

export default ProductDetails