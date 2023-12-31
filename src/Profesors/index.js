import { Button, Image, Link } from '@nextui-org/react'
import React from 'react'

export default function index() {
    return (
        <section
            className='flex flex-col items-center justify-center px-14 gap-14
             mt-32 md:flex-row md:items-start'
        >

            <div className='w-80 space-y-8' >

                <p
                    className='text-xl sm:text-sm'
                >
                    Nuestros Profesores
                </p>

                <p>Contamos con profesores apasionados, divertidos y profesionales.</p>

                <Link
                    target='_blank'
                    rel='noreferrer noopener'
                    href='https://api.whatsapp.com/send/?phone=%2B573209462296&text=Hola,+estoy+interesado+en+reservar+una+clase'
                >

                    <Button
                        color='danger'
                        size='lg'
                    >
                        Agendar Clase
                    </Button>

                </Link>

            </div>

            <div className='w-80 space-y-4' >

                <Image
                    isZoomed='true'
                    src='https://images.squarespace-cdn.com/content/v1/655907c48f6ab06f23a23547/1700337619651-1IQ1WAKQA1OM6O1MDMO0/image-asset.jpeg?format=2500w'
                />

                <p className='text-xl' >Hablemos de lo que te gusta</p>

                <p
                    className='text-sm'
                >
                    Tu pones el tema de la clase, nosotros te ayudamos con la gramática, te gusta la moda?
                    Descubriremos el pasado de la moda, veremos como describir atuendos!
                </p>

            </div>

            <div className='w-80 space-y-4 ' >

                <Image
                    isZoomed='true'
                    src='https://images.squarespace-cdn.com/content/v1/655907c48f6ab06f23a23547/1700337532614-R3FXM87ZSJGW11FDK91D/image-asset.jpeg?format=2500w'
                />
                <p className='text-xl' > Conversa </p>
                <p
                    className='text-sm'
                >
                    No mas clases aburridas! Con nosotros perderas el miedo al inglés conversando con tus
                    profes y tus compañeros, será divertido!
                </p>
            </div>

        </section>
    )
}
