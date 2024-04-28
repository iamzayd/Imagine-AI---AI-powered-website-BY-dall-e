import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { logo3, video, photo } from '../assets';
import { Footer } from '../components';

const Welcome = () => {
  return (
    <>
      <div className="fixed top-0 w-full p-0  flex justify-between items-center bg-white sm:px-8 px-3 py-4 border-b border-b-[#e6ebf4] z-50">
        <div className='logo items-center flex'>
          <Link to="/">
            <img src={logo3} alt="Logo" className="ml--10 w-60 object-contain" />
          </Link>
        </div>
        <nav>
          <ul className="flex items-center space-x-6">
            <li>
              <Link to="/home" className="font-inter mr-3 font-medium bg-[#ff7dad] text-white px-4 py-2 rounded-md hover:bg-[#f2568f]">Community Showcase</Link>
            </li>
            <li>
              <Link to="/create-post" className="font-inter mr-10 font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md hover:bg-blue-700">Try Imagine AI</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div id ="intro" data-scroll data-scroll-section data-scroll-speed=".1" className='relative w-full py-0 bg-[#ffffff]'>
            <div className='text border-t-0 border-b-0 border-[#acdbff] relative overflow-hidden'>
            <img className='w-200 h-200' src= {photo} alt="DALL-E" />

                <div  className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <p className='text-center font-["Unbounded"] mb-1.5 text-[120px] pt-20 font-bold'>• Introducing DALL E 3 •</p>
                    <a href="https://cdn.openai.com/papers/dall-e-3.pdf" className="bg-indigo-400 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded">Learn More</a>
                </div>
            </div>
        </div>



    <div id="dalle" className='w-screen h-50vh bg-white text-[#2a2a2b] text-[50px] mt-20'>
  <div className="flex items-center mt-20">
    <hr className='w-1/3 border border-black mr-20 ml-10' /> <p className='text-[40px] font-["Unbounded"]'> About DALL 3 </p> <hr className="ml-20 mr--10 w-1/3 border border-black" />
  </div>
  <p className='ml-8 mt-10 mr-10 font-["Unbounded"] text-[40px]'>Modern text-to-image systems have a tendency to ignore words or descriptions, forcing users to learn prompt engineering.</p>
  <p className='ml-8 mt-10 mr-10 font-["Unbounded"] text-[40px]'>DALL·E 3 represents a leap forward in our ability to generate images that exactly adhere to the text you provide.</p>
  <hr className='w-100 border border-black mt-20' />
</div>

<div id="safety" data-scroll data-scroll-section data-scroll-speed=".001" className='w-full h-full  bg-[#acdbff]'>
        <div className='text border-t-10 border-b-7 border-[#acdbff] flex align-center overflow-hidden whitespace-nowrap'>
        <motion.h1 initial={{x:"0"}} animate={{x:"-300%"}} transition={{repeat: Infinity, ease: "linear", duration:7}} className='text-[10vw] sm:text-[6vw] leading-none font-["Unbounded"] font-semibold uppercase pt-7 pb-7 pr-10'>We Are Imagine AI •</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-300%"}} transition={{repeat: Infinity, ease: "linear", duration:7}} className='text-[10vw] sm:text-[6vw] leading-none font-["Unbounded"] font-semibold uppercase pt-7 pb-7 pr-10'>We Are Imagine AI •</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-300%"}} transition={{repeat: Infinity, ease: "linear", duration:7}} className='text-[10vw] sm:text-[6vw] leading-none font-["Unbounded"] font-semibold uppercase pt-7 pb-7 pr-10'>We Are Imagine AI •</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-300%"}} transition={{repeat: Infinity, ease: "linear", duration:7}} className='text-[10vw] sm:text-[6vw] leading-none font-["Unbounded"] font-semibold uppercase pt-7 pb-7 pr-10'>We Are Imagine AI •</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-300%"}} transition={{repeat: Infinity, ease: "linear", duration:7}} className='text-[10vw] sm:text-[6vw] leading-none font-["Unbounded"] font-semibold uppercase pt-7 pb-7 pr-10'>We Are Imagine AI •</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-300%"}} transition={{repeat: Infinity, ease: "linear", duration:7}} className='text-[10vw] sm:text-[6vw] leading-none font-["Unbounded"] font-semibold uppercase pt-7 pb-7 pr-10'>We Are Imagine AI •</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-300%"}} transition={{repeat: Infinity, ease: "linear", duration:7}} className='text-[10vw] sm:text-[6vw] leading-none font-["Unbounded"] font-semibold uppercase pt-7 pb-7 pr-10'>We Are Imagine AI •</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-300%"}} transition={{repeat: Infinity, ease: "linear", duration:7}} className='text-[10vw] sm:text-[6vw] leading-none font-["Unbounded"] font-semibold uppercase pt-7 pb-7 pr-10'>We Are Imagine AI •</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-300%"}} transition={{repeat: Infinity, ease: "linear", duration:7}} className='text-[10vw] sm:text-[6vw] leading-none font-["Unbounded"] font-semibold uppercase pt-7 pb-7 pr-10'>We Are Imagine AI •</motion.h1>
        <motion.h1 initial={{x:"0"}} animate={{x:"-300%"}} transition={{repeat: Infinity, ease: "linear", duration:7}} className='text-[10vw] sm:text-[6vw] leading-none font-["Unbounded"] font-semibold uppercase pt-7 pb-7 pr-10'>We Are Imagine AI •</motion.h1>
        </div>
        <hr className='w-100 border border-black mt-00' />
    </div>



<div className=' w-screen h-40vh bg-white mb--15'>


<p className='ml-8 mt-20 mr-10 font-["Consolas"] text-[30px]'>A focus on safety</p>
  <p className='ml-8 mt-5 mr-10 font-["Verdana"] text-[15 px]'>Like previous versions, we’ve taken steps to limit DALL·E 3’s ability to generate violent, adult, or hateful content.</p>
  <hr className='ml-8 w-100 border border-black-200 mt-10' />

  <p className='ml-8 mt-20 mr-10 font-["Consolas"] text-[30px]'>Preventing harmful generations</p>
  <p className='ml-8 mt-5 mr-10 font-["Verdana"] text-[15 px]'>
DALL·E 3 has mitigations to decline requests that ask for a public figure by name. We improved safety performance in risk areas like generation of public figures and harmful biases related to visual over/under-representation, in partnership with red teamers—domain experts who stress-test the model—to help inform our risk assessment and mitigation efforts in areas like propaganda and misinformation.</p>
  <hr className='ml-8 w-100 border border-black-200 mt-10' />

  <p id="try" className='ml-8 mt-20 mr-10 font-["Consolas"] text-[30px]'>Internal testing</p>
  <p className='ml-8 mt-5 mr-10 font-["Verdana"] text-[15 px]'>We’re also researching the best ways to help people identify when an image was created with AI. We’re experimenting with a provenance classifier—a new internal tool that can help us identify whether or not an image was generated by DALL·E 3—and hope to use this tool to better understand the ways generated images might be used. We’ll share more soon.</p>
  <hr className='w-100 border border-black mt-10' />


</div>


<div className='w-full h-full bg-white mt-10'>
<Link to="/home">
<p  className='ml-8 flex justify-center place-items-center mr-10 font-["Unbounded"] text-[40px] bg-white rounded-md px-4 py-2 hover:text-[#6469ff] cursor-pointer'> 👉 Try Imagine AI Today 👈 </p>
</Link>

<p className='font-["Consolas"] mt-5 flex justify-center'>Join the open community and display your most creative ideas using images generated by DALL 3 and watch them as they are bought to life.</p>
    <hr className='w-100 border border-black mt-10' />
</div>

<div className='w-full h-70vh ml-8 mt-10 mb-20 bg-white '>
    <p className='text-[20px] font-["Consolas"]'>Imagine AI © 2015-2024</p>
    <a href="https://www.instagram.com/openai/?hl=en" className='text-[18px] font-["Consolas"] hover:text-[#E1306C]'>Instagram</a>
    <a href="https://www.facebook.com/openai/" className='ml-10 text-[18px] font-["Consolas"] hover:text-[#2a3c87]'>Facebook</a>
    <a href="https://twitter.com/OpenAI?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className='ml-10 text-[18px] font-["Consolas"] hover:text-[#1DA1F2]'>Twitter</a>
    <a href="https://www.reddit.com/r/OpenAI/" className='ml-10 text-[18px] font-["Consolas"] hover:text-[#FF4500]'>Reddit</a>


    <hr className='w-100 border border-gray-300 mt-5 mb-5' />

    <a href="#intro" className='text-[22px] font-["Consolas"] hover:text-[#49ffc5]'>Intro</a>
    <a href="#dalle" className='ml-10 text-[22px] font-["Consolas"] hover:text-[#ff4ea0]'>About DALL-E 3</a>
    <a href="#safety" className='ml-10 text-[22px] font-["Consolas"] hover:text-[#359e9a]'>Safety And Testing</a>
    <a href="#try" className='ml-10 text-[22px] font-["Consolas"] hover:text-[#ff4d4d]'>Try Imagine AI</a>



</div>

<div className='w-full h-full'>
  <div className="mt-spacing-7 pb-spacing-7 bg-inverse" aria-hidden="true">
    <Footer/>
  </div>
</div>

   

    </>
  )
}

export default Welcome
