import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
    return (
        <div>

            <CategoryList />
            <BannerProduct />
            <HorizontalCardProduct category={"airpodes"} heading={"Top's Airpods"} />
            <HorizontalCardProduct category={"watches"} heading={"popular Watches "} />

            <VerticalCardProduct category={"mobiles"} heading={"Mobiles"} />
            <VerticalCardProduct category={"mouse"} heading={"Mouses"} />
            <VerticalCardProduct category={"camera"} heading={"Camera"} />
            <VerticalCardProduct category={"printer"} heading={"Printers"} />
            <VerticalCardProduct category={"processor"} heading={"Proessor"} />
            <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"} />
            <VerticalCardProduct category={"speaker"} heading={"Speaker"} />
            <VerticalCardProduct category={"television"} heading={"Television"} />
            <VerticalCardProduct category={"trimmer"} heading={"Trimmers"} />
            <VerticalCardProduct category={"earphones"} heading={"Earphones"} />



        </div>
    )

}
export default Home