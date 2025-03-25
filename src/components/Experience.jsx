import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';
import Footer from './Footer';

const Experience = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className='experience bg-black w-screen text-white pt-16 overflow-x-hidden' id='experience'>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={stagger}
        viewport={{ once: true, amount: 0.2 }}
        className='pt-12 sm:px-16'
      >
        <motion.div variants={fadeIn}>
          <p className='font-light text-violet-400'>MY JOURNEY SO FAR.</p>
          <h2 className='text-4xl sm:text-5xl font-extrabold mt-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'>
            Work Experience.
          </h2>
        </motion.div>

        <VerticalTimeline className='mt-9' lineColor='#4B0082'>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{
                background: 'rgba(29, 24, 54, 0.8)',
                color: '#fff',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 8px 32px rgba(75, 0, 130, 0.3)'
              }}
              contentArrowStyle={{ 
                borderRight: '7px solid rgba(35, 38, 49, 0.8)',
                filter: 'drop-shadow(0 0 8px rgba(75, 0, 130, 0.5))'
              }}
              date={experience.duration}
              dateClassName='text-violet-300'
              iconStyle={{ 
                background: 'linear-gradient(45deg, #4B0082, #6A5ACD)',
                boxShadow: '0 0 15px rgba(75, 0, 130, 0.5)'
              }}
              icon={
                <div className='flex justify-center items-center w-full h-full'>
                  <div className='w-4 h-4 bg-violet-400 rounded-full' />
                </div>
              }
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className='text-white text-2xl font-bold mb-2'>{experience.role}</h3>
                <p className='text-violet-300 font-medium text-lg'>
                  {experience.company}
                </p>

                <motion.ul className='mt-5 space-y-3'>
                  {experience.points.map((point, index) => (
                    <motion.li
                      key={index}
                      className='text-gray-300 text-base leading-relaxed pl-3 border-l-2 border-violet-700'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Footer />
      </motion.div>
    </div>
  )
}

export default Experience;