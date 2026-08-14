import React, { useState } from 'react'
import { RiDeleteBin7Fill } from "react-icons/ri";


const Cart = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const context = useContext(Context)
    const loading = new Array(context.cartProductCount).fill(null)

    const fetchData = async () => {
        setLoading(true)
        const response = await fetch(summaryApi.addToCartView.url, {
            method: summaryApi.addToCartView.method,
            creadentials: 'include',
            headers: {
                "content-type": "application"
            },


        })
        setLoading(false)

        const responseData = await response.json()

        if (responseData.success) {
            setData(responseData.data)
        }



    }

    useEffect(() => {
        fetchData()
    }, [])

    const increaseQty = async (id) => {
        const response = await fetch(summaryApi.updateCartProduct.url, {
            method: summaryApi.updateCartProduct.method,
            credentails: "include",
            headers: {
                "content-type": "application/json"
            },

            body: Json.stringify(
                {
                    _id: id,
                    quantity: qty + 1
                }
            )

        })

        const responseData = await response.json()

        if (responseData.success) {
            fetchData()
        }
    }

    const decreaseQty = async (id) => {
        if (qty >= 2) {
            const response = await fetch(summaryApi.updateCartProduct.url, {
                method: summaryApi.updateCartProduct.method,
                credentails: "include",
                headers: {
                    "content-type": "application/json"
                },

                body: Json.stringify(
                    {
                        _id: id,
                        quantity: qty - 1
                    }
                )

            })

            const responseData = await response.json()

            if (responseData.success) {
                fetchData()
            }
        }
    }

    const deleteCartProduct = async (id) => {

        const response = await fetch(summaryApi.deleteCartProduct.url, {
            method: summaryApi.deleteCartProduct.method,
            credentails: "include",
            headers: {
                "content-type": "application/json"
            },

            body: Json.stringify(
                {
                    _id: id,

                }
            )

        })

        const responseData = await response.json()

        if (responseData.success) {
            fetchData()
            context.fetchUserAddToCart()
        }

    }

    const totalQty = data.reduce((previousValue, currentValue) => previousValue + currentValue.quantity, 0)
    const totalPrice = data.reduce((preve, currentValue) => preve + (currentValue.quantity * currentValue?.productId?.sellingPrice), 0)

    return (
        <div className="container mx-auto">

            <div className="text-center taxt-lg my-3">
                {
                    data.length === 0 && !loading && (
                        <p className="bg-white py-5">Empty Cart</p>
                    )
                }
            </div>



            <div className="flex flex-col lg:flex-row gap-10 lg:justify-between">


                {/* products */}
                <div className="w-full max-w-3xl">
                    {
                        loading ? (
                            loadingCart.map(el => {
                                return (
                                    <div kay={el + "Add To Cart Loading"} className="w-full bg-slate-200 h-32 my-2 border-slate-300 animate-pulse rounded">
                                    </div>
                                )
                            })

                        ) : (

                            data.map((product, index) => {
                                return (
                                    <div key={index} className="w-full bg-white h-32 my-2 border-slate-300 animate-pulse rounded grid grid-cols-[128px, 1fr]">
                                        <div className="w-32 h-full bg-slate-200">
                                            <img src={product?.productId?.productImage[0]} className="w-full h-full object-scale-down mix-blend-multipy" />
                                        </div>
                                        <div className="px-4 py-2 relative">

                                            {/* delete cart  */}
                                            <div className="absolute right-0 text-red-600 rounded-full hover:text-white hover:bg-red-600 cursor-pointer"
                                                onClick={() => deleteCartProduct(product?._id)}>
                                                <RiDeleteBin7Fill />
                                            </div>

                                            <h2 className="text-lg lg:text-2xl text-ellipsis line-clamp-1"> {product?.productId?.productName}</h2>
                                            <p className="capitalize text-slate-500 ">{product?.productId?.category}</p>

                                            <div className="flex items-center justify-between">
                                                <p className="font-medium text-lg text-red-600">{displayINRCurrency(product?.productId?.sellingPrice)}</p>
                                                <p className="font-medium text-lg text-slate-600">{displayINRCurrency(product?.productId?.sellingPrice * product?.quantity)}</p>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <button className="border border-red-600 text-red-600 w-6 h-6 flex justify-center items-center rounded hover:bg-red-600 hover:text-white"
                                                    onClick={() => decreaseQty(product?.id, product?.quantity)}>-</button>
                                                <spna>{product?.quantity}</spna>
                                                <button className="border border-red-600 text-red-600 w-6 h-6 flex justify-center items-center rounded hover:bg-red-600 hover:text-white"
                                                    onClick={() => increaseQty(product?.id, product?.quantity)}>+</button>
                                            </div>
                                        </div>


                                    </div>
                                )
                            })

                        )
                    }
                </div>

                {/* total product */}

                <div className="mt-5 lg:mt-0 w-full max-w-sm">
                    {
                        loading ? (
                            <div className="h-36 bg-slate-200 border border-slate-300 animate-pulse ">

                            </div>
                        ) : (
                            <div className="h-36 bg-white">
                                <h2 className="text-white bg-red-600 px-4 py-1" > Summary</h2>
                                <div className="flex items-center justify-between p-4 gap-2 font-medium text-slate-600 text-lg">
                                    <p>Quantity :</p>
                                    <p>{totalQty}</p>
                                </div>

                                <div className="flex items-center justify-between p-4 gap-2 font-medium text-slate-600 text-lg">
                                    <p>Total Price : </p>
                                    <p>{displayINRCurrency(totalPrice)}</p>
                                </div>

                                <button className="bg-blue-600 p-2 text-white w-full mt-2 ">
                                    Pay Now
                                </button>
                            </div>
                        )
                    }
                </div>


            </div>
        </div>
    )

}
export default Cart