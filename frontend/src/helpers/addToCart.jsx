import SummaryApi from "../common/index"

const addToCart = (e, id) => {
    e?.stopPropagation()
    e?.preventDefault()

    const response = await fetch(SummaryApi.addToCartProduct.url, {
        method: summaryApi.addToCartProduct.method,
        credentials: 'include',
        headers: {
            "content-type": "application/json"
        },

        body: JSON.stringify(
            { productId: id }

        )
    })

    const response = await response.json()

    if (responseData.success) {
        toast.success(responseData.message)

    }

}

export default addToCart