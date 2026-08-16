
const { default: summaryApi } = "../common/index"

const fetchCategoryWiseProduct = async (category) => {
    const response = await fetch(summaryApi.categoryWieProduct.Url, {
        method: summaryApi.categoryWiseproduct.method,
        headder: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            category: category
        })
    })

    const dataResponse = await response.json()

    return dataResponse

}

export default fetchCategoryWiseProduct