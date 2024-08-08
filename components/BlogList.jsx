import { blog_data } from "@/Assets/assets";
import React from "react";
import BlogItem from "./BlogItem";
import { useState } from "react";

const BlogList = () => {
  
    const [menu,setMenu] = useState("All");
  
    return (
    <div>
    <div className="flex justify-center gap-6 my-10 ">
      <button onClick={()=>setMenu('All')}className={menu=="All"?'bg-blue-950 text-white py-1 px-4 rounded-lg':""}>All</button>
      <button onClick={()=>setMenu('Technology')}className={menu=="Technology"?'bg-blue-950 text-white py-1 px-4 rounded-lg':""}>Technology</button>
      <button onClick={()=>setMenu('Startup')}className={menu=="Startup"?'bg-blue-950 text-white py-1 px-4 rounded-lg':""}>Startup</button>
      <button onClick={()=>setMenu('Lifestyle')}className={menu=="Lifestyle"?'bg-blue-950 text-white py-1 px-4 rounded-lg':""}>Lifestyle</button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blog_data.filter((item) => menu==="All" ? true:item.category===menu).map((item, index) => {
          return (
            <BlogItem
              key={index}
              id={item.id}
              image={item.image}
              title={item.title}
              decription={item.description}
              category={item.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
