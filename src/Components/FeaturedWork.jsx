import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const FeaturedWork = () => {
    const ref = useRef();

    // Scroll progress setup
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className='flex flex-col justify-center bg-[url(../src/assets/images/77.jpg)] bg-cover bg-center' ref={ref}>
            <div className='secondlayer h-full bg-black bg-opacity-85 backdrop-blur-xl'>
                {/* Sticky heading and progress bar container */}
                <div className="sticky top-0 z-50 bg-transparent my-5 bg-opacity-90 w-full">
                    <motion.div
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{
                            ease: "easeOut",
                            duration: 0.5,
                        }}
                        className="heading text-[#00B2E8] text-5xl px-10 py-5 flex justify-center font-semibold"
                    >
                        Featured Work
                    </motion.div>

                    {/* Sticky Progress bar */}
                    <motion.div style={{ scaleX }} className="progress-bar h-[10px] bg-white w-full"></motion.div>
                </div>

                <div className="projects flex flex-col justify-center items-center text-center gap-28">

                    {/* Karate Master Project */}

                    <div className="sticky top-28 hover:scale-105 transition-all duration-300 w-[70vw] h-[70vh] border-none pl-5 rounded-3xl bg-zinc-950 flex flex-col 2xl:flex-row justify-center items-center text-center">
                        <img className='w-[60vw] h-[40vh] 2xl:w-[35vw] 2xl:h-[50vh] object-contain border-none rounded-xl' src="src/assets/images/88.png" alt="Karate Master" />
                        <div className='p-10'>
                            <div className='text-xl 2xl:text-2xl font-semibold'>Karate Master</div>
                            <div className='text-sm 2xl:text-base'>
                                "I created Karate Master, a responsive website for a martial arts school. With bold design elements and intuitive navigation, it showcases class details, instructor info, and testimonials. The site highlights my ability to design visually appealing and user-friendly websites tailored to client needs."
                            </div>
                            <a href="https://github.com/itshimanshu16/KarateMaster" target="_blank" rel="noopener noreferrer">
                                <button className='bg-[#00B2E8] px-8 py-2 my-2  border-none rounded-xl '  >
                                    Click Here!!
                                </button></a>
                        </div>
                    </div>

                    {/* PASSKEY Project */}
                    <div className="sticky top-28 hover:scale-105 transition-all duration-300 w-[70vw] h-[70vh] border-none pl-5 rounded-3xl bg-zinc-950 flex flex-col 2xl:flex-row justify-center items-center text-center">
                        <img className='w-[60vw] h-[40vh] 2xl:w-[35vw] 2xl:h-[50vh] object-contain border-none rounded-xl' src="src/assets/images/99.png" alt="PASSKEY - A password Manager" />
                        <div className='p-10'>
                            <div className='text-xl 2xl:text-2xl font-semibold'>PASSKEY - A password Manager</div>
                            <div className='text-sm 2xl:text-base'>
                                "I developed PassKey, a simple yet effective password manager that allows users to securely store and manage their website credentials. The interface is clean and user-friendly, featuring functionalities like adding, editing, and deleting passwords with ease."
                            </div>
                    <a href="https://github.com/itshimanshu16/PassKey-password-manager" target="_blank" rel="noopener noreferrer">
                            <button className='bg-[#00B2E8] px-8 py-2 my-2  border-none rounded-xl '  >
                                Click Here!!
                            </button>
                    </a>
                        </div>
                    </div>

                    {/* Portfolio Project */}
                    <div className="sticky top-28 hover:scale-105 transition-all duration-300 w-[70vw] h-[70vh] border-none pl-5 rounded-3xl bg-zinc-950 flex flex-col 2xl:flex-row justify-center items-center text-center">
                        <img className='w-[60vw] h-[40vh] 2xl:w-[35vw] 2xl:h-[50vh] object-contain border-none rounded-xl' src="src/assets/images/66.png" alt="My Portfolio" />
                        <div className='p-10'>
                            <div className='text-xl 2xl:text-2xl font-semibold'>My Portfolio</div>
                            <div className='text-sm 2xl:text-base'>
                                "I built this portfolio to showcase my skills as a full-stack web developer. The design focuses on simplicity and functionality, featuring sections for qualifications, technical skills, projects, and contact info. It highlights some of my key work, including responsive web designs and personal projects, demonstrating my ability to create dynamic and user-friendly web applications."
                            </div>
                    <a href="https://github.com/itshimanshu16/Portfolio-Website" target="_blank" rel="noopener noreferrer">
                            <button className='bg-[#00B2E8] px-8 py-2 my-2  border-none rounded-xl '  >
                                Click Here!!
                            </button>
                    </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default FeaturedWork;
