import React from 'react';
import { motion } from 'framer-motion';
import SearchBar from './components/SearchBar';
import { searchIndex, PageIndex } from './content/searchIndex';

const LandingPage: React.FC = () => {
  return (
    <div className="h-screen w-[99.8%] ml-[0.1%] flex flex-col items-center bg-gray-50 wikipedia-font scrollbar overflow-y-scroll overflow-hidden">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
        >
            <div className='w-screen flex flex-col flex-nowrap h-[50vh] items-center justify-center'>
                <img src="/coffee-cup.png" className='w-72'/>
                <h1 className='text-5xl font-bold'>Glemmen DevDocs</h1>
                <p className='text-lg font-bold m-2 mb-6'>Utviklerens Encyklopedi</p>
                <SearchBar />
            </div>

            <div className='w-screen flex justify-center'>
                <hr className='w-1/3 border-stone-600'/>
            </div>
        </motion.div>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            viewport={{ once: true }}
            className='absolute bottom-3 left-1/2 -translate-x-1/2'
        >
            <p className='text-sm text-gray-600'>Utviklet av <a href="https://sindresve.no" className='underline text-blue-600'>sindresve</a></p>
        </motion.div>
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            viewport={{ once: true }}
        >
            <div className='w-screen flex flex-col flex-nowrap items-center justify-center mt-5'>
                <div className='w-1/2 flex flex-row flex-wrap gap-5 justify-center'>
                    {searchIndex.map((item: PageIndex, index: number) => (
                        <a key={index} href={item.path}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5 * (index + 1) }}
                                viewport={{ once: true }}
                                className="p-4 border rounded-lg shadow-sm shadow-stone-600 w-56 h-32 hover:bg-stone-200"
                            >
                                    <h2 className="text-xl font-bold text-black">{item.title}</h2>
                                    <p className="text-gray-800">{item.content}</p>
                                
                            </motion.div>
                        </a>
                    ))}
                </div>
            </div>
        </motion.div>
    </div>
  );
};

export default LandingPage;
