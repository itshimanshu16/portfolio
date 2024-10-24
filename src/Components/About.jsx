import React from 'react'
import { motion } from "framer-motion"

const Toolboxitems = [
  {
    title: "HTML5",
    icon: <img className='  h-10' src="assets/html5.svg" alt="" />,
  },
  {
    title: "Css3",
    icon: <img className='  h-10' src="assets/css3.svg" alt="" />,
  },
  {
    title: "Javascript",
    icon: <img className=' h-10' src="assets/square-js.svg" alt="" />,
  },
  {
    title: "React",
    icon: <img className='   h-10' src="assets/react.svg" alt="" />,
  },
  
]
const About = () => {
  return (
    <div id='about' className='Fullpage w-[100%] h-[100vh] bg-[url(assets/77.jpg)] bg-cover bg-center  '>
      <div className='secondlayer h-[100vh] bg-black bg-opacity-85 backdrop-blur-xl'>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={
            {
              ease: "easeOut",
              duration: 0.5
            }
          }
          className="heading text-4xl font-bold w-full text-center bg-gradient-to-r from-[#00B2E8] to-indigo-300 inline-block text-transparent bg-clip-text">
          ABOUT ME
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={
            {
              ease: "easeOut",
              duration: 0.5
            }
          }
          className="subheading flex flex-col text-center text-xl font-semibold text-gray-400 p-4">
          < span

          >Learn More About Who I Am, What I do,</ span>
          < span

          > And What inspires me</ span>
        </motion.div>
        <div className="boxes  ">

          <div className="first flex justify-center gap-8 mt-5 mb-5 " >

            <motion.div
              initial={{ x: -500, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={
                {
                  ease: "easeOut",
                  duration: 0.8
                }
              }
              className="box1 hidden lg:block w-[25vw] h-[35vh]  bg-white bg-opacity-5 border-2 rounded-xl border-gray-400    ">
              <div className='flex'>
                <span><img className='invert scale-125 p-4 ' src="assets/sparkle.svg" alt="" /></span>
                <span className='text-2xl font-semibold pt-3 '>Qualification</span>
              </div>
              <div className='font-semibold text-base text-gray-400 pl-14'> Here are my some of my Qualifications.  </div>
              <div className='p-8  py-5 '>
                <li><span className='text-lg font-semibold text-gray-300'>8th-12th - </span>  Lucknow,UP </li>
                <li><span className='text-base font-medium text-gray-300'>B.Tech <span className='text-base'>(Mechanical Engineering) - </span> </span><span className='pl-5'>Delhi Technological University  </span></li>


              </div>
            </motion.div>


            <motion.div
              initial={{ x: 500, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={
                {
                  ease: "easeOut",
                  duration: 0.8
                }
              } className="box2 w-[80vw] lg:w-[45vw] h-[35vh]  bg-white bg-opacity-5 border-2 rounded-xl border-gray-400  ">

              <div className='flex'>
                <span><img className='invert scale-125 p-4 ' src="assets/sparkle.svg" alt="" /></span>
                <span className='text-2xl font-semibold pt-3 '>My Toolbox</span>
              </div>
              <div className='  font-semibold text-base text-gray-400 pl-14'>Explore the technologies and Tools I use to make some amazing projects.</div>
              <div className='p-8  lg:hidden py-5 '>
                <li><span className='text-lg font-semibold text-gray-300'>HTML </span>   </li>
                <li><span className='text-lg font-semibold text-gray-300'> CSS  </span></li>
                <li><span className='text-lg font-semibold text-gray-300'> JAVASCRIPT  </span></li>
                <li><span className='text-lg font-semibold text-gray-300'> REACT  </span></li>
                <li><span className='text-lg font-semibold text-gray-300'> NextJS  </span></li>


              </div>
              <div className='lg:flex hidden  pl-10 pt-3 '>

                {Toolboxitems.map((item) => (
                  <div className='h-12 border rounded-xl  flex text-lg p-2 py-1 font-medium m-auto gap-2' key={item.title}>
                    <span>{item.icon}</span>
                    <span className='my-auto'>{item.title}</span>

                  </div>
                ))
                }
              </div>

              <div className='lg:flex hidden'>

                <div className='m-5 ml-12 h-12 border rounded-xl flex w-32 text-lg p-2 py-1 font-medium  gap-2'  >
                  <span className=''><img className='w-9 invert' src="assets/nextjs.svg" alt="" /></span>
                  <span className='my-auto'>NextJs</span>
                </div>
                <div className='h-12 mt-5 border rounded-xl flex w-32 text-lg p-2 py-1 font-medium  gap-2'>
                  <span className=' '><img className='w-7 pt-3 ' src="assets/tailwind.png" alt="" /></span>
                  <span className='my-auto'>Tailwind</span>
                </div>
              </div>

            </motion.div>
          </div>








          <div className="Third flex justify-center gap-8">




          <motion.div
  initial={{ x: -500, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{
    ease: "easeOut",
    duration: 0.8,
  }}
  className="box3 w-[90vw] lg:w-[45vw] h-[35vh] bg-white bg-opacity-5 border-2 rounded-xl border-gray-400"
>
  <div className="flex">
    <span>
      <img className="invert scale-125 p-4" src="assets/sparkle.svg" alt="" />
    </span>
    <span className="text-2xl font-semibold pt-3">Beyond The Code</span>
  </div>
  <div className="font-semibold text-base text-gray-400 pl-8 lg:pl-14">
    Explore my Hobbies and Interests Beyond the Digital Realm.
  </div>
  <div className="p-5 py-5">
    <li>
      <span className="text-lg font-semibold text-gray-300">Photography </span>
    </li>
    <li>
      <span className="text-lg font-semibold text-gray-300">Chess</span>
    </li>
    <li>
      <span className="text-lg font-semibold text-gray-300">Travelling</span>
    </li>
    <li>
      <span className="text-lg font-semibold text-gray-300">Music</span>
    </li>
  </div>
</motion.div>





            <motion.div

              initial={{ x: 500, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={
                {
                  ease: "easeOut",
                  duration: 0.8
                }
              } className="box4 hidden lg:block w-[25vw] h-[35vh]  bg-white bg-opacity-5 border-2 rounded-xl border-gray-400  ">
              <div className='flex'>
                <span><img className='invert scale-125 p-4 ' src="assets/sparkle.svg" alt="" /></span>
                <span className='text-2xl font-semibold pt-3 '>My Reads</span>
              </div>
              <div className='font-semibold text-base text-gray-400 pl-14'> Explore the Books Shaping my Perspective. </div>
              <img className='h-[18vh] mx-auto' src="assets/book-cover.png " alt="" />
            </motion.div>
          </div>
        </div>



      </div>
    </div>
  )
}

export default About