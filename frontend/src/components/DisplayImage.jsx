import React from 'react'

const DisplayImage = ({
    imageUrl,
    onClose
}) => {
    return (
        <div className="flex justify-center p-4">
            <img src={imageUrl}
                className="w-full h-full" />
        </div>
    )

}
export default DisplayImage