import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import StickyBox from "react-sticky-box";

export default function Crone() {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Transform for the container to move down as you scroll
    const containerY = useTransform(scrollYProgress, [0, 1], [0, 400]);

    // Animation variants
    const slideUp = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
        }
    };

    const slideUpStagger = {
        hidden: { y: 100, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.15
            }
        })
    };

    const fadeInUp = {
        hidden: { y: 60, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <div ref={containerRef}>
            <div className="relative bg-[#d2dde9] z-10" id="about">
                <div className="">
                    {/* Clouds - Background layer */}
                    <div className="absolute top-10 left-0 z-1 w-full">
                        <img src="/assets/img/clouds-d.webp" alt="" className="w-[70%] h-full" />
                    </div>

                    {/* Crane - Left side, absolutely positioned */}
                    <img
                        src="/assets/img/1.png"
                        alt="crane"
                        className="absolute top-0 left-0 z-[2] w-[53%] h-auto object-cover"
                    />

                    {/* Container with StickyBox - FIXED VERSION */}
                    <div className=" hidden md:block absolute top-[55vw] left-0 z-10 w-full" style={{ minHeight: '1700px' }}>
                        <StickyBox offsetTop={10} offsetBottom={0}>
                            <div
                                // style={{ y: containerY }}
                                className="flex justify-center pointer-events-none"
                            >
                                <div className="w-[800px] relative ">
                                <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[2px] h-[200px] bg-[#203c5c] opacity-40 -z-10"></div>
                                    <img src="/assets/img/stl-container.png" alt="container" className="w-full h-auto object-cover" />
                                </div>
                            </div>
                        </StickyBox>
                    </div>

                    {/* Main content */}
                    <div className="p-4 z-5 relative">
                        {/* Hero Title */}
                        <div className="uppercase lg:text-[150px] leading-[1] md:text-[100px] text-[60px] text-white flex justify-end items-end flex-col anton-regular">
                            <div className="overflow-hidden">
                                <motion.h1
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    variants={slideUp}
                                >
                                    Influence pro
                                </motion.h1>
                            </div>
                            <div className="overflow-hidden">
                                <motion.h1
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    variants={{
                                        hidden: { y: 100, opacity: 0 },
                                        visible: {
                                            y: 0,
                                            opacity: 1,
                                            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }
                                        }
                                    }}
                                >
                                    trading
                                </motion.h1>
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex justify-end">
                            <ul className="flex md:gap-20 gap-10 text-[#203c5c] underline underline-offset-4 text-xl uppercase anton-regular">
                                {['About us', 'Service', 'logistic'].map((item, i) => (
                                    <motion.li
                                        key={item}
                                        custom={i}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.3 }}
                                        variants={slideUpStagger}
                                    >
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        {/* Subtitle Section */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                            className="flex flex-col justify-end items-end anton-regular gap-3 mt-5"
                        >
                            <h2 className="text-[#ff3d00] text-3xl uppercase w-[200px] text-end">
                                We are the best in our field
                            </h2>
                            <p className="text-end w-[290px] text-[12px] manrope text-[#203c5c]">
                                Influence Pro Trading is a dynamic leader in the wholesale
                                distribution industry, offering an extensive range of
                                products designed to meet the diverse needs of businesses
                                globally.
                            </p>
                        </motion.div>

                        {/* Secondary Title with Viewport Trigger */}
                        <div className="uppercase md:text-8xl text-[50px] mt-10 leading-[1] text-white flex justify-end items-start flex-col anton-regular">
                            {['Empowering your', 'growth through', 'partnership'].map((text, i) => (
                                <div key={i} className="">
                                    <motion.h2
                                        custom={i}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.3 }}
                                        variants={slideUpStagger}
                                    >
                                        {text}
                                    </motion.h2>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Content Sections with Scroll Triggers */}
                    <div className="m-4 space-y-8 relative z-5">
                        <div className="flex flex-col gap-10">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={fadeInUp}
                                className="flex flex-col justify-end md:items-end items-start"
                            >
                                <div>
                                    <h2 className="anton-regular text-3xl uppercase text-start mb-5 text-[#203c5c]">
                                        experience and <br /> expertise
                                    </h2>
                                    <p className="max-w-[370px] manrope text-start text-[12px] text-[#203c5c]" style={{ lineHeight: '150%' }}>
                                        At Influence Pro Trading, we are more than just a
                                        wholesale distributor; we are a strategic partner
                                        committed to fueling your business's growth. With years of
                                        experience in the industry, we have honed our expertise to
                                        offer a vast array of products, including computers,
                                        electronics, and agricultural supplies, ensuring that we
                                        cater to a diverse range of industries.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={fadeInUp}
                                className="flex flex-col justify-start items-start"
                            >
                                <div>
                                    <h2 className="anton-regular text-3xl uppercase text-start mb-5 text-[#203c5c]">
                                        tailored solutions<br />for every need
                                    </h2>
                                    <p className="max-w-[370px] manrope text-start text-[12px] text-[#203c5c]">
                                        We understand that in a fast-paced world, businesses need
                                        reliable suppliers who can offer not just products, but
                                        solutions. That's why we focus on providing tailored
                                        services that align with your specific needs, whether
                                        you're looking to equip an entire office, manage a
                                        large-scale agricultural project, or stay ahead in the
                                        tech industry. Our global network ensures that we can
                                        source and deliver the best products from around the
                                        world, backed by our commitment to quality and customer
                                        satisfaction.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={fadeInUp}
                                className="flex flex-col justify-end md:items-end items-start"
                            >
                                <div>
                                    <h2 className="anton-regular text-3xl uppercase text-start mb-5 text-[#203c5c]">
                                        dedicated to your<br /> success
                                    </h2>
                                    <p className="max-w-[370px] manrope text-start text-[12px] text-[#203c5c]">
                                        Our team is dedicated to building long-lasting
                                        relationships with our clients. We believe in a
                                        partnership approach, working closely with you to
                                        understand your goals and challenges. This allows us to
                                        offer more than just products—we provide insights, advice,
                                        and a level of service that sets us apart in the industry.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Why Choose Us Section */}
                    <div className="relative pb-20 z-5">
                        <div className="top-30 absolute z-1">
                            <img src="/assets/img/why-clouds.webp" alt="" className="w-full h-full" />
                        </div>
                        <div className="relative px-4 z-5 ">
                            <div className="uppercase anton-regular text-white flex justify-between lg:text-[200px] md:text-[100px] text-[70px] ">
                                <motion.span
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    variants={{
                                        hidden: { y: 100, opacity: 0 },
                                        visible: {
                                            y: 0,
                                            opacity: 1,
                                            transition: { duration: 0.8, ease: "easeOut" }
                                        }
                                    }}
                                >
                                    Why
                                </motion.span>
                                <motion.span
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    variants={{
                                        hidden: { y: 100, opacity: 0 },
                                        visible: {
                                            y: 0,
                                            opacity: 1,
                                            transition: { duration: 0.8, ease: "easeOut" }
                                        }
                                    }}
                                >
                                    Choose
                                </motion.span>
                            </div>
                            <motion.span
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={{
                                    hidden: { y: 100, opacity: 0 },
                                    visible: {
                                        y: 0,
                                        opacity: 1,
                                        transition: { duration: 0.8, ease: "easeOut", delay: 0.3 }
                                    }
                                }}
                                className="absolute right-1/2 translate-x-1/2 uppercase anton-regular lg:text-[200px] md:text-[100px] text-[70px] text-white flex justify-center"
                            >
                                us?
                            </motion.span>
                        </div>

                        <div className=" md:hidden relative  left-0 z-10 w-full" >
                            <div
                                // style={{ y: containerY }}
                                className="flex justify-center pointer-events-none"
                            >
                                <div className="w-[500px] relative after:content-[''] after:absolute after:bottom-[600px] after:left-1/2 after:-translate-x-1/2 after:w-[1px] after:h-[1200px] after:bg-[#203c5c33]">
                                    <img src="/assets/img/2.png" alt="container" className="w-full h-auto object-cover" />
                                </div>
                            </div>
                        </div>

                        {/* Statistics Section */}
                        < div className="flex flex-col md:flex-row  px-4 md:mt-30 justify-between gap-10 md:gap-0 items-center" >
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={fadeInUp}
                                className="flex flex-col justify-end md:items-end items-center"
                            >
                                <div className="md:mb-20 mb-10">
                                    <div className="uppercase anton-regular text-center text-[#203c5c]">
                                        <h2 className="text-[2rem]">20+</h2>
                                        <p className="text-xl leading-none">Countries we<br />cooperate with</p>
                                    </div>
                                    <div>
                                        <img src="/assets/img/why-icon.svg" className="w-[150px]" alt="icon" />
                                    </div>
                                </div>
                                <div>
                                    <p className="manrope text-[12px] text-[#203c5c] w-[320px] md:pl-5 pl-0 md:text-end text-center">
                                        At Influence Pro Trading, we aspire to redefine global
                                        wholesale distribution by offering exceptional quality and
                                        innovative solutions. Our goal is to be the trusted
                                        partner that drives growth and success for businesses
                                        worldwide.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={{
                                    hidden: { y: 60, opacity: 0 },
                                    visible: {
                                        y: 0,
                                        opacity: 1,
                                        transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
                                    }
                                }}
                                className="flex flex-col justify-start md:items-start items-center"
                            >
                                <div className="md:mb-20 mb-10">
                                    <div className="uppercase anton-regular text-center text-[#203c5c]">
                                        <h2 className="text-[2rem]">100+</h2>
                                        <p className="text-xl leading-none">successful<br />deliveries</p>
                                    </div>
                                    <div>
                                        <img src="/assets/img/why-icon.svg" className="w-[150px]" alt="icon" />
                                    </div>
                                </div>
                                <div>
                                    <p className="manrope text-[12px] text-[#203c5c] w-[320px] md:pr-5 p-0 md:text-start text-center">
                                        At Influence Pro Trading, we aspire to redefine global
                                        wholesale distribution by offering exceptional quality and
                                        innovative solutions. Our goal is to be the trusted
                                        partner that drives growth and success for businesses
                                        worldwide.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}