import React from "react";
import BlogBanner from '../sections/BlogBanner';
import Footer from "../sections/Footer"
import Navbar from "../components/Navbar";
import BlogPost from "../sections/BlogPost";
import Banner from "../components/Banner";

const Blog = ()=> {
  return(
    <>
      <div className="Loader"></div>
		  <div className="wrapper"> 
        <BlogBanner/> 
      </div>
    {/* 
     <Navbar/>
    <BlogPost />
    <Footer /> */}  
    </>
  )
}
export default Blog