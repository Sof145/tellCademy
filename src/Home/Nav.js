import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
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
                    <Link color="foreground" href="#">
                        Contact
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Nosotros
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
