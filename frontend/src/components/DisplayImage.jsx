import React from 'react'

const DisplayImage = ({
    imageUrl,
    onClose
}) => {
    return (
        <div className="fixed bottom-0 top-0 bottom-0 right-0 flex justify-center items-center p-2">
            {/* todo create that click expect the image to close the full screen image */}
            <div className="bg-white shadow-lg rounded max-w-5xl mx-auto">
                <div className="flex justify-center p-4 max-h-[80vh] max-w-[80vh]">
                    <img src={imageUrl}
                        className="w-full h-full" />
                </div>
            </div>
        </div>
    )

}
export default DisplayImage