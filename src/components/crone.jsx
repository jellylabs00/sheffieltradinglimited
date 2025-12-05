import { motion } from "framer-motion";

export default function Crone() {
    // Animation variants for reusability
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
        <div>
            <div className="relative bg-[#d2dde9] z-10">
                {/* Clouds - Background layer */}
                <div className="absolute top-10 left-0 z-[1] w-full">
                    <img src="/assets/img/clouds-d.webp" alt="" className="w-[70%] h-full" />
                </div>

                {/* Crane - Left side, absolutely positioned */}
                <img
                    src="/assets/img/1.png"
                    alt="crane"
                    className="absolute top-0 left-0 z-[2] w-[53%] h-auto object-cover"
                />

                {/* Container - Sticky, centered, pins when scrolling */}
                <div className="sticky top-[100px] z-[10] flex justify-center pointer-events-none">
                    <div className="w-[500px] after:content-[''] after:absolute after:-top-12 after:left-1/2 after:-translate-x-1/2 after:w-[1px] after:h-[100px] after:bg-[#203c5c33]">
                        <img src="/assets/img/2.png" alt="container" className="w-full h-auto object-cover" />
                    </div>
                </div>

                {/* Main content - positioned above sticky container */}
                <div className="p-4 z-[5] relative -mt-[500px]">
                    {/* Hero Title */}
                    <div className="uppercase text-[200px] text-white flex justify-end items-end flex-col anton-regular">
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
                        <div className="overflow-hidden mt-[-120px]">
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
                        <ul className="flex gap-20 text-[#203c5c] underline underline-offset-4 text-xl uppercase anton-regular">
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
                    <div className="uppercase text-8xl mt-10 text-white flex justify-end items-start flex-col anton-regular">
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
                <div className="m-4 space-y-8 relative z-[5]">
                    <div className="">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={fadeInUp}
                            className="flex flex-col justify-end items-end"
                        >
                            <div>
                                <h2 className="anton-regular text-3xl uppercase text-start mb-5 text-[#203c5c]">
                                    experience and <br /> expertise
                                </h2>
                                <p className="w-[370px] manrope text-start text-[12px] text-[#203c5c]" style={{ lineHeight: '150%' }}>
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
                                <p className="w-[370px] manrope text-start text-[12px] text-[#203c5c]">
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
                            className="flex flex-col justify-end items-end"
                        >
                            <div>
                                <h2 className="anton-regular text-3xl uppercase text-start mb-5 text-[#203c5c]">
                                    dedicated to your<br /> success
                                </h2>
                                <p className="w-[370px] manrope text-start text-[12px] text-[#203c5c]">
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
                <div className="relative pb-20 z-[5]">
                    <div className="top-30 absolute z-1">
                        <img src="/assets/img/why-clouds.webp" alt="" className="w-full h-full" />
                    </div>
                    <div className="relative px-4 z-5">
                        <div className="uppercase anton-regular text-white flex justify-between text-[240px] overflow-hidden">
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
                            className="absolute right-1/2 translate-x-1/2 uppercase anton-regular text-[240px] text-white flex justify-center"
                        >
                            us?
                        </motion.span>
                    </div>

                    {/* Statistics Section */}
                    <div className="flex flex-rows px-4 mt-30 justify-between items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={fadeInUp}
                            className="flex flex-col justify-end items-end"
                        >
                            <div className="mb-20">
                                <div className="uppercase anton-regular text-center text-[#203c5c]">
                                    <h2 className="text-[2rem]">20+</h2>
                                    <p className="text-xl leading-[1]">Countries we<br />cooperate with</p>
                                </div>
                                <div>
                                    <img src="/assets/img/why-icon.svg" className="w-[150px]" alt="icon" />
                                </div>
                            </div>
                            <div>
                                <p className="manrope text-[12px] text-[#203c5c] w-[320px] pl-5 text-end">
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
                            className="flex flex-col justify-start items-start"
                        >
                            <div className="mb-20">
                                <div className="uppercase anton-regular text-center text-[#203c5c]">
                                    <h2 className="text-[2rem]">100+</h2>
                                    <p className="text-xl leading-[1]">successful<br />deliveries</p>
                                </div>
                                <div>
                                    <img src="/assets/img/why-icon.svg" className="w-[150px]" alt="icon" />
                                </div>
                            </div>
                            <div>
                                <p className="manrope text-[12px] text-[#203c5c] w-[320px] pr-5 text-start">
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
    );
}