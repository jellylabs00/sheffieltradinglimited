import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import StickyBox from "react-sticky-box";

export default function Ship() {
    const containerRef = useRef(null);

    // Track scroll progress within the component
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Transform scroll progress to Y position (creates up/down floating effect)
    const shipY = useTransform(scrollYProgress, [0, 0.5, 1], [150, -100, 150]);

    return (
        <div ref={containerRef} className="bg-[#d2dde9] md:px-10 px-4 relative z-10 py-20 overflow-hidden">

            {/* ===== DESKTOP: Centered floating ship ===== */}
            <motion.div
                style={{ y: shipY }}
                className="hidden md:flex justify-center left-1/2 top-[250px] -translate-x-1/2 absolute z-10 items-center"
            >
                <img src="/assets/img/ship.webp" alt="" className="w-[25rem] h-full" />
            </motion.div>

            {/* ===== MOBILE: Ship fixed on right side (half visible) ===== */}
            <StickyBox>
                <motion.div
                style={{ y: shipY }}
                className="md:hidden absolute right-[-40%] top-[30%] z-10"
            >
                <img src="/assets/img/ship.webp" alt="" className="w-[20rem] h-full " />
            </motion.div>
            </StickyBox>

            {/* ===== DESKTOP: Large "SEAFREIGHT" title ===== */}
            <div className="z-1 hidden md:block">
                <h1 className="text-[340px] font-bold text-center uppercase anton-regular text-white">seafreight</h1>
            </div>

            {/* ===== MOBILE: Smaller "SEAFREIGHT" title ===== */}
            <div className="z-1 md:hidden mb-10">
                <h1 className="text-[80px] font-bold text-start uppercase anton-regular text-white leading-none">sea freight</h1>
            </div>

            {/* ===== CONTENT SECTIONS ===== */}
            <div className="flex flex-col gap-20 md:gap-40">

                {/* --- Section 1 --- */}
                <div className="flex md:justify-between justify-start items-center">
                    {/* Left content - visible on both */}
                    <div className="flex flex-col md:items-end items-start">
                        <div className="font-bold text-[#203c5c] uppercase md:text-end text-start text-2xl md:text-4xl anton-regular">
                            <h1>High</h1>
                            <h1>capacity</h1>
                        </div>
                        <div className="text-[#203c5c] manrope text-[12px] md:text-end text-start mt-5 max-w-[280px] md:max-w-none">
                            <p>Our ships can transport large volumes</p>
                            <p>of goods, making maritime freight</p>
                            <p>ideal for bulk orders and heavy cargo.</p>
                        </div>
                        <div className="flex items-center w-full mt-8">
                            <div className="w-[200px] md:w-[500px] h-[2px] bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                    </div>
                    {/* Right content - hidden on mobile */}
                    <div className="hidden md:flex flex-col items-start">
                        <div className="font-bold text-[#203c5c] uppercase text-4xl anton-regular text-start">
                            <h1>High</h1>
                            <h1>capacity</h1>
                        </div>
                        <div className="text-[#203c5c] manrope text-[12px] text-start mt-5">
                            <p>Our ships can transport large volumes</p>
                            <p>of goods, making maritime freight</p>
                            <p>ideal for bulk orders and heavy cargo.</p>
                        </div>
                        <div className="flex items-center flex-row-reverse w-full mt-8">
                            <div className="w-[500px] h-[2px] bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                    </div>
                </div>

                {/* --- Section 2 --- */}
                <div className="flex md:justify-between justify-start items-center">
                    <div className="flex flex-col md:items-end items-start">
                        <div className="font-bold text-[#203c5c] uppercase md:text-end text-start text-2xl md:text-4xl anton-regular">
                            <h1>Global</h1>
                            <h1>reach</h1>
                        </div>
                        <div className="text-[#203c5c] manrope text-[12px] md:text-end text-start mt-5 max-w-[280px] md:max-w-none">
                            <p>We connect you to major ports</p>
                            <p>worldwide, ensuring reliable delivery</p>
                            <p>to any destination across the globe.</p>
                        </div>
                        <div className="flex items-center w-full mt-8">
                            <div className="w-[200px] md:w-[500px] h-[2px] bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-col items-start">
                        <div className="font-bold text-[#203c5c] uppercase text-4xl anton-regular text-start">
                            <h1>Global</h1>
                            <h1>reach</h1>
                        </div>
                        <div className="text-[#203c5c] manrope text-[12px] text-start mt-5">
                            <p>We connect you to major ports</p>
                            <p>worldwide, ensuring reliable delivery</p>
                            <p>to any destination across the globe.</p>
                        </div>
                        <div className="flex items-center flex-row-reverse w-full mt-8">
                            <div className="w-[500px] h-[2px] bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                    </div>
                </div>

                {/* --- Section 3 --- */}
                <div className="flex md:justify-between justify-start items-center">
                    <div className="flex flex-col md:items-end items-start">
                        <div className="font-bold text-[#203c5c] uppercase md:text-end text-start text-2xl md:text-4xl anton-regular">
                            <h1>Cost</h1>
                            <h1>effective</h1>
                        </div>
                        <div className="text-[#203c5c] manrope text-[12px] md:text-end text-start mt-5 max-w-[280px] md:max-w-none">
                            <p>Maritime shipping offers significant</p>
                            <p>cost savings for international trade</p>
                            <p>compared to air or land transport.</p>
                        </div>
                        <div className="flex items-center w-full mt-8">
                            <div className="w-[200px] md:w-[500px] h-[2px] bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-col items-start">
                        <div className="font-bold text-[#203c5c] uppercase text-4xl anton-regular text-start">
                            <h1>Cost</h1>
                            <h1>effective</h1>
                        </div>
                        <div className="text-[#203c5c] manrope text-[12px] text-start mt-5">
                            <p>Maritime shipping offers significant</p>
                            <p>cost savings for international trade</p>
                            <p>compared to air or land transport.</p>
                        </div>
                        <div className="flex items-center flex-row-reverse w-full mt-8">
                            <div className="w-[500px] h-[2px] bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                    </div>
                </div>

                {/* --- Section 4 --- */}
                <div className="flex md:justify-between justify-start items-center">
                    <div className="flex flex-col md:items-end items-start">
                        <div className="font-bold text-[#203c5c] uppercase md:text-end text-start text-2xl md:text-4xl anton-regular">
                            <h1>Reliable</h1>
                            <h1>tracking</h1>
                        </div>
                        <div className="text-[#203c5c] manrope text-[12px] md:text-end text-start mt-5 max-w-[280px] md:max-w-none">
                            <p>Track your shipments in real-time</p>
                            <p>with our advanced monitoring system</p>
                            <p>for complete peace of mind.</p>
                        </div>
                        <div className="flex items-center w-full mt-8">
                            <div className="w-[200px] md:w-[500px] h-[2px] bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-col items-start">
                        <div className="font-bold text-[#203c5c] uppercase text-4xl anton-regular text-start">
                            <h1>Reliable</h1>
                            <h1>tracking</h1>
                        </div>
                        <div className="text-[#203c5c] manrope text-[12px] text-start mt-5">
                            <p>Track your shipments in real-time</p>
                            <p>with our advanced monitoring system</p>
                            <p>for complete peace of mind.</p>
                        </div>
                        <div className="flex items-center flex-row-reverse w-full mt-8">
                            <div className="w-[500px] h-[2px] bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== BROKERAGE SERVICES SECTION ===== */}
            <div className="relative mt-20 md:mt-40">
                {/* Center title - Desktop */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                    <h1 className="text-6xl max-w-[800px] font-bold text-center uppercase anton-regular text-white">
                        we also provide you with brokerage services:
                    </h1>
                </div>

                {/* Mobile title - above content */}
                <div className="md:hidden mb-10">
                    <h1 className="text-3xl font-bold text-start uppercase anton-regular text-white leading-tight">
                        we also provide you with brokerage services:
                    </h1>
                </div>

                <div className="flex justify-between flex-col md:flex-row items-start md:items-center gap-10 md:gap-0">
                    {/* Left broker */}
                    <div>
                        <div className="text-[#203c5c] font-bold text-2xl md:text-4xl anton-regular md:text-end text-start">
                            <p>01</p>
                            <h2>business <br />broker</h2>
                        </div>
                        <div>
                            <p className="text-[#203c5c] manrope text-[12px] md:text-end text-start mt-5 max-w-[280px] md:w-[350px]">
                                We provide expert business brokerage services, ensuring
                                seamless execution of sales and acquisitions. Acting as
                                mediators between sellers and buyers, our brokers
                                facilitate transparent, efficient transactions.
                            </p>
                        </div>
                    </div>
                    {/* Right broker */}
                    <div>
                        <div className="text-[#203c5c] font-bold text-2xl md:text-4xl anton-regular md:text-start text-start">
                            <p>02</p>
                            <h2>customs <br />clearance</h2>
                        </div>
                        <div>
                            <p className="text-[#203c5c] manrope text-[12px] md:text-start text-start mt-5 max-w-[280px] md:w-[350px]">
                                We specialize in guiding both parties through complex
                                mergers, working diligently to achieve successful
                                outcomes for all involved. Our team ensures smooth
                                customs clearance worldwide.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}