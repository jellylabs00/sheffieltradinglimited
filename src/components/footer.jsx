import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from 'lucide-react';
export default function Footer() {
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
    const slideUp = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 2, ease: [0.25, 0.1, 0.25, 1] }
        }
    };
    const header = [
        {
            title: 'sales@sheffieldtradinglimited.com',
            icon: Mail,
            link: '/'
        },
        {
            title: '123 Main St,UK',
            icon: MapPin,
            link: '/'
        },
        {
            title: '0044-1143086090',
            icon: Phone,
            link: '/'
        }
    ]
    return (
        <div className="bg-[#0466c8] md:p-10 p-4 relative z-10 overflow-hidden">
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-10">
                <div>
                    <ul className="flex md:gap-20 gap-10 text-white justify-between  uppercase anton-regular">
                        {['oem parts','technical sourcing','global delivery'].map((item, i) => (
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
                <div>
                    <div className="flex flex-col md:flex-row justify-between gap-5 text-white manrope ">
                        {header.map((item, i) => (
                            <motion.div
                                key={item}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                variants={slideUpStagger}
                                className="flex gap-3">
                                <item.icon />
                                <p>{item.title}</p>
                            </motion.div>
                        ))}

                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-20  text-center">

                <div className="flex lg:justify-start justify-center items-start order-2 lg:order-1">
                    <img src="/assets/img/stl-white-3.png" alt="logo" className="w-[300px]" />
                </div>


                <div className="anton-regular flex flex-col justify-center items-center lg:justify-center lg:items-center 2xl:text-[100px] lg:text-[80px]  md:text-[60px] text-[40px] leading-[1] text-white uppercase order-1 lg:order-2"
                >
                    <div>
                        <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={slideUp}>Sheffield Trading</motion.h1>
                    </div>
                    <div>
                        <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={slideUp} className="text-end">Limited</motion.h1>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 mt-20 uppercase">
                <div>
                    <p className="anton-regular leading-[1] text-white">
                       Sheffield Trading Limited ©2025, Procurement partner
                    </p>
                </div>
                <div className="anton-regular flex mt-5 lg:mt-0  md:flex-row  justify-between items-start leading-[1] text-white uppercase ">
                    <p>all rights reserved</p>
                    
                    <a href="https://jellylabs.co.uk/jellycreatives/" target="_blank">Developed by JellyLabs.co.uk</a>
                </div>
            </div>
        </div>
    );
}