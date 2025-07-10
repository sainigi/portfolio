import MSIconFill from '.././assets/logo/MSIconFillWhite.png'
import downloadIcon from '.././assets/icons/DownloadIcon.svg'
import MenuSquareIcon from '.././assets/icons/MenuSquareIcon.png'
import CancelSquareIcon from '.././assets/icons/CancelSquareIcon.png'
import CancelSquareIcon2 from '.././assets/icons/CancelSquareIcon2.png'
import Button from './Button'
import { useState } from 'react'

function Header() {

    const [menuIconState, setMenuIconState] = useState(false);

    const handleMenu = () => {
        setMenuIconState(!menuIconState)
    }

    const smoothScroll = (idName) => {
        const element = document.querySelector(idName)
        element.scrollIntoView({
            behavior: 'smooth'
        })

        setMenuIconState(!menuIconState)
    }

    return <div className="w-full py-2 px-6 lg:py-4 lg:px-40  flex items-center justify-between relative">

        {/* Left - Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
            <img src={MSIconFill} className="w-10 lg:w-12 h-10 lg:h-12" alt="personalportfoliologo" />
            <h1 className="font-bold lg:text-2xl text-xl">Monu Saini</h1>
        </div>

        {/* Center - Taskbar */}
        <div className="hidden lg:flex gap-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <a className="font-semibold text-xl hover:text-zinc-500 cursor-pointer" onClick={() => smoothScroll("#aboutme-section")}>About Me</a>
            <a className="font-semibold text-xl hover:text-zinc-500 cursor-pointer" onClick={() => smoothScroll('#skills-section')}>Skills</a>
            <a className="font-semibold text-xl hover:text-zinc-500 cursor-pointer" onClick={() => smoothScroll('#project-section')}>Project</a>
            <a className="font-semibold text-xl hover:text-zinc-500 cursor-pointer" onClick={() => smoothScroll('#contact-section')}>Contact Me</a>
        </div>

        {/* Right - Resume Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">

            {/* Resume Button - Desktop only */}
            <div className="hidden lg:inline-block">
                <Button iconName={downloadIcon} buttonText="Resume" />
            </div>

            {/* Hamburger Menu - Mobile */}
            <div className="lg:hidden">
                <button onClick={handleMenu}>
                    {menuIconState ? (
                        <img src={CancelSquareIcon2} className="w-8 transition duration-300" alt="menu-icon" />
                    ) : (
                        <img src={MenuSquareIcon} className="w-8 transition duration-300" alt="menu-icon" />
                    )}
                </button>
            </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`${menuIconState ? 'flex' : 'hidden'} flex-col gap-4 bg-black text-white absolute right-2 top-16 w-60 py-4 px-6 rounded shadow-lg z-50`}>
            <a className="font-semibold text-lg hover:text-zinc-500 cursor-pointer" onClick={() => smoothScroll("#aboutme-section")}>About Me</a>
            <a className="font-semibold text-lg hover:text-zinc-500 cursor-pointer" onClick={() => smoothScroll('#skills-section')}>Skills</a>
            <a className="font-semibold text-lg hover:text-zinc-500 cursor-pointer" onClick={() => smoothScroll('#project-section')}>Project</a>
            <a className="font-semibold text-lg hover:text-zinc-500 cursor-pointer" onClick={() => smoothScroll('#contact-section')}>Contact Me</a>
        </div>

    </div>


}

export default Header