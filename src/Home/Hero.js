import React from 'react'
import { Button, Image, Link } from "@nextui-org/react";
import StudentsImage from '../Assets/images/students.jpg'
import Background from './Background';
import flag from '../Assets/images/flag.jpeg'
export default function Hero() {
    return (
        <section className='flex flex-col items-center justify-center relative overflow-hidden text-[#022359]'>
            <Background />
            <div className='flex justify-center w-[80%] gap-[10%] flex-wrap flex-wrap-reverse pt-20'>
                <div className='grow-[1] basis-1/4'>
                    <Image
                        isZoomed
                        alt=""
                        src={StudentsImage}
                    />
                </div>
                <div className='lg:text-8xl text-6xl basis-1/4 grow-[3] flex flex-col justify-center text-[#022359]'>
                    <h1>
                        Mejora tu inglés, práctica, diviértete y aprende!
                    </h1>
                    <Link
                        target='_blank'
                        rel='noreferrer noopener'
                        href='https://api.whatsapp.com/send/?phone=%2B573209462296&text=Hola,+estoy+interesado+en+reservar+una+clase'>
                        <Button
                            size='lg'
                            className='my-8 lg:w-1/3 bg-[#022359]'
                            color='danger'>
                            Agendar clase
                        </Button>
                    </Link>
                </div>
            </div>

            <div className='flex justify-center w-[80%] mt-12 flex-wrap my-20'>
                <div className='grow-[2] basis-1/4 lg:min-w-[0] min-w-[80%]'></div>
                <div className='grow-[2] basis-1/4 flex gap-6 items-center flex-wrap flex-wrap-reverse'>
                    <div className='grow-[1] basis-1/4 lg:min-w-[40%] min-w-[60%]'>
                        <Image
                            isZoomed
                            alt=""
                            src={flag}
                        />
                    </div>
                    <div className='text-xl basis-1/4 grow-[3]'>
                        <h2 className='text-3xl'>
                            Entiende el mundo 🌍
                        </h2>
                        <p className="mt-6">
                            El mundo está en inglés, viaja, haz negocios, descubre oportunidades!
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}

