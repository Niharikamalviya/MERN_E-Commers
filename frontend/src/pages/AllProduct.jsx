import React from 'react'
import UploadProduct from '../components/UploadProduct'

const AllProduct = () => {
    const [openUploadProduct, setOpenUploadProduct] = useState(false)
    return (
        <div>

            <div className="bg-white py-2 px-4 flex justify-between items-center">
                <h1 className="font-bold text-lg"> AllProduct</h1>
                <button className="border-2 border-red-600 text-red-600 hover:text-white hover:bg-red-600 transiiton-all duration-200 py-1 px-3  rounded-full"
                    onClick={() => setOpenUploadProduct(true)}
                >Upload Product</button>

            </div>

            {/* uplaod product components */}

            {
                openUploadProduct && (
                    <UploadProduct
                        onClose={() => setOpenUploadProduct(false)} />
                )
            }



        </div>
    )

}
export default AllProduct