import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-slate-100'>
     <div className='px-2 sm:pl-14 py-3 border border-black'>
       <Image src ={assets.logo} width={120} alt=''/>
     </div>
     <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
        <Link href= '/admin/addProduct' className='flex items-center border border-black gap-3 font-medium px-3 py2 bg-white shadow-[-5px_5px_0px]'>

            <Image src={assets.add_icon} alt='' width ={28} /><p>Add blogs</p>

        </Link>

        <Link href= '/admin/blogList' className='flex items-center mt-5 border border-black gap-3 font-medium px-3 py2 bg-white shadow-[-5px_5px_0px]'>

            <Image src={assets.blog_icon} alt='' width ={28} /><p>Blog lists</p>

        </Link>

        <Link href= '/admin/subscriptions' className='flex items-center mt-5 border border-black gap-3 font-medium px-3 py2 bg-white shadow-[-5px_5px_0px]'>

            <Image src={assets.email_icon} alt='' width ={28} /><p>Subscriptions</p>

        </Link>

     </div>
    </div>
  )
}

export default Sidebar