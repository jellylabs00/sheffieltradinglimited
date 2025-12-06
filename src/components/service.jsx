import React, { useState, useEffect } from 'react';
import { ArrowDownLeft ,ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Data Setup
const sectors = [
    {
        id: "agro",
        title: "AGRO",
        subtitle: "PRODUCTS",
        description: [
            "We provide a variety of agricultural supplies in bulk, ensuring access to top-grade products that support sustainable farming and efficient production."
        ],
        img: "/assets/img/service-img-1.webp"
    },
    {
        id: "electronics",
        title: "ELECTRONICS",
        subtitle: "",
        description: [
            "We supply the latest in electronic devices and components, tailored to meet the demands of today’s fast-paced tech environment."
        ],
        img: "/assets/img/service-img-2.webp"
    },
    {
        id: "textiles",
        title: "TEXTILES",
        subtitle: "",
        description: [
            "Our selection includes durable and stylish fabrics suitable for a wide range of applications, from fashion to industrial use."
        ],
        img: "/assets/img/service-img-3.webp"
    },
    {
        id: "other",
        title: "OTHER PRODUCTS",
        subtitle: "",
        description: [
            "Beyond our core offerings, we also deal in various other products, ensuring a comprehensive solution for all your wholesale needs."
        ],
        img: "/assets/img/service-img-4.webp"
    }
];

export default function Service() {
    const [activeindex, setActiveIndex] = useState(0);

    const slideUp = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
        }
    };

    const imageVariants = {
        enter: { opacity: 0, scale: 0.9, rotateY: -15, z: -100 },
        center: {
            opacity: 1, scale: 1, rotateY: 0, z: 0,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
        },
        exit: {
            opacity: 0, scale: 1.1, rotateY: 15, z: 100,
            transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
        }
    };

    // Desktop Scroll Logic
    useEffect(() => {
        const handleScroll = () => {
            // Only run this logic on desktop to save performance
            if (window.innerWidth < 768) return;

            const sections = document.querySelectorAll('.sector-section');
            sections.forEach((section, index) => {
                const rect = section.getBoundingClientRect();
                if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                    setActiveIndex(index);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-[#0466c8] min-h-screen w-full py-10 md:py-20 relative z-10 ">

            {/* =========================================================
                1. MOBILE VIEW (Horizontal Scroll)
                Visible on small screens, hidden on md+
               ========================================================= */}
            <div className="block md:hidden w-full px-6">
                
                {/* Mobile Header */}
                <div className="mb-8">
                    <div className="anton-regular text-white uppercase text-4xl leading-tight">
                        <motion.h1 variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>discover premium</motion.h1>
                        <motion.h1 variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>products for</motion.h1>
                        <motion.h1 variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>every sector</motion.h1>
                    </div>
                    <div className="text-white manrope text-xs mt-4 font-light opacity-90">
                        <p>At Influence Pro Trading, we offer a wide range of high-quality products to meet diverse needs.</p>
                    </div>
                </div>

                {/* Horizontal Scroll Container */}
                {/* 'no-scrollbar' class assumes you have a utility or can be replaced with inline styles */}
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-10 w-full no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {sectors.map((sector) => (
                        <div 
                            key={sector.id} 
                            className="min-w-[85vw] snap-center flex flex-col items-center"
                        >
                            {/* Card Image */}
                            <div className="w-full h-[300px] mb-6 relative flex items-center justify-center bg-white/5 rounded-2xl overflow-hidden border border-white/10">
                                <img 
                                    src={sector.img} 
                                    alt={sector.title} 
                                    className="w-3/4 h-3/4 object-contain drop-shadow-xl"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="w-full text-left">
                                <h2 className="anton-regular text-white uppercase text-3xl mb-2">
                                    {sector.title} {sector.subtitle}
                                </h2>
                                <p className="text-white manrope text-sm font-medium opacity-90 leading-relaxed mb-6">
                                    {sector.description}
                                </p>
                                
                                {/* Mobile Button */}
                                <div className="bg-white text-[#0466c8] rounded-full w-20 h-20 flex items-center justify-center">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Spacer to allow last item to be seen clearly */}
                    <div className="min-w-[5vw]"></div>
                </div>
            </div>


            {/* =========================================================
                2. DESKTOP VIEW (Sticky + Vertical Scroll)
                Hidden on small screens, flex on md+
               ========================================================= */}
            <div className="hidden md:flex flex-row items-start justify-between w-full px-10">

                {/* --- COL 1: Sticky Main Title (Left) --- */}
                <div className="w-1/3 h-screen sticky top-0 flex flex-col justify-center z-10">
                    <div className="anton-regular text-white uppercase text-6xl leading-tight">
                        <motion.h1 variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>discover premium</motion.h1>
                        <motion.h1 variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>products for</motion.h1>
                        <motion.h1 variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>every sector</motion.h1>
                    </div>
                    <div className="text-white manrope text-[12px] mt-8 font-light opacity-90">
                        <p>At Influence Pro Trading, we offer a wide range of </p>
                        <p>high-quality products to meet the diverse needs of</p>
                        <p>Our clients:</p>
                    </div>
                </div>

                {/* --- COL 2: Sticky Image Display (Center) --- */}
                <div className="w-1/3 h-screen sticky top-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className="relative w-full h-[500px] flex items-center justify-center transition-all duration-700 ease-in-out">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeindex}
                                src={sectors[activeindex].img}
                                alt={sectors[activeindex].title}
                                variants={imageVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="w-full h-full object-contain drop-shadow-2xl absolute"
                            />
                        </AnimatePresence>
                    </div>
                </div>

                {/* --- COL 3: Scrollable Content (Right) --- */}
                <div className="w-1/3 relative z-20 ml-15">
                    <div className="flex flex-col gap-40 my-44">
                        {sectors.map((sector) => (
                            <div
                                key={sector.id}
                                className="sector-section flex flex-col items-start justify-center pr-10"
                            >
                                <div className={`transition-opacity duration-500`}>
                                    <div className="anton-regular text-white uppercase text-4xl mb-4 text-start">
                                        <h2>{sector.title}</h2>
                                        {sector.subtitle && <h2>{sector.subtitle}</h2>}
                                    </div>

                                    <div className="text-white manrope text-[12px] w-[230px] mt-6 text-start font-medium">
                                        <p>{sector.description}</p>
                                    </div>

                                    <div className="flex justify-start mt-8">
                                        <div className="bg-white text-[#0466c8] rounded-full w-32 h-32 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                                            <ArrowDownLeft />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}