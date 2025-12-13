import { motion } from "framer-motion";
const descVariants = {
    rest: {
        opacity: 0,
        y: 20,
    },
    hover: {
        opacity: 1,
        y: 0,
    },
};


// 1. Create a reusable component to keep code clean
const Card = ({ color, title, subtitle, img, id, desc }) => {
    return (
        <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
                rest: { scale: 1 },
                hover: { scale: 1.05 }
            }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className={`${color} p-4 cursor-pointer z-10 relative bg-cover bg-center overflow-hidden`}
            style={{ backgroundImage: `url(${img})` }}
        >
            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1c3860] z-0" />

            <div className="relative flex flex-col justify-end h-full text-white z-10">

                {/* 👇 HIDDEN BY DEFAULT – SHOW ON HOVER */}
                <motion.p
                    variants={descVariants}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-xl manrope font-extralight mb-10 z-10 leading-[1]"
                >
                    {desc}
                </motion.p>


                {/* Title */}
                <div className="flex items-center">
                    <h1 className="text-4xl font-bold uppercase bg-gradient-to-b from-white via-white/90 to-transparent bg-clip-text text-transparent">
                        {title}
                    </h1>
                    <p className="text-4xl font-bold uppercase text-[#0466c8] ml-2">
                        {id}
                    </p>
                </div>

                {/* Subtitle */}
                <p className="text-2xl uppercase mt-2">{subtitle}</p>

                <div className="w-16 h-1 mt-4 bg-[#0466c8]" />
            </div>
        </motion.div>
    );
};


export default function Section() {
    // Data for the cards before:content-[''] before:z-0 before:absolute before:top-0 before:left-0 before:w-full before:h-[32rem] before:bg-[linear-gradient(175deg,_#203c5c_-15.77%,_#d2dde9_81.91%)]
    const cards = [
        { id: 1, img: "/assets/img/cards/1.jpg", color: "bg-red-500", title: "step", subtitle: "Requirement Mapping", desc: "We capture technical specs, brands, and compliance needs." },
        { id: 2, img: "/assets/img/cards/2.jpg", color: "bg-green-500", title: "step", subtitle: "Strategic Sourcing", desc: "Verified suppliers, OEM-only options, best lead time." },
        { id: 3, img: "/assets/img/cards/3.jpg", color: "bg-blue-500", title: "step", subtitle: "Commercial Finalisation", desc: "Transparent quote, Incoterms, payment, and documentation." },
        { id: 4, img: "/assets/img/cards/4.jpg", color: "bg-yellow-500", title: "step", subtitle: "Export Execution", desc: "Professional packing, courier paperwork, and global delivery." },
    ];

    return (
        <div className="lg:px-20 px-4 py-25 relative z-10  bg-[#0466c8]">
            {/* Container shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)]*/}
            <div>
                <h1 className="text-7xl font-bold uppercase text-white text-center mx-auto mb-20 anton-regular">Our 4-Step Procurement Process</h1>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 h-[600px] rounded-2xl  content-visibility:auto anton-regular shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)]" >
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        color={card.color}
                        title={card.title}
                        subtitle={card.subtitle}
                        img={card.img}
                        id={card.id}
                        desc={card.desc}
                    />
                ))}
            </div>
        </div>
    );
}