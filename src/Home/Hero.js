import React from 'react'
import { Image } from "@nextui-org/react";
import StudentsImage from '../Assets/images/students.jpg'
import Background from './Background';
import flag from '../Assets/images/flag.jpeg'
export default function Hero() {
    return (
        <section className='flex flex-col items-center justify-center relative overflow-hidden'>
            <Background />
            <div className='flex justify-center w-[80%] mt-12 gap-20'>
                <div className='grow-[1] basis-1/4'>
                    <Image
                        isZoomed
                        alt=""
                        src={StudentsImage}
                    />
                </div>
                <h1 className='text-8xl basis-1/4 grow-[3] flex items-center text-[#022359]'>
                    Mejora tu inglés, practica, diviértete y aprende!
                </h1>
            </div>
            <div className='justify-end'>
                <div className='m-w-30'>
                    <div className=''>
                        <Image
                            isZoomed
                            alt=""
                            src={flag}
                        />
                    </div>
                    <h2 className='text-4xl basis-1/4 grow-[3] flex items-center text-[#022359]'>
                        Mejora tu inglés, practica, diviértete y aprende!
                    </h2>
                </div>
            </div>
        </section>
    )
}

