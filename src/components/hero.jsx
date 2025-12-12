import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Hero() {
    const [open, setOpen] = useState(false);

    const slideUp = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 2, ease: [0.25, 0.1, 0.25, 1] }
        }
    };

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
        setOpen(false); // close mobile menu
    };


    return (
       <div className="bg-[url('/assets/img/bg.png')] 2xl:bg-[url('/assets/img/bg-3.png')] bg-fixed bg-cover bg-center min-h-screen relative overflow-hidden" id="home">
            {/* Navigation */}
            <nav className="fixed inset-x-0 top-4 md:top-8 z-30">
                <div className=" px-4 md:px-6 relative flex items-center md:justify-center justify-end">
                    {/* Logo */}
                    <a href="/" className="absolute left-4 md:left-6 top-1 flex items-center z-40">
                        <img
                            src="/assets/img/logo.png"
                            alt="Sheffield logo"
                            className="w-12 md:w-24 h-auto object-contain drop-shadow-md"
                        />
                    </a>

                    {/* Desktop navbar */}
                    <div className="hidden md:flex items-center bg-white/30 backdrop-blur-md rounded-full px-6 py-3 text-sm">
                        <ul className="flex gap-8 font-semibold text-gray-800 anton-regular">
                            <li className="cursor-pointer hover:text-white transition-colors" onClick={() => scrollToSection("home")}>Home</li>
                            <li className="cursor-pointer hover:text-white transition-colors" onClick={() => scrollToSection("about")}>About</li>
                            <li className="cursor-pointer hover:text-white transition-colors" onClick={() => scrollToSection("products")}>Products</li>
                            <li className="cursor-pointer hover:text-white transition-colors" onClick={() => scrollToSection("brochures")}>Brochures</li>
                            <li className="cursor-pointer hover:text-white transition-colors" onClick={() => scrollToSection("contact")}>Contact</li>
                        </ul>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-white hover:text-black transition-colors z-40"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="mobileMenu"
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed inset-0 z-20 bg-black/50 backdrop-blur-lg md:hidden"
                    >
                        <ul className="flex flex-col items-center justify-center text-white anton-regular h-full gap-6">
                            <li className="text-2xl cursor-pointer hover:text-gray-300">
                                <span onClick={() => scrollToSection("home")}>Home</span>
                            </li>
                            <li className="text-2xl cursor-pointer hover:text-gray-300">
                                <span onClick={() => scrollToSection("about")}>About</span>
                            </li>
                            <li className="text-2xl cursor-pointer hover:text-gray-300">
                                <span onClick={() => scrollToSection("products")}>Products</span>
                            </li>
                            <li className="text-2xl cursor-pointer hover:text-gray-300">
                                <span onClick={() => scrollToSection("brochures")}>Brochures</span>
                            </li>
                            <li className="text-2xl cursor-pointer hover:text-gray-300">
                                <span onClick={() => scrollToSection("contact")}>Contact</span>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>


            {/* Main Content Container */}
            <div className="min-h-screen flex flex-col xl:grid xl:grid-cols-2 relative">
                {/* LEFT SIDE - Desktop */}
                <div className="hidden xl:flex flex-col justify-center items-end pr-8 lg:pr-16 relative z-0 ">
                    <div className="2xl:mb-18 mb-30">
                        <div className="overflow-hidden">
                            <motion.h1
                                initial="hidden"
                                animate="visible"
                                variants={slideUp}
                                className="text-7xl lg:text-9xl font-bold text-white leading-tight drop-shadow-lg anton-regular uppercase"
                            >
                                Sheffield
                            </motion.h1>
                        </div>
                        {/* Reflection Effect */}
                        <h1
                            className="text-7xl lg:text-9xl font-bold bg-gradient-to-b from-transparent via-transparent to-[#ffffff] bg-clip-text text-transparent leading-tight opacity-50 anton-regular uppercase"
                            style={{
                                transform: 'scaleY(-1)',
                                marginTop: '-2.5rem'
                            }}
                        >
                            Sheffield
                        </h1>
                    </div>

                    <div className="overflow-hidden max-w-xs relative z-20">
                        <motion.h2
                            initial="hidden"
                            animate="visible"
                            variants={slideUp}
                            className="uppercase anton-regular text-2xl lg:text-3xl text-white text-right"
                        >
                            Leading the way in smart trading solutions
                        </motion.h2>
                    </div>
                </div>

                {/* RIGHT SIDE - Desktop */}
                <div className="hidden xl:flex flex-col justify-center items-start pl-8 lg:pl-16 backdrop-blur-md bg-[#1d3d73]/20 border-l border-white/10 shadow-2xl  relative z-10">
                    <div className="relative z-20 flex items-end gap-3 anton-regular top-10 mb-8">
                        <div className="overflow-hidden">
                            <motion.h1
                                initial="hidden"
                                animate="visible"
                                variants={slideUp}
                                className="text-7xl lg:text-9xl font-bold leading-tight drop-shadow-lg text-[#789ccd] uppercase"
                            >
                                Trading
                            </motion.h1>
                        </div>
                        <div className="overflow-hidden">
                            <motion.p
                                initial="hidden"
                                animate="visible"
                                variants={slideUp}
                                className="text-4xl lg:text-6xl text-white font-medium mb-6 tracking-widest uppercase"
                            >
                                Limited
                            </motion.p>
                        </div>
                    </div>

                    {/* Contact Form - Desktop */}
                    <div className="border border-white/10 p-6 rounded-lg shadow-2xl text-white anton-regular w-full max-w-lg bg-black/20">
                        <div className="flex gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="border border-white/10 bg-transparent outline-none rounded-md p-3 w-full text-white placeholder:text-white/60"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="border border-white/10 bg-transparent outline-none rounded-md p-3 w-full text-white placeholder:text-white/60"
                            />
                        </div>
                        <div className="flex gap-4 mb-4">
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="border border-white/10 bg-transparent outline-none rounded-md p-3 w-full text-white placeholder:text-white/60"
                            />
                            <input
                                type="text"
                                placeholder="Country/Region"
                                className="border border-white/10 bg-transparent outline-none rounded-md p-3 w-full text-white placeholder:text-white/60"
                            />
                        </div>
                        <textarea
                            placeholder="Message"
                            className="border border-white/10 bg-transparent outline-none rounded-md p-3 w-full resize-none text-white placeholder:text-white/60 mb-4"
                        />
                        <button className="bg-white text-black font-medium py-3 px-6 rounded-md w-full uppercase hover:bg-gray-100 transition-colors">
                            Get in touch
                        </button>
                    </div>
                </div>

                {/* MOBILE LAYOUT */}
                <div className="xl:hidden flex flex-col justify-center items-center  min-h-screen px-4 py-20 relative z-10">
                    {/* Title */}
                    <div className="text-center">
                        <div className="overflow-hidden">
                            <motion.h1
                                initial="hidden"
                                animate="visible"
                                variants={slideUp}
                                className="text-5xl sm:text-6xl font-bold text-white uppercase anton-regular"
                            >
                                Sheffield trading
                            </motion.h1>
                        </div>
                        <div className="overflow-hidden">
                            <motion.h1
                                initial="hidden"
                                animate="visible"
                                variants={slideUp}
                                className="text-xl  font-bold text-white uppercase anton-regular"
                            >
                                Limited
                            </motion.h1>
                        </div>
                    </div>

                    {/* Contact Form - Mobile */}
                    <div className="border border-white/10 p-6 rounded-lg shadow-2xl text-white anton-regular w-full max-w-lg bg-black/20 backdrop-blur-xl my-10">
                        <div className="flex gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="border border-white/10 bg-transparent outline-none rounded-md p-3 w-full text-white placeholder:text-white/60"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="border border-white/10 bg-transparent outline-none rounded-md p-3 w-full text-white placeholder:text-white/60"
                            />
                        </div>
                        <div className="flex gap-4 mb-4">
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="border border-white/10 bg-transparent outline-none rounded-md p-3 w-full text-white placeholder:text-white/60"
                            />
                            <input
                                type="text"
                                placeholder="Country/Region"
                                className="border border-white/10 bg-transparent outline-none rounded-md p-3 w-full text-white placeholder:text-white/60"
                            />
                        </div>
                        <textarea
                            placeholder="Message"
                            className="border border-white/10 bg-transparent outline-none rounded-md p-3 w-full resize-none text-white placeholder:text-white/60 mb-4"
                        />
                        <button className="bg-white text-black font-medium py-3 px-6 rounded-md w-full uppercase hover:bg-gray-100 transition-colors">
                            Get in touch
                        </button>
                    </div>

                    {/* Tagline */}
                    <div className="overflow-hidden max-w-sm">
                        <motion.h2
                            initial="hidden"
                            animate="visible"
                            variants={slideUp}
                            className="uppercase anton-regular text-2xl text-center text-white"
                        >
                            Leading the way in smart trading solutions
                        </motion.h2>
                    </div>
                </div>

                {/* Ship Image - Desktop (FIXED position, stays on scroll) */}
                <div className="hidden xl:block fixed inset-0 pointer-events-none z-1 mb-25 -mr-5">
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.8, ease: "easeOut" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65vw] lg:w-[45vw] max-w-4xl"
                    >
                        <img
                            src="/assets/img/ship2.png"
                            alt="Container Ship"
                            className="w-full h-auto"
                        />
                    </motion.div>
                </div>

                {/* Ship Image - Mobile (FIXED position, stays on scroll) */}
                <div className="xl:hidden fixed inset-0 pointer-events-none z-0 flex items-center justify-center">
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.8, ease: "easeOut" }}
                        className="w-[90vw] max-w-lg"
                    >
                        <img
                            src="/assets/img/ship2.png"
                            alt="Container Ship"
                            className="w-full h-auto "
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}