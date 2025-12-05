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
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
        }
    };
    const header =[
        {
            title:'info@influenceprotrading.com',
            icon:'Mail',
            link:'/'
        },
        {
            title:'123 Main St, Anytown, USA',
            icon:'MapPin',
            link:'/'
        },
        {
            title:'+1 (555) 123-4567',
            icon:'Phone',
            link:'/'
        }
    ]
    return (
        <div className="bg-[#0466c8] px-10 py-10 relative z-10">
            <div className="grid grid-cols-2">
                <div>
                    <ul className="flex gap-20 text-white underline underline-offset-4 text-xl uppercase anton-regular">
                        {['About us', 'Service', 'logistic', 'faq'].map((item, i) => (
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
                    <div className="flex gap-5 text-white">
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
            <div className="grid grid-cols-2 mt-20">
                <div>
                    <img src="/assets/img/footer-logo.svg" alt="logo" />
                </div>
                <div className="anton-regular flex flex-col justify-center items-start text-[128px] leading-[1] text-white uppercase ">
                    <div className="">
                        <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={slideUp}>influence pro</motion.h1>
                    </div>
                    <div className="">
                        <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={slideUp}>trading</motion.h1>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 mt-20">
                <div>
                    <p className="anton-regular text-xl text-white">
                        influence pro trading ©2024, logistic provider
                    </p>
                </div>
                <div className="anton-regular flex text-xl justify-between items-start leading-[1] text-white uppercase ">
                    <p>all rights reserved</p>
                    <p>Developed by JellyLabs.co.uk</p>
                </div>
            </div>
        </div>
    );
}