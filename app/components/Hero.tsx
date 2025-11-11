"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useState, useEffect, useMemo, useCallback } from "react";

// Lazy load motion for better performance
const MotionDiv = dynamic(() =>
    import("framer-motion").then((mod) => mod.motion.div)
);

export default function Hero() {
    // 🧠 Optimized typewriter hook
    const useTypewriter = ({
        words,
        loop = true,
        typeSpeed = 80,
        deleteSpeed = 50,
        delaySpeed = 2000,
    }: {
        words: string[];
        loop?: boolean;
        typeSpeed?: number;
        deleteSpeed?: number;
        delaySpeed?: number;
    }) => {
        const [text, setText] = useState("");
        const [index, setIndex] = useState(0);
        const [isDeleting, setIsDeleting] = useState(false);

        const currentWord = useMemo(() => words[index], [index, words]);

        useEffect(() => {
            const timeout = setTimeout(() => {
                setText((prev) =>
                    isDeleting
                        ? currentWord.substring(0, prev.length - 1)
                        : currentWord.substring(0, prev.length + 1)
                );

                if (!isDeleting && text === currentWord) {
                    setTimeout(() => setIsDeleting(true), delaySpeed);
                } else if (isDeleting && text === "") {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % words.length);
                }
            }, isDeleting ? deleteSpeed : typeSpeed);

            return () => clearTimeout(timeout);
        }, [text, isDeleting, currentWord, words, delaySpeed, deleteSpeed, typeSpeed]);

        return [text];
    };

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
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div className="relative group">
                    <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] border-2 border-teal-500 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                        <Image
                            src="https://res.cloudinary.com/dcfzqdk58/image/upload/v1762697245/Gemini_Generated_Image_gy2wkhgy2wkhgy2w_gaqyka.png"
                            alt="Jawad Jameel - Software Engineer"
                            width={350}
                            height={350}
                            loading="lazy"
                            quality={70}
                            priority={false}
                        />
                    </div>
                </div>
            </MotionDiv>

            {/* Left Content Section */}
            <MotionDiv
                className="order-2 md:order-1 md:w-1/2 space-y-4 mt-4 md:mt-0 px-2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
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
                        onClick={() => scrollToSection("porjects")}
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
