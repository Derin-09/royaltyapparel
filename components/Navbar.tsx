"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-ebony/80 text-ivory py-4 sticky top-0 z-50 select-none h-[64px]">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-display text-clay font-semibold">
          Royalty Apparel
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 font-body">
          <li><a href="#home" className="hover:text-ocha transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-ocha transition-colors">About</a></li>
          <li><a href="#services" className="hover:text-ocha transition-colors">Services</a></li>
          <li><a href="#portfolio" className="hover:text-ocha transition-colors">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-ocha transition-colors">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-ivory"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-ebony/95 border-t border-ivory/10"
          >
            <ul className="flex flex-col space-y-6 px-6 py-6 text-lg font-body">
              <li><a href="#home" onClick={() => setOpen(false)} className="hover:text-ocha transition-colors">Home</a></li>
              <li><a href="#about" onClick={() => setOpen(false)} className="hover:text-ocha transition-colors">About</a></li>
              <li><a href="#services" onClick={() => setOpen(false)} className="hover:text-ocha transition-colors">Services</a></li>
              <li><a href="#portfolio" onClick={() => setOpen(false)} className="hover:text-ocha transition-colors">Portfolio</a></li>
              <li><a href="#contact" onClick={() => setOpen(false)} className="hover:text-ocha transition-colors">Contact</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}













// export default function Navbar() {
//     return (
//         <nav className="bg-ebony/90 text-ivory py-4 sticky top-0 z-50 select-none">
//             <div className="container mx-auto px-6 flex justify-between items-center">
//                 <h1 className="text-2xl font-display text-clay font-semibold">Royalty Apparel</h1>
//                 <ul className="flex space-x-8 font-body">
//                     <li><a href="#home" className="hover:text-ocha transition-colors">Home</a></li>
//                     <li><a href="#about" className="hover:text-ocha transition-colors">About</a></li>
//                     <li><a href="#services" className="hover:text-ocha transition-colors">Services</a></li>
//                     <li><a href="#portfolio" className="hover:text-ocha transition-colors">Portfolio</a></li>
//                     <li><a href="#contact" className="hover:text-ocha transition-colors">Contact</a></li>

//                 </ul>
//             </div>
//         </nav>
//     );
// }
