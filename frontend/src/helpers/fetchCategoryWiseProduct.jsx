
import summaryApi from "../common/index";
// const { default: SummaryApi } = "../common/index"


const fetchCategoryWiseProduct = async (category) => {
    const response = await fetch(summaryApi.categoryWiseProduct.url, {
        method: summaryApi.categoryWiseProduct.method,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            category: category
        })
    })

    const dataResponse = await response.json()

    return dataResponse

}

export default fetchCategoryWiseProduct