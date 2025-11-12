"use client";
import useTypewriter from "./useTypewriter";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useCallback } from "react";

// Lazy load motion for better performance
const MotionDiv = dynamic(() =>
    import("framer-motion").then((mod) => mod.motion.div)
);

export default function Hero() {
    // 🧠 Optimized typewriter hook

    const [text] = useTypewriter({
        words: [
            "Frontend Developer",
            "Web Designer",
            "MERN Stack Developer",
            "I build clean UI",
        ],
    });

    // 🧭 Optimized scroll handler
    const scrollToSection = useCallback((id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <section
            id="home"
            className="w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10 py-8 md:py-16 bg-white overflow-hidden mb-10"
        >
            {/* Right Image Section */}
            <MotionDiv
                className="order-1 md:order-2 md:w-1/2 flex flex-col items-center justify-center mt-2 md:mt-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true ,amount: 0.5}}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <div className="relative group">
                    <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] border-2 border-teal-500 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                        <Image
                            src="/image1.webp"
                            alt="Jawad Jameel - Software Engineer"
                            width={1200}
                            height={800}
                            quality={70}
                            placeholder="blur"
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />

                    </div>
                </div>
            </MotionDiv>

            {/* Left Content Section */}
            <MotionDiv
                className="order-2 md:order-1 md:w-1/2 space-y-4 mt-4 md:mt-0 px-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                <p className="text-xs mt-4 text-gray-500">
                    Hi There <span className="text-lg">👋</span> I am
                </p>

                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                    Jawad Jameel
                </h1>

                <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 flex items-center gap-1">
                    I'm a{" "}
                    <span className="text-teal-600 font-bold">{text}</span>
                    <span className="text-teal-600 animate-pulse">|</span>
                </h2>

                <p className="text-gray-600 leading-relaxed max-w-md text-sm sm:text-base">
                    MERN Stack Expert with one+ years of experience building scalable web
                    applications. I specialize in the MERN stack, crafting clean, efficient
                    code that powers high-performance products.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
                    <button
                        onClick={() => scrollToSection("projects")}
                        className="bg-black text-white font-semibold px-6 py-3 rounded-md text-sm hover:bg-gray-800 transition-all duration-300"
                    >
                        VIEW PORTFOLIO →
                    </button>

                    <button
                        onClick={() => scrollToSection("contact")}
                        className="bg-teal-500 text-white font-semibold px-6 py-3 rounded-md text-sm hover:bg-teal-600 transition-all duration-300"
                    >
                        HIRE ME →
                    </button>
                </div>
            </MotionDiv>
        </section>
    );
}