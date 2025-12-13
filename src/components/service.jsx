import React, { useState, useEffect } from 'react';
import { ArrowDownLeft, ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// 1. Data Setup
const sectors = [
    {
        id: "agro",
        title: "Electrical &",
        subtitle: "Electronics",
        description: [
            "Circuit breakers, MCCB, MCB, RCCB, Contactors, relays, overloads, Transformers, Switchgear & control panels etc…"
        ],
        img: "/assets/img/services/1.png"
    },
    {
        id: "electronics",
        title: "Instrumentation",
        subtitle: "",
        description: [
            "Flow meters, pressure transmitters, Multimeters, calibrators (Fluke, Megger), Thermocouples, RTD, Level sensors etc…"
        ],
        img: "/assets/img/services/2.png"
    },
    {
        id: "textiles",
        title: "Mechanical &",
        subtitle: "Industrial",
        description: [
            "Gear motors, pumps, sheaves, Bearings (SKF, FAG), Chains, sprockets, Valves & solenoid valves (ASCO etc.)"
        ],
        img: "/assets/img/services/3.png"
    },
    {
        id: "other",
        title: "Pneumatics &",
        subtitle: "Hydraulics",
        description: [
            "Air cylinders (ISO 6431), Seal kits, Hydraulic pumps, Pressure regulators, Pneumatic fittings, Actuators"
        ],
        img: "/assets/img/services/4.png"
    },
    {
        id: "tools",
        title: "Tools &",
        subtitle: " Workshop Supplies",
        description: [
            "Socket sets, ratchets (Force, Bosch), Drills, hole saws, Torque wrenches, Test tools, Lighting (Pelican headlamps)"
        ],
        img: "/assets/img/services/5.png"
    },
    {
        id: "safety",
        title: "Safety, PPE &",
        subtitle: "Site Equipment",
        description: [
            "Emergency stop relays, Torch lights (Pelican 2780R), Gloves, helmets, safety glasses, Lockout/Tagout, Gas detectors"
        ],
        img: "/assets/img/services/6.png"
    },
    {
        id: "spare",
        title: "Spare Parts for",
        subtitle: "OEM Equipment",
        description: [
            "Original manufacturer parts only: ABB, Siemens, Schneider, Allen Bradley, GE, Miller, Thermon"
        ],
        img: "/assets/img/services/7.png"
    },
    {
        id: "hvac",
        title: "HVAC, Exhaust &",
        subtitle: "Ventilation",
        description: [
            "Exhaust fans, Motors with matching voltage (380V vs 415V), Fan assemblies, Air filters etc…"
        ],
        img: "/assets/img/services/8.png"
    },
    {
        id: "packaging",
        title: "Packaging &",
        subtitle: " Logistics",
        description: [
            "Cartons, export packing boxes, Labels, barcodes, Courier (DHL/FedEx) documents etc…"
        ],
        img: "/assets/img/services/9.png"
    },
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

    const handleScrollToNext = (currentIndex) => {
        const nextIndex = (currentIndex + 1) % sectors.length;
        const nextSection = document.getElementById(`sector-${nextIndex}`);
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <div className="bg-[#0466c8] min-h-screen w-full py-10 md:py-20 relative z-10 " id="products">

            {/* =========================================================
                1. MOBILE VIEW (Horizontal Scroll)
                Visible on small screens, hidden on md+
               ========================================================= */}
            <div className="block lg:hidden w-full px-6">

                {/* Mobile Header */}
                <div className="mb-8">
                    <div className="anton-regular text-white uppercase text-4xl leading-tight">
                        <motion.h1 variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>quality industrial</motion.h1>
                        <motion.h1 variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>supplies for</motion.h1>
                        <motion.h1 variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>every industry</motion.h1>
                    </div>
                    <div className="text-white manrope text-xs mt-4 font-light opacity-90">
                        <p>We support businesses with end-to-end procurement—sourcing original manufacturer parts, matching exact specifications, and arranging reliable global delivery. Whether it’s urgent spares or bulk supply, we keep your operations moving.</p>
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
                            <div className="w-full h-[300px] mb-6 relative flex items-center justify-center  rounded-2xl overflow-hidden ">
                                <motion.img
                                    initial={{ y: 0 }}
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    src={sector.img}
                                    alt={sector.title}
                                    className="w-3/4 h-3/4 object-contain drop-shadow-2xl"
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
                                <div className='flex justify-between items-center'>
                                    <div className="bg-white text-[#0466c8] rounded-full w-20 h-20 flex items-center justify-center">
                                        <ArrowUpRight size={20} />
                                    </div>
                                    <div>
                                        <motion.div
                                            initial={{ x: 0 }}
                                            animate={{ x: [0, 10, 0] }}
                                            transition={{
                                                duration: 1.2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <ArrowRight size={30} className="text-white" />
                                        </motion.div>

                                    </div>
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
            <div className="hidden lg:flex flex-row items-start justify-between w-full px-10">

                {/* --- COL 1: Sticky Main Title (Left) --- */}
                <div className="w-1/3 h-screen sticky top-0 flex flex-col justify-center z-10">
                    <div className="anton-regular text-white uppercase lg:text-6xl md:text-3xl leading-[1]">
                        <motion.h1 variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>QUALITY INDUSTRIAL</motion.h1>
                        <motion.h1 variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>SUPPLIES FOR</motion.h1>
                        <motion.h1 variants={slideUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>EVERY INDUSTRY</motion.h1>
                    </div>
                    <div className="text-white manrope text-[12px] max-w-[350px] w-full mt-8 font-light opacity-90">
                        <p>We support businesses with end-to-end procurement—sourcing original manufacturer parts, matching exact specifications, and arranging reliable global delivery. Whether it’s urgent spares or bulk supply, we keep your operations moving.</p>
                    </div>
                </div>

                {/* --- COL 2: Sticky Image Display (Center) --- */}
                <div className="w-1/3 h-screen sticky top-0 flex items-center justify-center z-10 pointer-events-none">
                    <div className="relative w-full h-[500px] flex items-center justify-center transition-all duration-700 ease-in-out ">
                        {/* <AnimatePresence mode="wait"> */}
                        <motion.img
                            initial={{ y: 0 }}
                            animate={{ y: [0, 10, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            key={activeindex}
                            src={sectors[activeindex].img}
                            alt={sectors[activeindex].title}
                            variants={imageVariants}
                            exit="exit"
                            className="w-full h-full object-contain drop-shadow-2xl absolute "
                        />
                        {/* </AnimatePresence> */}
                    </div>
                </div>

                {/* --- COL 3: Scrollable Content (Right) --- */}
                <div className="w-1/3 relative z-20">
                    <div className="flex flex-col gap-40 my-44">
                        {sectors.map((sector, index) => (
                            <div
                                key={sector.id}
                                id={`sector-${index}`}
                                className="sector-section flex flex-col items-center justify-center pr-10"
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
                                        <div onClick={() => handleScrollToNext(index)} className="group bg-white text-[#0466c8] rounded-full w-32 h-32 flex items-center justify-center cursor-pointer transition-transform duration-300 ">
                                            <ArrowDownLeft className="transition-transform duration-300 group-hover:-rotate-50" />
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