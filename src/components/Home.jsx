import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
import { motion } from "framer-motion";
import Background from './Background';
import Footer from './Footer';

const Home = () => {
    const ref = useRef(0);
    const [text, setText] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            if (ref.current < name.length) {
                ref.current++;
                setText(prevText => prevText + name[ref.current - 1]);
            }
        }, 500);
        return () => clearInterval(interval);
    }, []); // Removed text from dependencies array

    return (
        <div className='relative min-h-screen bg-black pb-16'> {/* Main container */}
            {/* Animated background elements */}
            <ul className="circles">
                {[...Array(10)].map((_, index) => (
                    <li key={index} className="absolute animate-pulse" />
                ))}
            </ul>

            {/* Main content area */}
            <div className='relative h-[calc(100vh-4rem)] flex justify-center items-center text-white'>
                <motion.div 
                    className='pt-4 h-36 backdrop-blur-sm rounded-3xl text-center'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className='text-4xl sm:text-6xl md:text-7xl font-bold mt-2'>
                        Hi, This is&nbsp;
                        <span className='text-yellow-200 font-extrabold'>
                            {text}
                            <span className="ml-1 animate-blink">|</span>
                        </span>
                    </h1>
                    <motion.p 
                        className='mt-3 text-lg md:text-xl text-gray-300'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        Building scalable backend systems with cutting-edge technologies
                    </motion.p>
                </motion.div>
            </div>

            {/* Fixed Footer */}
            <div className="fixed bottom-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm border-t border-gray-800">
                <Footer />
            </div>
        </div>
    );
}

export default Home;