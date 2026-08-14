
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import summaryApi from '../common/index'

const searchBar = () => {

    const query = useLocation()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)


    console.log("query", query.search)

    const fetchproduct = async () => {
        setLoading(true)
        const response = await fetch(summaryApi.searchBar.url + query.search)
        const dataResponse = await response.json()
        setLoading(false)

        setData(dataResponse.data)

        console.log("dataresponse", dataResponse)
    }

    useEffect(() => {
        fetchProduct()
    }, [query])


    return (
        <div className="container mx-auto p-4">
            <div>

                {
                    loading && (
                        <p className="text-lg text-center">Loading.....</p>
                    )
                }

                <p>Search Result : {data.length}</p>
                {
                    data.length === 0 && !loading && (
                        <p className="bg-white text-lg text-center p-4">NO Data Found.........</p>
                    )
                }

                {
                    data.length !== 0 && !loading && (
                        data.map((product, index) => {
                            return (
                                <VertiicalCard loadig={loading} data={product} />
                            )

                        })
                    )

                }

            </div>

        </div>
    )

}
export default searchBar