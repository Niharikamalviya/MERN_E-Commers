import React from 'react'
import Image from '../assets/logo.png'

const Logo = () => {
    return (
        <div>
            <img src={Image} alt="logo"
                className="w-[300px] h-[60px]" />

        </div>
    )

}
export default Logo