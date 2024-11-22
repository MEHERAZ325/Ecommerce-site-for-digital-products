import React from 'react'
import { FaCarSide, FaCheckCircle, FaWallet } from 'react-icons/fa'

const ServiceData = [
    {
        id: 1,
        icon: <FaCarSide className='text-4xl md:text-5xl text-primary'/>,
        title: "Free Shippng",
        description: "Free Shipping On All Order",
    },
    {
        id: 2,
        icon: <FaCheckCircle className='text-4xl md:text-5xl text-primary'/>,
        title: "Free Shippng",
        description: "Free Shipping On All Order",
    },
    {
        id: 3,
        icon: <FaWallet className='text-4xl md:text-5xl text-primary'/>,
        title: "Free Shippng",
        description: "Free Shipping On All Order",
    },
    {
        id: 4,
        icon: <FaWallet className='text-4xl md:text-5xl text-primary'/>,
        title: "Free Shippng",
        description: "Free Shipping On All Order",
    }
]

const Services = () => {
  return (
    <div className='container mt-14 md:mt-20'>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
            {
                ServiceData.map((data) => (
                    <div data-aos='fade-up'
                    data-aos-delay='220' key={data.id} className='flex flex-col items-center sm:flex-row gap-4'>
                        {data.icon}
                        <div>  
                        <h1 className='lg:text-xl font-bold'>{data.title}</h1>
                        <h1 className='text-gray-400 text-sm'>{data.description}</h1>
                        <h1>{data.title}</h1>
                        </div>
                    </div>
                ))
            }
            <div>

            </div>
        </div>
    </div>
  )
}

export default Services