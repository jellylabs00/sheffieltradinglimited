import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Ship() {
    const containerRef = useRef(null);

    // Track scroll progress within the component
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Transform scroll progress to Y position (creates up/down floating effect)
    // As you scroll, the ship moves between +50px, -30px, and back to +50px
    const shipY = useTransform(scrollYProgress, [0, 0.5, 1], [150, -100, 150]);
   



    return (
        <div ref={containerRef} className="bg-[#d2dde9] px-10 relative z-10 py-20">
            <motion.div
                style={{ y: shipY }}
                className="flex justify-center left-1/2 top-[250px] -translate-x-1/2 absolute z-10 items-center"
            >
                <img src="/assets/img/ship.webp" alt="" className="w-[25rem] h-full" />
            </motion.div>
            <div className=" z-1 ">
                <h1 className="text-[340px] font-bold  text-center uppercase anton-regular text-white">seafreight</h1>
            </div>
            <div className="flex flex-col gap-40">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col items-end">
                        <div className="font-bold text-[#203c5c]   uppercase text-end text-4xl anton-regular">
                            <h1>High</h1>
                            <h1>capacity</h1>
                        </div>
                        <div className="text-[#203c5c] manrope text-[12px] text-end mt-5">
                            <p>Our ships can transport large volumes</p>
                            <p>of goods, making maritime freight</p>
                            <p>ideal for bulk orders and heavy cargo.</p>
                        </div>
                        <div className="flex items-center w-full mt-8">
                            <div className=" w-[500px] h-[2px] bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
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
                <div className="flex justify-between items-center">
                    <div className="flex flex-col items-end">
                        <div className="font-bold text-[#203c5c] uppercase text-end text-4xl anton-regular">
                            <h1>High</h1>
                            <h1>capacity</h1>
                        </div>
                        <div className="text-[#203c5c] manrope text-[12px] text-end mt-5">
                            <p>Our ships can transport large volumes</p>
                            <p>of goods, making maritime freight</p>
                            <p>ideal for bulk orders and heavy cargo.</p>
                        </div>
                        <div className="flex items-center w-full mt-8">
                            <div className=" w-[500px] h-[2px] bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
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
                <div className="flex justify-between items-center">
                    <div className="flex flex-col items-end">
                        <div className="font-bold text-[#203c5c] uppercase text-end text-4xl anton-regular">
                            <h1>High</h1>
                            <h1>capacity</h1>
                        </div>
                        <div className="text-[#203c5c] manrope text-[12px] text-end mt-5">
                            <p>Our ships can transport large volumes</p>
                            <p>of goods, making maritime freight</p>
                            <p>ideal for bulk orders and heavy cargo.</p>
                        </div>
                        <div className="flex items-center w-full mt-8">
                            <div className=" w-[500px] h-[2px] bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
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
                <div className="flex justify-between items-center">
                    <div className="flex flex-col items-end">
                        <div className="font-bold text-[#203c5c] uppercase text-end text-4xl anton-regular">
                            <h1>High</h1>
                            <h1>capacity</h1>
                        </div>
                        <div className="text-[#203c5c] manrope text-[12px] text-end mt-5">
                            <p>Our ships can transport large volumes</p>
                            <p>of goods, making maritime freight</p>
                            <p>ideal for bulk orders and heavy cargo.</p>
                        </div>
                        <div className="flex items-center w-full mt-8">
                            <div className=" w-[500px] h-[2px] bg-white"></div>
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
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
            </div>
            <div className="relative mt-40">
                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ">
                    <h1 className=" text-6xl w-[800px] font-bold  text-center uppercase anton-regular text-white">we also provide you with brokerage services:</h1>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <div className="text-[#203c5c] font-bold text-4xl anton-regular text-end">
                            <p>01</p>
                            <h2 className="">business <br />broker</h2>
                        </div>
                        <div>
                            <p className="text-[#203c5c] manrope text-[12px] text-end mt-5 w-[350px] ">
                                We provide expert business brokerage services, ensuring
                                seamless execution of sales and acquisitions. Acting as
                                mediators between sellers and buyers, our brokers
                                facilitate transparent, efficient transactions. We
                                specialize in guiding both parties through complex
                                mergers, working diligently to achieve successful
                                outcomes for all involved
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="text-[#203c5c] font-bold text-4xl anton-regular text-start">
                            <p>02</p>
                            <h2 className="">business <br />broker</h2>
                        </div>
                        <div>
                            <p className="text-[#203c5c] manrope text-[12px] text-start mt-5 w-[350px] ">
                                We provide expert business brokerage services, ensuring
                                seamless execution of sales and acquisitions. Acting as
                                mediators between sellers and buyers, our brokers
                                facilitate transparent, efficient transactions. We
                                specialize in guiding both parties through complex
                                mergers, working diligently to achieve successful
                                outcomes for all involved
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}