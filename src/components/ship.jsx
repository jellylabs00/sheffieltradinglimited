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
        <div ref={containerRef} className="bg-[#d2dde9] px-4 md:px-6 lg:px-10 relative z-10 py-20 overflow-hidden">

            {/* ===== DESKTOP: Centered floating ship ===== */}
            <motion.div
                style={{ y: shipY }}
                className="hidden lg:flex justify-center left-1/2 top-[100px] -translate-x-1/2 absolute z-10 items-center"
            >
                <img src="/assets/img/ship-2.png" alt="Cargo ship" className="w-[30rem] h-auto" />
            </motion.div>

            {/* ===== MOBILE/TABLET: Ship fixed on right side (half visible) ===== */}
            <StickyBox>
                <motion.div
                    style={{ y: shipY }}
                    className="lg:hidden absolute right-[-35%] sm:right-[-25%] md:right-[-20%] top-[20%] md:top-[25%] z-10"
                >
                    <img src="/assets/img/ship-2.png" alt="Cargo ship" className="w-[16rem] sm:w-[18rem] md:w-[20rem] h-auto" />
                </motion.div>
            </StickyBox>

            {/* ===== DESKTOP: Large "SEAFREIGHT" title ===== */}
            <div className="z-1 hidden lg:block">
                <h1 className="text-[200px] xl:text-[120px] font-bold text-center uppercase anton-regular text-white">FAST DISPATCH. SAFE DELIVERY</h1>
            </div>

            {/* ===== MOBILE/TABLET: Smaller "SEAFREIGHT" title ===== */}
            <div className="z-1 lg:hidden mb-10">
                <h1 className="text-[50px] sm:text-[50px] md:text-[80px] font-bold text-start uppercase anton-regular text-white leading-none">FAST DISPATCH. SAFE DELIVERY</h1>
            </div>

            {/* ===== CONTENT SECTIONS ===== */}
            <div className="flex flex-col gap-16 md:gap-32 lg:gap-40 relative z-20">

                {/* --- Section 1: Global Reach & High Capacity --- */}
                <div className="flex lg:justify-between justify-start items-start lg:items-center">
                    {/* Left content */}
                    <div className="flex flex-col lg:items-end items-start w-full lg:w-auto lg:invisible">
                        <div className="font-bold text-[#203c5c] uppercase text-3xl xl:text-4xl anton-regular text-start">
                            <h2>GLOBAL</h2>
                            <h2>DISPATCH</h2>
                        </div>
                        <div className="text-[#203c5c] manrope text-xs xl:text-sm text-start mt-5 max-w-[300px]">
                            <p>We ship worldwide via trusted courier and freight partners, ensuring fast, reliable delivery to your destination.</p>
                        </div>
                        <div className="flex items-center flex-row w-full mt-8">
                            <div className="xl:max-w-[500px] lg:max-w-[300px] w-[500px] h-[2px] bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                    </div>
                    {/* Right content - hidden on mobile/tablet */}
                    <div className="hidden lg:flex flex-col items-start">
                        <div className="font-bold text-[#203c5c] uppercase text-3xl xl:text-4xl anton-regular text-start">
                            <h2>GLOBAL</h2>
                            <h2>DISPATCH</h2>
                        </div>
                        <div className="text-[#203c5c] manrope text-xs xl:text-sm text-start mt-5 max-w-[300px]">
                            <p>We ship worldwide via trusted courier and freight partners, ensuring fast, reliable delivery to your destination.</p>
                        </div>
                        <div className="flex items-center flex-row-reverse w-full mt-8">
                            <div className="xl:max-w-[500px] lg:max-w-[300px] w-[500px] h-[2px] bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                    </div>
                </div>

                {/* --- Section 2: High Capacity (Mobile) & Eco-Friendly --- */}
                <div className="flex lg:justify-between justify-start items-start lg:items-center">
                    <div className="flex flex-col lg:items-end items-start w-full lg:w-auto">
                        <div className="font-bold text-[#203c5c] uppercase text-3xl xl:text-4xl anton-regular text-start">
                            <h2>EXPORT-READY</h2>
                            <h2>PACKING</h2>
                        </div>
                        <div className="text-[#203c5c] manrope text-xs sm:text-sm lg:text-end text-start mt-4 lg:mt-5 max-w-[300px]">
                            <p>Professional export packing to protect goods in transit—cartons, pallets, labeling, and handling as required.</p>
                        </div>
                        <div className="flex items-center w-full mt-6 lg:mt-8">
                            <div className="xl:max-w-[500px] lg:max-w-[300px] w-[500px] h-[2px] bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                    </div>
                    <div className="hidden lg:flex flex-col items-start invisible">
                        <div className="font-bold text-[#203c5c] uppercase text-3xl xl:text-4xl anton-regular text-start">
                            <h2>Eco</h2>
                            <h2>friendly</h2>
                        </div>
                        <div className="text-[#203c5c] manrope text-xs xl:text-sm text-start mt-5">
                            <p>Sea freight is one of the most</p>
                            <p>environmentally sustainable shipping</p>
                            <p>methods with lower carbon emissions.</p>
                        </div>
                        <div className="flex items-center flex-row-reverse w-full mt-8">
                            <div className="xl:max-w-[500px] lg:max-w-[300px] w-[500px] h-[2px] bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                    </div>
                </div>

                {/* --- Section 3: Cost Effective --- */}
                <div className="flex lg:justify-between justify-start items-start lg:items-center">
                    <div className="flex flex-col lg:items-end items-start w-full lg:w-auto lg:invisible">
                        <div className="font-bold text-[#203c5c] uppercase text-3xl xl:text-4xl anton-regular text-start">
                            <h2>TRACKED &</h2>
                            <h2>ON-TIME</h2>
                        </div>
                        <div className="text-[#203c5c] manrope text-xs xl:text-sm text-start mt-5 max-w-[300px]">
                            <p>Clear tracking and proactive updates from dispatch to delivery—so you stay informed at every step.If you want them to sound more premium or more aggressive (salesy), tell me and I’ll rewrite in that tone.</p>
                        </div>
                        <div className="flex items-center justify-end flex-row w-full mt-8">
                            <div className="xl:max-w-[500px] lg:max-w-[300px] w-[500px] h-[2px] bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                    </div>
                    <div className="hidden lg:flex flex-col items-start">
                        <div className="font-bold text-[#203c5c] uppercase text-3xl xl:text-4xl anton-regular text-start">
                            <h2>TRACKED &</h2>
                            <h2>ON-TIME</h2>
                        </div>
                        <div className="text-[#203c5c] manrope text-xs xl:text-sm text-start mt-5 max-w-[300px]">
                            <p>Clear tracking and proactive updates from dispatch to delivery—so you stay informed at every step.If you want them to sound more premium or more aggressive (salesy), tell me and I’ll rewrite in that tone.</p>
                        </div>
                        <div className="flex items-center justify-end flex-row-reverse w-full mt-8">
                            <div className="xl:max-w-[500px] lg:max-w-[300px] w-[500px] h-[2px] bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== BROKERAGE SERVICES SECTION ===== */}
            <div className="relative mt-16 md:mt-32 lg:mt-40">
                {/* Center title - Desktop */}

                <div className="lg:invisible hidden w-full px-4">
                    <h2 className="text-4xl xl:text-6xl max-w-[800px] mx-auto font-bold text-center uppercase anton-regular text-white leading-tight">
                        Procure Smart. Deliver Worldwide
                    </h2>
                </div>
                <div className="hidden lg:block w-full px-4">
                    <h2 className="text-4xl xl:text-6xl mx-auto font-bold text-center uppercase anton-regular text-white leading-tight">
                        Procure Smart. Deliver Worldwide
                    </h2>
                </div>

                {/* Mobile/Tablet title - above content */}
                <div className="lg:hidden mb-8 md:mb-10 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl max-w-[500px] font-bold text-center uppercase anton-regular text-white leading-tight">
                       Procure Smart. Deliver Worldwide
                    </h2>
                </div>

                {/* <div className="flex justify-between flex-col lg:flex-row items-start gap-10 md:gap-12 lg:gap-0">
                    
                    <div className="w-full lg:w-auto">
                        <div className="text-[#203c5c] font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl anton-regular lg:text-end text-start">
                            <p className="mb-1">01</p>
                            <h3>business <br />broker</h3>
                        </div>
                        <div>
                            <p className="text-[#203c5c] manrope text-xs sm:text-sm lg:text-end text-start mt-4 lg:mt-5 max-w-[280px] sm:max-w-[320px] lg:w-[350px]">
                                We provide expert business brokerage services, ensuring
                                seamless execution of sales and acquisitions. Acting as
                                mediators between sellers and buyers, our brokers
                                facilitate transparent, efficient transactions.
                            </p>
                        </div>
                    </div>
                    
                    <div className="w-full lg:w-auto">
                        <div className="text-[#203c5c] font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl anton-regular text-start">
                            <p className="mb-1">02</p>
                            <h3>customs <br />clearance</h3>
                        </div>
                        <div>
                            <p className="text-[#203c5c] manrope text-xs sm:text-sm text-start mt-4 lg:mt-5 max-w-[280px] sm:max-w-[320px] lg:w-[350px]">
                                We specialize in guiding both parties through complex
                                mergers, working diligently to achieve successful
                                outcomes for all involved. Our team ensures smooth
                                customs clearance worldwide.
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}