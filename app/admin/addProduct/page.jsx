'use client'
import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
     <form className='pt-5 px-5 sm:pt-12 sm:pl-16'>
           <p className='text-xl'>Upload Thumbnail</p>
           <label>
            <Image className= 'mt-4'src={assets.upload_area} width={140} height={140}/>
           </label>
     </form>
    </>
  )
}

export default page