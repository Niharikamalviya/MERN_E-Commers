
import React, { useState, useEffect, useRef, useContext } from 'react'
import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct'
import { IoIosArrowBack } from "react-icons/io";
import Context from "../context/index";
import { IoIosArrowForward } from "react-icons/io";


const HorizontalCardProduct = ({ category, heading }) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState([])
    const loadingList = new Array(13).fill(null)

    const [scroll, setScroll] = useState(0)
    const scrollElement = useRef()

    const fetchData = async () => {
        setLoading(true)
        const categoryProduct = await fetchCategoryWiseProduct(category)
        setLoading(false)

        console.log("horizontal data", categoryProduct.data)
        setData(categoryProduct?.data)
    }
    const { fetchUserAddToCart } = useContext(Context);

    const handleAddToCart = async (e, id) => {
        await addToCart(e, id)
        fetchUserAddToCart()
    }

    useEffect(() => {
        fetchData()
    }, [])

    const scrollRight = () => {
        scrollElement.current.scrollLeft += 300
    }

    const scrollLeft = () => {
        scrollElement.current.scrollLeft -= 300
    }


    return (
        <div className="container mx-auto px-4 my-6 relative ">

            {/* heading */}
            <h2 className="text-2xl font-semibold py-4"> {heading}
            </h2>

            {/* product image */}
            <div className="flex items-center gap-4 md:gap-6 overflow-scroll scrollbar-none traansition-all "
                ref={scrollElement}>

                {/* button scroll */}
                <div className="flex justify-between w-full text-3xl text-slate-200">
                    <button className="absolute left-0 bg-white shadow-md rounded-full p-1 hidden md:block"
                        onClick={scrollLeft}><IoIosArrowBack /></button>
                    <button className="absolute-rigth-0 bg-white shadow-md rounded-full p-1 hidden md:block"
                        onClick={scrollRight}><IoIosArrowForward /></button>
                </div>

                {
                    loading ? (

                        loadingList?.map((product, index) => {
                            return (
                                <div key={index} className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white flex rounded-sm shadow-md">
                                    <div className="bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px] animate-pulse">

                                    </div>
                                    <div className="p-4 grid w-full gap-2 ">
                                        <h2 className="font-medium md:text-lg text-base text-ellipsis line-clamp-1 bg-slate-200 rounded-full animate-pulse p-1"></h2>
                                        <p className="capitalize text-slate-500 p-1 bg-slate-200 rounded-full animate-pulse"></p>
                                    </div>

                                    <div className="flex gap-3">
                                        <p className="w-full  p-1 bg-slate-200 rounded-full animate-pulse"></p>
                                        <p className="w-full  p-1 bg-slate-200 rounded-full animate-pulse"></p>
                                    </div>

                                    <div>
                                        <button className="text-sm text-white px-2 py-1 rounded-full  w-full bg-slate-200 animate-pulse"></button>
                                    </div>




                                </div>
                            )
                        })
                    ) : (


                        data?.map((product, index) => {
                            return (
                                <Link to={"product-Details/" + product?._id} className="w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] h-36 bg-white flex rounded-sm shadow-md">
                                    <div className="bg-slate-200 h-full p-4 min-w-[120px] md:min-w-[145px]">
                                        <img src={product.productImage[0]} className="object-scale-down h-full hover:scale-110 transition-all" />
                                    </div>
                                    <div className="p-4 grid ">
                                        <h2 className="font-medium md:text-lg text-base text-ellipsis line-clamp-1 ">
                                            {product?.productName}</h2>
                                        <p className="capitalize text-slate-500">
                                            {product?.category}</p>
                                    </div>

                                    <div className="flex gap-3">
                                        <p className="font-medium text-red-500">{displayINRCurrency(product?.sellingPrice)}</p>
                                        <p className="text-slate-500 line-through">{displayINRCurrency(product?.price)}</p>
                                    </div>

                                    <div>
                                        <button className="text-sm bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-full "
                                            onClick={(e) => handleAddToCart(e.product?._id)}>Add to cart</button>
                                    </div>




                                </Link>
                            )
                        })

                    )
                }



            </div>

        </div>
    )

}
export default HorizontalCardProduct