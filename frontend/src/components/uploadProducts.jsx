import React from 'react'
import { IoMdClose } from "react-icons/io";
import ProductCategory from '../helpers/productCategory'
import { FaCloudUploadAlt } from "react-icons/fa";
import uploadImage from '../helpers/uploadImage'
import { MdDelete } from "react-icons/md";


const uploadProduct = (
    onClose
) => {

    const handleOnChange = (e) => {
        const { name, value } = e.target

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })

    }

    const handleUploadProduct = (e) => {
        const file = e.target.files[0]
        setUploadProductImageInput(file.name)
        console.lpg("file", file)

        const uploadImageCloudinary = await uploadImage(file)

        setData((preve) => {
            return {
                ...preve,
                productImage: [...preve.productImage, uploadImageCloudinary.url]
            }
        })

        console.log("upload Image", uploadImageCloudinary.url)
    }
    const [data, setData] = useState({
        productName: "",
        brandName: "",
        category: "",
        productImage: [],
        description: "",
        price: "",
        selling: ""
    })

    const [openFullImage, setOpenFullImage] = useState(false)
    const [fullScreenImage, setFullScreenImage] = useSate("")
    const [uploadProductImageInput, setUploadProductImageInput] = useState("")

    const handleDeleteImage = async (index) => {
        console.log("image index", index)

        const newProductImage = { ...data.productImage }
        newProductImage.splice(index, 1)

        setData((preve) => {
            return {
                ...preve,
                productImage: [...newProductImage]
            }
        })

    }
    return (
        <div className="absolute w-full h-full right-0 top-0 left-0 bottom-0 flex justify-center items-center">
            <div className="bg-white p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden">

                {/* upload product panel */}
                <div className="flex justify-between items-center ">
                    <h2 className="font-bold text-lg">
                        Upload Product </h2>
                    <div className="w-fit ml-auto text-2xl hover:text-red-200 cursor-pointer"
                        onClick={onClose}>
                        <IoMdClose />

                    </div>

                </div>

                {/* form product data */}
                <form className="grid p-4 gap-1 overflow-y-scroll h-full pb-5">

                    {/* product name */}
                    <label htmlfor='productName'>Product Name :</label>
                    <input type='text'
                        id="productName"
                        placeholder="Enter product name "
                        value={data.productName}
                        name="productName"
                        onChange={handleOnChange}
                        className="p-2 bg-slate-100 border rounded" />

                    {/* brand name */}
                    <label htmlfor='brandName'>Brand Name :</label>
                    <input type='text'
                        id="brandName"
                        placeholder="Enter brand name "
                        value={data.brandName}
                        name="brandName"
                        onChange={handleOnChange}
                        className="p-2 bg-slate-100 border rounded"
                    />

                    {/* category */}

                    <label htmlfor='category'>Category :</label>
                    <select value={data.category}
                        className="p-2 bg-slate-100 border rounded">
                        {
                            ProductCategory.map((el, index) => {
                                return (
                                    <option value={el.value} key={index}>{el.label}</option>
                                )
                            })

                        }

                    </select>

                    {/* product iamge */}

                    <label htmlfor='productImage'>Product Image :</label>
                    <label htmlfor='uploadImage'>
                        <div className="p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer">

                            <div className="text-slate-500 flex flex-col justify-center items-center gap-2">
                                <span className="text-4xl">
                                    <FaCloudUploadAlt />
                                </span>
                                <p className="text-sm">Upload Product Image</p>
                                <input type='file' id='uploadImage' className="hidden"
                                    onChange={handleUploadProduct} />
                            </div>

                        </div>
                    </label>
                    <div>
                        {
                            data?.productImage[0] ? (
                                <div className="flex items-center gap-2">
                                    {
                                        data.productImage.map((ele, index) => {
                                            return (
                                                <div className="relative group">
                                                    <img src={el} width={80} height={80}
                                                        className="bg-slate-100 border cursor-pointer"
                                                        onClick={() => {
                                                            setopenFullImage(true)
                                                            setFullScreenImage(el)

                                                        }} />

                                                    <div className="absolute bottom-0 right-0 p-1 text-white bg-red-600 rounded-full hidden group-hover:block cursor-pointer"
                                                        onClick={() => handleDeleteImage(index)}>
                                                        <MdDelete />
                                                    </div>


                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            ) : (
                                <p className="text-xs">please uplaod the product Image </p>
                            )
                        }

                    </div>




                    {/* price       */}

                    <label htmlfor='price'>Price</label>
                    <input type='number'
                        id="price"
                        placeholder="Enter price"
                        value={data.price}
                        name="price"
                        onChange={handleOnChange}
                        className="p-2 bg-slate-100 border rounded"
                    />

                    {/* selling price       */}

                    <label htmlfor='sellingPrice'>Price</label>
                    <input type='number'
                        id="sellingPrice"
                        placeholder="Enter sellingPrice"
                        value={data.sellingPrice}
                        name="sellingPrice"
                        onChange={handleOnChange}
                        className="p-2 bg-slate-100 border rounded"
                    />


                    {/* description */}

                    <label htmlfor='Description'>Description</label>
                    <input type='text'
                        id="Description"
                        placeholder="Enter Description"
                        value={data.Description}
                        name="Description"
                        onChange={handleOnChange}
                        className="p-2 bg-slate-100 border rounded"
                    />

                    {/* upload button */}

                    <button className="px-3 py-2 hover:bg-red-700 bg-red-600 text-white mb-6">Upload Product</button>
                </form>


            </div >

            {/* display image full screen */}
            {
                openFullImage && (
                    <DisplayImage onClose={() => setopenFullImage(false)} imageUrl={fullScreenImage} />
                )

            }

        </div >
    )

}
export default uploadProduct