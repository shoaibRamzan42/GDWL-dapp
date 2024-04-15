import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import logo from "../src/assets/logo.png"
import { motion } from 'framer-motion';
// import { textVariant } from './motions';

const MobNav = ({ setisOpen }) => {
 const address = "" ;
   
    const[wallet , setWallet] = useState("Connect Wallet");
    function extractFirstAndLastFive(address) {
        const firstFive = address.slice(0, 5);
        const lastFive = address.slice(-5);
        return firstFive + "..." + lastFive;
      }
    const links = [
        
        'How it Works',
        'Why Us?',
         'Roadmap',
         'Features',
         'FAQ'
    ]

    let isConnect = false
    

    return (
        <div className='block md:hidden'>

            <div className='fixed inset-0 bg-blue-50 px-[20px] py-[20px]'>
                <div className='relative h-full'>
                    <div className='flex justify-between items-center'>
                    <div className='flex gap-2 justify-center items-center'>
                    <img src={logo} alt="pic" />
                    <h1 className= 'md:text-[10px] text-[28px]  font-Manrope font-extrabold text-black'>Guard Wallet</h1>
                    </div>

                        <XMarkIcon
                            onClick={() => setisOpen(false)} className='w-[35px] text-[#020617]'
                        />
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className='lg:pt-[90px]'
                    >
                        <div className='mt-[60px] flex flex-col gap-[20px]'>
                            {links.map((item, i) => {


                                let x = item
                                if (x === 'Staking') {
                                    x = 'buy'
                                }
                                if (x === 'About') {
                                    x = 'about'
                                }
                                if (x === 'RoadMap') {
                                    x = 'road'
                                }
                                return <motion.a
                                    // variants={textVariant(0.2 * (i + 1))}
                                    className={'text-[20px] font-Slackey font-bold capitalize text-center text-[#64748B] list-none'}
                                    viewport={{ once: true }}
                                    href={`#${x}`}
                                    onClick={() => setisOpen(false)}
                                >
                                    {item}
                                </motion.a>
                            })}

                        </div>
                    </motion.div>


                    <div className='absolute bottom-[20px] left-0 right-0 '>
                        <motion.div
                            whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
                            transition={{ duration: 1.2, ease: 'easeInOut' }}
                            initial='hidden'
                            style={{ opacity: 0 }}
                            viewport={{ once: true }}
                        >

                            <div
                                className='flex flex-col gap-[20px]'
                            >
                               <button className="rounded font-Manrope font-semibold text-[#020617] text-[15px] bg-[#e7f0fa] lg:text-[16px] relative overflow-hidden inline-flex group items-center justify-center px-3.5 py-1.5  cursor-pointer active:shadow-none shadow-lg btn-bg ">
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out   rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                            <span className="relative">Pre Sale
            </span>
                        </button>
                        <button className="rounded font-Manrope font-semibold bg-[#1E293B] text-white text-[15px] lg:text-[16px] relative overflow-hidden inline-flex group items-center justify-center px-3.5 py-1.5  cursor-pointer active:shadow-none shadow-lg btn-bg ">
                            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                            <span className="relative">Launch dApp
            </span>
                        </button>

                            </div>

                        </motion.div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default MobNav