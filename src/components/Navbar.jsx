import { useEffect, useState } from "react";

function Navbar({ menuOpen, setMenuOpen }) {
    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Actualizar el estado solo cuando el usuario haga clic
      };
    
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen]); //se ejecuta cuando cambia el valor de menuOpen


    return <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home font-mono text-xl font-bold text-white">
                    mauricio<span className="text-blue-500">.tech</span>
                </a>

                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={toggleMenu}>
                    &#9776;
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a className="text-gray-300 hover:text-white transition-colors" href="#home"> Home </a>
                    <a className="text-gray-300 hover:text-white transition-colors" href="#about"> About </a>
                    <a className="text-gray-300 hover:text-white transition-colors" href="#projects"> Projects </a>
                    <a className="text-gray-300 hover:text-white transition-colors" href="#contact"> Contact </a>
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar