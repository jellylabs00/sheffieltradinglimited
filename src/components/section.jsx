import { motion } from "framer-motion";

// 1. Create a reusable component to keep code clean
const Card = ({ color, title, subtitle, img, id }) => {
    return (
        <motion.div
            // 2. The Animation Settings
            whileHover={{
                y: -10, // Move up slightly
                scale: 1.05, // Grow larger
                zIndex: 10, // Bring to front over other cards
                boxShadow: "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)" // Tailwind 'shadow-xl' equivalent
            }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className={`${color} p-4 cursor-pointer z-10 relative bg-cover bg-center`} // relative is needed for zIndex
            style={{ backgroundImage: `url(${img})` }}
        >
            <div className="flex flex-col justify-end items-start h-full text-white">
                <div className="w-full h-full bg-gradient-to-b absolute inset-0 z-0 from- to-[#1c3860]/100"></div>
                <div className="flex z-10">
                    <h1 className="text-4xl font-bold uppercase bg-gradient-to-b from-white via-white/90 to-transparent bg-clip-text text-transparent">
                        {title}
                    </h1>
                    <p className="text-4xl font-bold uppercase text-[#0466c8] ml-2">{` ${id}`}</p>
                </div>
                <p className="text-xl z-10">{subtitle}</p>
                <div className="w-16 h-1 mt-4 bg-[#0466c8] z-10"></div>
            </div>
        </motion.div>
    );
};

export default function Section() {
    // Data for the cards
    const cards = [
        { id: 1, img: "https://images.unsplash.com/photo-1605732563938-8f8d4e7ad651?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", color: "bg-red-500", title: "Part", subtitle: "Company Introduction" },
        { id: 2, img: "https://images.unsplash.com/photo-1670121180530-cfcba4438038?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", color: "bg-green-500", title: "Part", subtitle: "History of Sheffield Trading" },
        { id: 3, img: "https://images.unsplash.com/photo-1721937718756-3bfec49f42a2?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", color: "bg-blue-500", title: "Part", subtitle: "Team Introduction" },
        { id: 4, img: "https://images.unsplash.com/photo-1595405987009-9787714870b3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", color: "bg-yellow-500", title: "Part", subtitle: "Products" },
    ];

    return (
        <div className="p-4 relative z-10 before:content-[''] before:z-0 before:absolute before:top-0 before:left-0 before:w-full before:h-[32rem] before:bg-[linear-gradient(175deg,_#203c5c_-15.77%,_#d2dde9_81.91%)] bg-[#d2dde9]">
            {/* Container shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)]*/}
            <div className="grid md:grid-cols-4 grid-cols-2 h-[600px] bg-transparent content-visibility:auto anton-regular " >
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        color={card.color}
                        title={card.title}
                        subtitle={card.subtitle}
                        img={card.img}
                        id={card.id}
                    />
                ))}
            </div>
        </div>
    );
}