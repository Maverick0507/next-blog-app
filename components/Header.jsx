import React from "react";
import { assets } from "@/Assets/assets";
import Image from "next/image";

const Header = () => {
  console.log("Logo path:", assets.logo); 

  return (
    <div className="py-5 px-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        <Image
          src={assets.logo}
          width={180}
          alt=""
          className="w-[130px] sm:w-auto"
        />
        <button className="flex items-center gap-2 font-medium py -1 px-3 sm:py-3 sm:px-6 border border-gray-300 shadow-[-7px_7px_0px_#172554]  rounded-lg text-sm sm:text-base">
          Create Blog <Image src={assets.arrow} />
        </button>
      </div>

      <div className= 'text-center my-8'>
        <h1 className='text-3xl sm:text-5xl text-blue-950 font-medium'>Latest Blogs</h1>
        <p className= 'mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem Ipsum</p>
        <form className= 'flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-x-gray-300 shadow-[-7px_7px_0px_#172554] rounded-lg' action="">
            <input type="email" placeholder="Enter your email" className= 'pl-4 outline-none rounded-lg'/>
            <button type= 'submit' className= 'border-l border-gray-300 py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
        </form>

      </div>
    </div>
  );
};

export default Header;
