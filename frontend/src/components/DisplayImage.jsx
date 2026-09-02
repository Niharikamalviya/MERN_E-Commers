import React from 'react'
import { IoMdClose } from "react-icons/io";

const DisplayImage = ({
    imageUrl,
    onClose
}) => {




    return (
        <div className="fixed bottom-0 top-0 bottom-0 right-0 flex justify-center items-center p-2">
            {/* todo create that click expect the image to close the full screen image */}

            <div
                className="  fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                <div className=" relative bg-white shadow-lg rounded max-w-5xl mx-auto">
                    <div className="flex justify-center p-4 max-h-[80vh] max-w-[80vh]">
                        <img src={imageUrl}
                            className="w-full h-full"
                        />
                    </div>


                    <button
                        onClick={onClose}

                        className="absolute top-5 right-5 text-3xl"
                    >
                        <IoMdClose />
                    </button>
                </div>

            </div>



        </div>
    )

}
export default DisplayImage