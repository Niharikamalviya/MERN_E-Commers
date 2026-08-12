import React, { useState } from 'react'

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
                                    <div key={index} className="w-full bg-white h-32 my-2 border-slate-300 animate-pulse rounded">
                                        <div className="w-32 h-full bg-slate-200">
                                            <img src={product?.productId?.productImage[0]} className="w-full h-full object-scale-down mix-blend-multipy" />
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
                                total
                            </div>
                        ) : (
                            <div className="h-36 bg-slate-200">
                                total
                            </div>
                        )
                    }
                </div>


            </div>
        </div>
    )

}
export default Cart