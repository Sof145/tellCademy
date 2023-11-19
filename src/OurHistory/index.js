import React from 'react'
import { Image } from '@nextui-org/react'

export default function index() {
    return (
        <section className='flex justify-center mt-36 mb-8 gap-24 flex-wrap' >

            <div className='w-5/6 sm:w-1/3 space-y-8 mt-16' >

                <p className='text-6xl' >Nuestra Historia</p>

                <p>
                    TellCademy nació en 2022 cuando dos amigos buscaban el equilibrio perfecto entre el aprendizaje y la diversión.
                </p>

                <p>
                    Nuestra filosofía se basa en el equilibrio: un equilibrio entre las reglas gramaticales, aburridas pero necesarias
                    y los temas que a ti te apasionan.
                </p>

            </div>

            <div className='' >
                <Image
                    className='w-80 h-56 object-cover sm:w-56 sm:h-96'
                    isZoomed='true'
                    src='https://images.squarespace-cdn.com/content/v1/655907c48f6ab06f23a23547/1700338010587-01TJVWL2MRZOSG4ACW2I/image-asset.jpeg?format=2500w'
                />
            </div>

            <div className='hidden lg:block w-56 mt-36' >
                <Image
                    className='h-96 object-cover'
                    isZoomed='true'
                    src='https://images.squarespace-cdn.com/content/v1/655907c48f6ab06f23a23547/1700338149036-IZ7T81XBW2VE6BSCFK5Y/image-asset.jpeg?format=2500w'
                />
            </div>

        </section>
    )
}
