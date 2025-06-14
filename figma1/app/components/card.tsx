import React from 'react'
import Image from 'next/image'
import Info from './info'

const GymCard = () => {
  return (
    <div className='flex border-amber-500 gap-10'>
        <img src="/public/puxada.jpg" alt="puxada" />
        <Info />
        <img src="/public/Icons.png" alt="info" />
    </div>
  )
}

export default GymCard