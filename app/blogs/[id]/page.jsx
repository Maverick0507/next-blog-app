'use client'
import { assets, blog_data } from "@/Assets/assets";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = ({ params }) => {
  const [data, setData] = useState(null);

  const fetchBlogData = () => {
    for(let i = 0; i < blog_data.length; i++) {
      if (Number(params.id)===blog_data[i].id) {
        setData(blog_data[i]);
        console.log(blog_data[i]);
        break;
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [])

  return  (data ?
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
         <Link href='/'>
         
          <Image
            src={assets.logo}
            width={180}
            alt=""
            className="w-[130px] sm:w-auto"
          />
          </Link>
          
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#172554] rounded-lg">
            Get Started <Image src={assets.arrow} alt="" />
          </button>
        </div>

        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data.title}
          </h1>
          <Image className="mx-auto mt-6 border border-white rounded-full" src={data.author_img} width={60} height={60} alt=''/>
          <p className= 'mt-1 pb-2 text-large max-w-[740px] mx-auto'>{data.author}</p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
         <Image src={data.image} alt="" width={1280} height={720} className="rounded-lg"/>
         <h1 className="my-8 text-[26px] font-semibold">Introduction</h1>
         <p>{data.description}</p>
         <h3 className="my-5 text-[18px] font-semibold" >Step 1: Self-Reflection and Goal Setting</h3>
         <p className="my-3">Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
         <p className="my-3">Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
         <h3 className="my-5 text-[18px] font-semibold" >Step 1: Self-Reflection and Goal Setting</h3>
         <p className="my-3">Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
         <p className="my-3">Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
         <h3 className="my-5 text-[18px] font-semibold" >Step 1: Self-Reflection and Goal Setting</h3>
         <p className="my-3">Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
         <p className="my-3">Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
         <h3 className="my-5 text-[18px] font-semibold" >Step 1: Self-Reflection and Goal Setting</h3>
         <p className="my-3">Before you can manage your lifestyle, you must have a clear understanding of what you want to achieve. Start by reflecting on your values, aspirations, and long-term goals.</p>
         <div className="my-24">
            <p className="text-black font font-semibold my-4">Share this article</p>
            <div className="flex gap-4">
              <Image src={assets.facebook_icon} alt="" width={40}/>
              <Image src={assets.twitter_icon} alt="" width={40}/>
              <Image src={assets.googleplus_icon} alt="" width={40}/>
         </div>
      </div>
      </div>
      <Footer/>
    </>
    :
    <></>
  );
};

export default page;
