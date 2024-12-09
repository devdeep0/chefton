"use client"
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import Image from "next/image"
import Link from "next/link"
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
       <div className="fixed top-0 flex justify-between p-4 w-full bg-[#e7a1a2] z-[60]">
       <div className="relative w-12 h-12">
         <Image
           src="/images/tv.svg"
           alt="TV Logo"
           width={48}
           height={48}
           className="object-cover w-14 h-14"
         />
       </div>
       <button 
         className="text-black z-[70]" 
         aria-label="Menu"
         onClick={() => setIsMenuOpen(!isMenuOpen)}
       >
         {isMenuOpen ? <X size={32} className="text-white" /> : <Menu size={32} />}
       </button>
     </div>

     {/* Full-screen Navigation Overlay */}
     {isMenuOpen && (
       <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex  items-center justify-center">
         <nav className="text-center">
           <Link href="/" className="block text-white text-4xl mb-4 hover:text-[#FFD700] transition-colors">
             Home
           </Link>
           <Link href="/profile" className="block text-white text-4xl mb-4 hover:text-[#FFD700] transition-colors">
             Profile
           </Link>
           <Link href="/about" className="block text-white text-4xl mb-4 hover:text-[#FFD700] transition-colors">
             Activation
           </Link>
           <Link href="/leaderboard" className="block text-white text-4xl mb-4 hover:text-[#FFD700] transition-colors">
             Leaderboard
           </Link>
         </nav>
       </div>
     )}
     </>
  )
}

export default Header