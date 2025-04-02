import Link from "next/link";
import Image from "next/image";
import { logoImg } from "@/assets";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";

export default function MainHeader() {
    return (
        <>
        <MainHeaderBackground />
        <header className={classes.header}>
            <Link href="/" className={classes.logo}>
                <Image src={logoImg} alt="A plate with food on it" priority/>
                NextLevel Food
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink href={"/meals"}>Browse the meals</NavLink>
                    </li>
                    <li>
                        <NavLink href={"/community"}>Foodies community</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}