
import React, { useEffect, useState } from 'react'

import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import logo from "../src/assets/logo.png"
import MobNav from './MobNav'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(true);
    const [isOpen, setisOpen] = useState(false)
    const links = [
        
        'How it Works',
        'Why Us?',
         'Roadmap',
         'Features',
         'FAQ'
    ]


  return (
    
              <div>
            <div className={`fixed  py-6 top-0 left-0 right-0 z-40 ${scrolled  ? "bg-white" : "bg-transparent"}`}>
                <div className='flex items-center  md:gap-1 lg:gap-4 max-w-screen-xl mx-auto px-[20px] py-4 md:py-3'>
                    
                    <div className='flex gap-2 justify-center items-center'>
                    <img src={logo} alt="pic" />
                    <h1 className= 'md:text-[18px] text-[28px]  font-Manrope font-extrabold text-black'>Guard Wallet</h1>
                    </div>
                        
                    
                    <div className='grow'>
                        <div className='hidden scroll-smooth font-Manrope text-[#64748B] md:flex md:gap-3 lg:gap-9 items-center justify-center'>
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
                                return <a key={i}
                                    href={`#${x}`}
                                    className='text-[#64748B] scroll-smooth capitalize text-[15px] lg:text-[16px] hover:underline underline-offset-8 hover:scale-105 duration-700 cursor-pointer font-medium'>
                                    {item}
                                </a>
                            })}
                        </div>
                    </div>
                    <div className='hidden md:flex gap-4 relative '>
                        <button className="rounded font-Manrope font-semibold text-[#020617] text-[15px] bg-[#F1F5F9] lg:text-[16px] relative overflow-hidden inline-flex group items-center justify-center px-3.5 py-1.5  cursor-pointer active:shadow-none shadow-lg btn-bg ">
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
                    <div className='md:hidden flex'>
                        <div className="cursor-pointer" onClick={() => setisOpen(true)} >
                            <Bars3BottomRightIcon
                                className={`h-[35px] text-[#020617] transition-all duration-1000 ease-in-out `}
                            />
                        </div>


                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='fixed inset-0 z-50 h-screen bg-black' >
                    <MobNav setisOpen={setisOpen} />
                </div>
            )}
        </div>
    
  )
}

export default Navbar
