import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from "framer-motion"

const BuyCredit = () =>
{
  const { user } = useContext(AppContext);
  return (
    <motion.div className='min-h-[80vh] text-center pt-14 mb-10'
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{once: true}}
    >
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>Our Plans</button>
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10 '>Choose Your Plan</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
        {plans.map((item, index) => (
          <div 
            key={index} 
            className="py-12 px-8 bg-white drop-shadow-sm border border-gray-200 rounded-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
          <img 
            src={item.image} 
            alt="Plan Logo"
            width={100}  
            className="mx-auto mb-1"/>
          <p className="text-lg font-semibold text-center">{item.id}</p>
          <p className="text-gray-500 text-center mb-2">{item.desc}</p>
          <p className="text-center font-bold text-xl">
            <span className='text-blue-600 text-3xl font-medium'>${item.price}</span>/ {item.credits} Credits
          </p>
            <button className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52'>{ user ? 'Purchase' : 'Get Started'}</button>
      </div>
  ))}
</div>

    </motion.div>
  )
}

export default BuyCredit
