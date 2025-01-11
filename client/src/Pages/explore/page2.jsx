import Navbar from '../../components/Navbar/Navbar'
import Footer2 from '../../components/footer/footer2'
import log from "../../assets/metalogo.png"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required module
import { Navigation } from 'swiper/modules';


const data = [
  {
    image: "https://matse.data:image/jpeg;base64,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.edu/about/what-materials-science-and-engineering",
    description: "adads",
    link: "asdasda"
  },
  {
    image: "src\assets\shreyans.jpg",
    description: "adads",
    link: "asdasda"
  },
  {
    image: "src\assets\shreyans.jpg",
    description: "adads",
    link: "asdasda"
  },
  {
    image: "src\assets\shreyans.jpg",
    description: "adads",
    link: "asdasda"
  },
  {
    image: "src\assets\shreyans.jpg",
    description: "adads",
    link: "asdasda"
  }, {
    image: "src\assets\shreyans.jpg",
    description: "adads",
    link: "asdasda"
  },
  {
    image: "src\assets\shreyans.jpg",
    description: "adads",
    link: "asdasda"
  },
]

const Page2 = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          background: "radial-gradient(rgb(82 27 88) 0.5%, rgb(00 00 00)",
        }}
      >
        {/* upper section -- About Metallurgy  */}
        <div className="flex flex-wrap justify-center  mt-5 mx-2">
          <div className="lg:w-1/3  p-4">
            <img src={"https://miro.medium.com/v2/resize:fit:1400/1*CY7USkuewWM-_DJhwjf1QA.jpeg"} alt="Photo" className="w-[450px] h-[350]] object-cover rounded-lg" />
          </div>
          <div className="lg:w-2/3 p-4 mt-5">
            <h2 className="lg:text-5xl sm:text-3xl font-bold mb-5 text-neutral-300 ">About Materials Science</h2>
            <p className="text-xl text-neutral-400">Materials Science is a dynamic and interdisciplinary field situated at the intersection of natural sciences and engineering, dedicated to understanding, designing, and improving materials that shape our world. By exploring the fundamental properties and behaviors of substances, it provides insights into how atomic and molecular structures influence material performance. This knowledge enables scientists and engineers to innovate new materials, optimize existing ones, and tailor their properties for specific applications, ranging from advanced electronics and renewable energy to medical devices and sustainable infrastructure. In essence, Materials Science drives progress by transforming raw substances into high-performance solutions that address real-world challenges.</p>
          </div>
        </div>

        {/* swiper */}
        <div className='pr-2 pl-2 mr-20 ml-20'>
          <h2 className='text-center lg:text-5xl sm:text-3xl text-neutral-400 mb-7 '>Activities</h2>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            
              {data.map((slide, index) => (
                <SwiperSlide>
                  <div key={index} className='flex justify-center items-center mb-5'>
                  <div  className='relative w-[720px] h-[432px] overflow-hidden rounded-lg group '>
                    <img
                      src={slide.image} alt="image"
                      className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 '
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-lg mb-2">{slide.description}</p>
                      
                    </div>
                  </div>
                  </div>
                </SwiperSlide>
              ))}
         
          </Swiper>

        </div>

        {/* lower part -- link */}
        <div className=" body-font mt-3">
          <div className="container px-5 pt-3 pb-5 mx-auto">
            <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 className="flex-grow sm:pr-16 text-xl font-medium title-font text-neutral-300">
                For more information kindly refer to the given link!!
              </h1>
              {/* add link here */}
              <a href="https://www.youtube.com/watch?v=H5o9qS_Vfz0">
                <button className="flex-shrink-0 text-white bg-custom-purple border-0 py-2 px-8 focus:outline-none hover:bg-purple-bg rounded text-lg mt-10 sm:mt-0">
                  Learn More..
                </button></a>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </>
  )
}

export default Page2