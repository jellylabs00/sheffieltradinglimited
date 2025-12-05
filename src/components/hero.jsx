import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const slideUp = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 2, ease: [0.25, 0.1, 0.25, 1] }
        }
    };
    return (
        // Added 'bg-fixed' here to ensure the background stays static for alignment
        <div className="bg-[url('/assets/img/bg.png')] bg-fixed bg-cover bg-center min-h-screen relative overflow-hidden">

            {/* Navigation - logo on the top-left, links in a translucent pill to the right */}
            <nav className="absolute inset-x-0 top-6 z-30">
                <div className="container mx-auto px-6 relative flex items-center justify-center">

                    {/* LOGO - fixed top-left */}
                    <a href="/" className="absolute left-6 top-1 flex items-center z-40">
                        <img
                            src="/assets/img/logo.png"
                            alt="Shiffield logo"
                            className="w-16 h-auto object-contain drop-shadow-md"
                        />
                    </a>

                    {/* Desktop navbar centered */}
                    <div className="hidden md:flex items-center bg-white/30 backdrop-blur-md rounded-full px-6 py-3 text-sm">
                        <ul className="flex gap-8 font-semibold text-gray-800 anton-regular">
                            <li className="cursor-pointer hover:text-white transition-colors">Home</li>
                            <li className="cursor-pointer hover:text-white transition-colors">About</li>
                            <li className="cursor-pointer hover:text-white transition-colors">Products</li>
                            <li className="cursor-pointer hover:text-white transition-colors">Brochures</li>
                            <li className="cursor-pointer hover:text-white transition-colors">Contact</li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="flex justify-center">
                <motion.div initial={{ x: 25, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }} className="fixed bottom-27 right-110 z-2">
                    <img src="/assets/img/ship2.png" className="w-[800px]" />
                </motion.div>
            </div>


            {/* Main Split Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen w-full absolute top-0">

                {/* LEFT SIDE: non-blurred, text aligns toward center */}
                <div className="flex flex-col justify-center items-center md:items-end md:pr-12 h-full px-6">
                    <div className="relative inline-block uppercase mb-[130px] mr-10 anton-regular">
                        <div className="overflow-hidden">
                            <motion.h1
                                initial="hidden"
                                animate="visible"
                                variants={slideUp}
                                className="text-6xl md:text-9xl font-bold  text-white leading-tight drop-shadow-lg "
                            >
                                Sheffield
                            </motion.h1>
                        </div>
                        <h1
                            className="text-6xl md:text-9xl font-bold bg-gradient-to-b from-transparent via-transparent to-[#ffffff] bg-clip-text text-transparent leading-tight opacity-50 "
                            style={{
                                transform: 'scaleY(-1)',
                                marginTop: '-3rem'
                            }}
                        >
                            Sheffield
                        </h1>
                    </div>
                    <div className="flex justify-start items-start w-full overflow-hidden">
                        <motion.h2 initial="hidden" animate="visible" variants={slideUp} className="uppercase anton-regular text-3xl max-w-[300px] text-start text-white">
                            Leading the way in smart trading solutions
                        </motion.h2>
                    </div>
                </div>

                {/* RIGHT SIDE: blurred panel with a subtle divider */}
                <div className="flex flex-col justify-center items-center md:items-start md:pl-12 h-full backdrop-blur-md bg-[#1d3d73]/20 border-l border-white/10 shadow-2xl z-20 px-6">
                    <div className="flex flex-col uppercase ">
                        <div className="relative z-20 flex items-end uppercase mb-[60px] gap-3 anton-regular">
                            <div className="overflow-hidden">
                                <motion.h1 initial="hidden" animate="visible" variants={slideUp} className="text-6xl md:text-9xl font-bold leading-tight drop-shadow-lg 
                                           text-[#789ccd]">
                                    Trading
                                </motion.h1>
                            </div>


                            {/* Reflection Text #789ccd */}
                            {/* <h1
                                className="text-6xl md:text-9xl font-bold bg-gradient-to-b from-transparent via-transparent to-[#253575]/50 bg-clip-text text-transparent leading-tight opacity-50 "
                                style={{
                                    transform: 'scaleY(-1)',
                                    marginTop: '-3rem'
                                }}
                            >
                                Trading
                            </h1> */}
                            <motion.p initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-lg md:text-6xl text-[#ffffff] font-medium mb-5 tracking-widest text-end">Limited</motion.p>
                        </div>
                        <div className="border border-white/10 p-4 rounded-lg shadow-2xl text-white anton-regular">
                            <div className="flex gap-4">
                                <input type="text" placeholder="Name" className="border border-white/10  outline-none rounded-md p-2 w-full" />
                                <input type="email" placeholder="Email" className="border border-white/10  outline-none rounded-md p-2 w-full" />
                            </div>
                            <div className="flex gap-4 my-4">
                                <input type="number" placeholder="Phone" className="border border-white/10  outline-none rounded-md p-2 w-full focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none " />
                                <input type="text" placeholder="Country/Region" className="border border-white/10  outline-none rounded-md p-2 w-full " />
                            </div>
                            <div>
                                <textarea type="text" placeholder="Message" className="border border-white/10  outline-none rounded-md p-2 w-full focus:outline-none resize-none" />
                            </div>
                            <button className="bg-white text-black font-medium py-2 px-4 rounded-md mt-4 w-full uppercase">Get in touch</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}