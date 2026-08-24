const url = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_NAME}/image/upload`

const uploadImage = async (image) => {
    const formData = new FormData()
    formData.append("file", image)
    formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET)

    const dataResponse = await fetch(url, {
        method: "post",
        body: formData
    })

    const result = await dataResponse.json()

    if (!dataResponse.ok) {
        console.error("Cloudinary upload error:", result)
    }

    return result


}

export default uploadImage 