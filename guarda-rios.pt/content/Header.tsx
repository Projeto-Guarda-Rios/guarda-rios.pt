"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="flex gap-5">
            <Link
                href="/sobre"
                className={
                    pathname === "/sobre"
                        ? "underline"
                        : ""
                }
            >
                Sobre
            </Link>
            <Link
                href="/parametros"
                className={
                    pathname === "/parametros"
                        ? "underline"
                        : ""
                }
            >
                Parâmetros
            </Link>
            <Link
                href="/prototipo"
                className={
                    pathname === "/prototipo"
                        ? "underline"
                        : ""
                }
            >
                Protótipo
            </Link>
        </header>
    );
}