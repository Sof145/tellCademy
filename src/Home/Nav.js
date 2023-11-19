import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@nextui-org/react";
import Logo from "../Assets/Logo.png";

export default function Nav() {
    return (
        <Navbar height="8rem">

            <NavbarBrand>
                <img src={Logo} alt='tellcademy' style={{ height: "10vh" }} />
                <p className="font-bold text-inherit">TELLCADEMY</p>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">

                <NavbarItem>
                    <Link
                        target='_blank'
                        rel='noreferrer noopener'
                        href='https://api.whatsapp.com/send/?phone=%2B573209462296&text=Hola,+estoy+interesado+en+reservar+una+clase'
                    >
                        Contacto
                    </Link>
                </NavbarItem>

                <NavbarItem isActive>
                    <Link href="#about-us" aria-current="page">
                        Nosotros
                    </Link>
                </NavbarItem>

            </NavbarContent>
        </Navbar>
    );
}
