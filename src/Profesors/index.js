import { Button, Image } from '@nextui-org/react'
import React from 'react'

export default function index() {
    return (
        <section
            className='flex flex-col items-center justify-center px-10 gap-14
             mt-32 md:flex-row md:items-start'
        >

            <div className='w-5/6 md:w-80 space-y-8' >

                <p
                    className='text-xl sm:text-sm'
                >
                    Nuestros Profesores
                </p>

                <p>Contamos con profesores apasionados, divertidos y profesionales.</p>

                <Button
                    color='primary'
                    size='lg'
                >
                    Agendar Clase
                </Button>

            </div>

            <div className='w-5/6 md:w-80 space-y-4' >

                <Image
                    isZoomed='true'
                    src='https://images.squarespace-cdn.com/content/v1/655907c48f6ab06f23a23547/1700337619651-1IQ1WAKQA1OM6O1MDMO0/image-asset.jpeg?format=2500w'
                />

                <p className='text-xl' >Hablemos de lo que te gusta</p>

                <p
                    className='text-sm'
                >
                    Tu pones el tema de la clase, nosotros te ayudamos con la gramatica, te gusta la moda?
                    Descubriremos el pasado de la moda, veremos como describir vestidos!
                </p>

            </div>

            <div className='w-5/6 md:w-80 space-y-4 ' >

                <Image
                    isZoomed='true'
                    src='https://images.squarespace-cdn.com/content/v1/655907c48f6ab06f23a23547/1700337532614-R3FXM87ZSJGW11FDK91D/image-asset.jpeg?format=2500w'
                />
                <p className='text-xl' > Conversa </p>
                <p
                    className='text-sm'
                >
                    No mas clases aburridas! Con nosotros perderas el miedo al ingles conversando con tus
                    profes y tus compañeros, sera divertido!
                </p>
            </div>

        </section>
    )
}
