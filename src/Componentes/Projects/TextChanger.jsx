import React, { useState, useEffect } from 'react';

const TextChanger = () => {
    const texts = ["Hello Dev I am Nischay", "I'm a Frontend Developer", "Welcome to my Portfolio"];
    const [currentText, setCurrentText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (isTyping) {
                // Typing forward
                if (currentIndex < texts[textIndex].length) {
                    setCurrentText(prev => prev + texts[textIndex][currentIndex]);
                    setCurrentIndex(prev => prev + 1);
                } else {
                    // Pause at end of text
                    setTimeout(() => setIsTyping(false), 1000);
                }
            } else {
                // Deleting backward
                if (currentText.length > 0) {
                    setCurrentText(prev => prev.slice(0, -1));
                } else {
                    // Move to next text when deleted
                    setTextIndex(prev => (prev + 1) % texts.length);
                    setCurrentIndex(0);
                    setIsTyping(true);
                }
            }
        }, 100); // Speed of typing/deleting

        return () => clearTimeout(timeout);
    }, [currentIndex, isTyping, currentText, textIndex, texts]);

    return (
        <div className='text-4xl font-bold h-16 flex items-center'>
            <span className='transition-all duration-100 ease-in-out'>
                {currentText}
            </span>
            <span className='animate-blink'>|</span> {/* Cursor effect */}
        </div>
    );
};

export default TextChanger;