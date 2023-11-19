import { Button, Image, Link } from '@nextui-org/react'
import React from 'react'

export default function index() {
  return (
    <section className='mt-36 px-10' >

      <p className='text-4xl md:ml-24 mb-20' >Reserva tu clase!</p>

      <div className='flex flex-col-reverse sm:flex-row justify-center items-center gap-28' >

        <Image
          className='w-96 h-56 sm:w-80 sm:h-96 object-cover'
          src='https://images.squarespace-cdn.com/content/v1/655907c48f6ab06f23a23547/1700338444634-X8HIR6R2B0KCOT3467GW/image-asset.jpeg?format=2500w'
        />

        <div className='w-96 sm:w-80 space-y-10 px-10' >

          <p className='text-xl' >Vamos Paso a Paso</p>
          <p>Puedes reservar desde una clase, hasta varios meses de formación, la desición es tuya.</p>

          <Link
            target='_blank'
            rel='noreferrer noopener'
            href='https://api.whatsapp.com/send/?phone=%2B573209462296&text=Hola,+estoy+interesado+en+reservar+una+clase'
          >

            <Button
              size='lg'
              color='danger'
            >
              Agendar Clase
            </Button>

          </Link>

        </div>
      </div>

    </section>
  )
}
