"use client";
import { useState, useEffect, useMemo, useRef } from "react";

interface TypewriterOptions {
    words: string[];
    loop?: boolean;
    typeSpeed?: number;
    deleteSpeed?: number;
    delaySpeed?: number;
}

export default function useTypewriter({
    words,
    loop = true,
    typeSpeed = 80,
    deleteSpeed = 50,
    delaySpeed = 2000,
}: TypewriterOptions): [string] {
    // ✅ provide initial values to avoid TS error
    const [text, setText] = useState<string>("");
    const [index, setIndex] = useState<number>(0);
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const currentWord = useMemo(() => words[index], [index, words]);

    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
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

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [text, isDeleting, currentWord, delaySpeed, deleteSpeed, typeSpeed, words]);

    return [text];
}
