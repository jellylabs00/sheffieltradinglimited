import { useState } from 'react';
import { ArrowDownLeft, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
    {
        id: 1,
        number: '01',
        question: 'what products does influence pro trading specialise in?',
        answer: 'We specialize in wholesale distribution of agro products, textiles, electronics, and a variety of other high-demand items, offering reliable and quality-focused solutions for businesses.'
    },
    {
        id: 2,
        number: '02',
        question: 'what products does influence pro trading specialise in?',
        answer: 'You can place an order by contacting our sales team directly through email or phone. Our representatives will guide you through the process and help you with product selection.'
    },
    {
        id: 3,
        number: '03',
        question: 'what products does influence pro trading specialise in?',
        answer: 'We offer flexible payment terms including advance payment, letter of credit, and net payment options depending on the order size and customer relationship.'
    },
    {
        id: 4,
        number: '04',
        question: 'what products does influence pro trading specialise in?',
        answer: 'Yes, we provide international shipping to multiple countries. Shipping costs and delivery times vary based on destination and order volume.'
    }
];

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // Animation variants for FAQ items
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
                delay: i * 0.1
            }
        })
    };

    // Animation variants for answer content
    const answerVariants = {
        hidden: {
            height: 0,
            opacity: 0,
            transition: {
                height: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
                opacity: { duration: 0.2 }
            }
        },
        visible: {
            height: "auto",
            opacity: 1,
            transition: {
                height: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
                opacity: { duration: 0.3, delay: 0.1 }
            }
        }
    };

    return (
        <div className='bg-[#d2dde9] px-10 min-h-screen py-10 relative z-10'>
            <div>
                <div className="grid grid-cols-2 uppercase anton-regular mb-20">
                    <div>
                        <h2 className='text-[32px] leading-[1] w-[200px] text-[#ff3d00]'>still have doubts?</h2>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h1 className='text-[32px] leading-[1] w-[500px] text-[#203c5c]'>Contact us to get all your questions answered for sure</h1>
                        </div>
                        <div className='w-30 h-30 bg-[#ff3d00] text-white flex items-center justify-center rounded-full'>
                            <ArrowDownLeft />
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-6'>
                    {faqData.map((faq, index) => (
                        <motion.div
                            key={faq.id}
                            className='border-b border-[#203c5c]'
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={itemVariants}
                        >
                            <div
                                className='grid grid-cols-2 anton-regular uppercase py-3 cursor-pointer'
                                onClick={() => toggleFaq(index)}
                            >
                                <div>
                                    <h2 className='text-2xl manrope text-[#203c5c]'>{faq.number}</h2>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <h2 className='text-xl text-[#203c5c] leading-[1] w-[300px]'>{faq.question}</h2>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                                    >
                                        <ChevronDown className="text-[#203c5c]" />
                                    </motion.div>
                                </div>
                            </div>

                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        className='grid grid-cols-2 overflow-hidden'
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={answerVariants}
                                    >
                                        <div></div>
                                        <motion.div
                                            initial={{ y: -10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -10, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="pb-4"
                                        >
                                            <p className='manrope text-[12px] w-[420px] text-[#203c5c]'>
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}