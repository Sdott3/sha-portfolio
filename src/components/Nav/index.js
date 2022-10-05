import React from "react";

export default function Nav() {
    return (
        <header className="bg-blue-300 md:sticky ">
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                <a href="#projects" className="mr-5 hover:text-white">
                    Projects
                </a>
                <a href="#skills" className="mr-5 hover:text-white">
                    Skills
                </a>
                <a href="#contact" className="mr-5 hover:text-white">
                    Contact Me
                </a>
                <a href="#resume" className="mr-5 hover:text-white">
                    Resume
                </a>
            </nav>
        </header>
    );
}