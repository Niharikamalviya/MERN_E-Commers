import React from 'react'
import { useParams } from 'react-router-dom'


const categoryProduct = () => {

    const params = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [selectCategory, setSelectCategory] = useState({})
    const [filterCategoryList, setFilterCategoryList]

    const fetchData = async () => {
        const response = await fetch(summaryApi.filterProduct.url, {
            method: summaryApi.filterProduct.method,
            header: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                category: filterCategoryList
            })
        })

        const dataResponse = await response.json()

        setData(dataResponse?.data || [])
        console.log(dataResponse)
    }

    const handleSelectCategory = (e) => {
        const { name, value, cheched } = e.target

        setSelectCategory((preve) => {
            return {
                ...preve,
                [value]: checked
            }
        })

        console.log("selected category", name, value, checked)


    }

    useEffect(() => {
        fetchData()
    }, [filterCategoryList])

    useEffect(() => {

        const arrayOfCategory = Object.keys(selectCategory).map(categoryName => {

            if (selecteCategory[categoryName]) {
                return categoryName

            }
            return null

        }).filter(el => el)

        setFilterCategoryList(arrayOfCategory)

        console.log("array of category", arrayOfCategory)
    }, [selectCategory])

    {/* {params?.categoryName} */ }
    return (
        <div className="container mx-auto p-4">

            {/* desktop version */}
            <div className="hidden lg:grid grid-cols-[200px , 1fr]">

                {/* left side */}
                <div className="bg-white p-2 min-h[calc(100vh -120px)] overflow-y-scroll">

                    {/* sort by */}
                    <div className=''>
                        <h3 className="text-base uppercase font-medium tex-slate-500 border-b border-slate-300 pb-2">
                            sort by
                        </h3>

                        <form className='text-sm flex flex-col gap-2 py-2'>
                            <div className="flex items-center gap-3">
                                <input type='radio' name="sort" />
                                <label> Price - Low to high</label>
                            </div>

                            <div className="flx items-center gap-3">
                                <input type='radio' name="sortBy" />
                                <label> Price - High to low</label>
                            </div>


                        </form>
                    </div>

                    {/* filter by */}
                    <div className=''>
                        <h3 className="text-base uppercase font-medium tex-slate-500 border-b border-slate-300 pb-2">
                            filter by
                        </h3>

                        <form className='text-sm flex flex-col gap-2 py-2'>
                            {
                                productCategory.map((categoryName, index) => {
                                    return (
                                        <div className='flex items-center gap-3'>
                                            <input type='checkbox' name={"category"} id={categoryName?.value} checked={selectCategory[categoryName?.value]} value={categoryName?.value} onChange={handleSelectCategory} />
                                            <label htmlFor={categoryName?.value}> {categoryName?.value}</label>
                                        </div>
                                    )
                                })
                            }

                        </form>
                    </div>

                </div>

                {/* right side */}
                <div>
                    {
                        data.length !== 0 && !loading && (
                            <verticalCard data={data} loading={loading} />

                        )
                    }
                </div>
            </div>

        </div>
    )

}
export default categoryProduct