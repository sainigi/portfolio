import personalLogo from '.././assets/personalportfoliologo.png'
import MIconFill from '.././assets/logo/MIconFill.png'
import MSIconFill from '.././assets/logo/MSIconFillWhite.png'
import downloadIcon from '.././assets/icons/DownloadIcon.svg'
import MenuIcon from '.././assets/icons/MenuIcon.svg'
import Button from './Button'

function Header() {
    
    const smoothScroll = (idName) => {
        const element = document.querySelector(idName)
        element.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return <div className="relative flex items-center justify-between w-full py-2 px-6 lg:py-4 lg:px-40">
            {/* Left - Logo */}
            <div className="logo flex items-center gap-2 cursor-pointer">
                <img src={MSIconFill} className="w-10 lg:w-12 h-10 lg:h-12" alt="personalportfoliologo" />
                <h1 className=" font-bold lg:text-2xl text-xl">Monu Saini</h1>
            </div>

            {/* Center - Taskbar */}
            <div className="hidden lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:flex lg:gap-5">
                <a className="font-sans font-semibold text-xl hover:text-zinc-500 cursor-pointer" onClick={() => smoothScroll("#aboutme-section")}>About Me</a>
                <a className="font-sans font-semibold text-xl hover:text-zinc-500 cursor-pointer" onClick={() => smoothScroll('#skills-section')}>Skills</a>
                <a className="font-sans font-semibold text-xl hover:text-zinc-500 cursor-pointer" onClick={() => smoothScroll('#project-section')}>Project</a>
                <a className="font-sans font-semibold text-xl hover:text-zinc-500 cursor-pointer" onClick={() => smoothScroll('#contact-section')}>Contact Me</a>
            </div>

            {/* Right - Button */}
            <div className="hidden btn lg:block">
                <Button iconName={downloadIcon} buttonText="Resume" />
            </div>

            <div className='lg:hidden'>
                <button><img src={MenuIcon} className="w-8 h-8" alt="menu-icon" /></button>
            </div>
        </div>

}

export default Header