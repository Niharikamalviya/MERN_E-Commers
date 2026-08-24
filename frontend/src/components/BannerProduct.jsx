import React, { useState, useEffect } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import image1 from '../assets/banner/img1.webp'
import image2 from '../assets/banner/img2.webp'
import image3 from '../assets/banner/img3.jpg'
import image4 from '../assets/banner/img4.jpg'
import image5 from '../assets/banner/img5.webp'

import image1Mobile from '../assets/banner/img1_mobile.jpg'
import image2Mobile from '../assets/banner/img2_mobile.webp'
import image3Mobile from '../assets/banner/img3_mobile.jpg'
import image4Mobile from '../assets/banner/img4_mobile.jpg'
import image5Mobile from '../assets/banner/img5_mobile.png'


const BannerProduct = () => {

    const [imageTranslate, setImageTranslate] = useState(0)

    const bannerImages = [
        image1,
        image2,
        image3,
        image4,
        image5
    ]

    const mobileImage = [
        image1Mobile,
        image2Mobile,
        image3Mobile,
        image4Mobile,
        image5Mobile
    ]

    const nextImage = () => {
        if (bannerImages.lenth - 1 > imageTranslate)
            setImageTranslate(preve => preve + 1)
    }

    const preveImage = () => {
        if (imageTranslate != 0)
            setImageTranslate(preve => preve - 1)
    }

    useEffect(() => {
        const interval = setInterval(() => {
            if (bannerImages.lenth - 1 > imageTranslate) {
                nextImage()
            }
            else {
                setImageTranslate(0)
            }

        }, 5000)

        return () => clearInterval(interval)
    }, [imageTranslate])


    return (
        <div className="container mx-auto px-4 rounded overflow-hidden">
            <div className=" relative h-56 md:h-72 w-full bg-slate-200 ">

                <div className="absolute z-10 w-full h-full md:flex hidden items-center  ">
                    <div className="flex justify-between w-full text-3xl text-slate-200">
                        <button
                            onClick={preveImage}
                            className="bg-white shadow-md rounded-full p-1">
                            <IoIosArrowBack />
                        </button>

                        <button
                            onClick={nextImage}
                            className="bg-white shadow-md rounded-full p-1">
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>


                {/* desktop display */}
                <div className="flex w-full h-full overflow-hidden">
                    {
                        bannerImages.map((imageUrl, index) => {
                            return (
                                <div className="w-full h-full  min-w-full min-h-full translate transition-all" key={imageUrl} style={{ transform: `translateX(-${imageTranslate * 100} %)` }}>
                                    <img src={imageUrl} className='w-full h-full' />
                                </div>
                            )
                        })
                    }
                </div>

                {/* mobile display */}

                <div className="flex w-full h-full overflow-hidden md:hidden">
                    {
                        mobileImage.map((imageUrl, index) => {
                            return (
                                <div className="w-full h-full  min-w-full min-h-full translate transition-all" key={imageUrl} style={{ transform: `translateX(-${imageTranslate * 100} %)` }}>
                                    <img src={imageUrl} className='w-full h-full object-cover' />
                                </div>
                            )
                        })
                    }
                </div>


            </div>

        </div >
    )

}
export default BannerProduct