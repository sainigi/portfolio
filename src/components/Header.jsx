import personalLogo from '.././assets/personalportfoliologo.png'
import MIconFill from '.././assets/logo/MIconFill.png'
import MSIconFill from '.././assets/logo/MSIconFillWhite.png'
import downloadIcon from '.././assets/icons/DownloadIcon.svg'
import Button from './Button'

function Header(){
    return <>
        <div className="relative flex items-center justify-between w-full  py-4 px-40">
            {/* Left - Logo */}
            <div className="logo flex items-center gap-2">
                <img src={MSIconFill} className="w-12 h-12" alt="personalportfoliologo" />
                <h1 className=" font-bold text-2xl">Monu Saini</h1>
            </div>

            {/* Center - Taskbar */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-5">
                <h4 className="font-sans font-semibold text-xl hover:text-zinc-500">About Me</h4>
                <h4 className="font-sans font-semibold text-xl hover:text-zinc-500">Skills</h4>
                <h4 className="font-sans font-semibold text-xl hover:text-zinc-500">Project</h4>
                <h4 className="font-sans font-semibold text-xl hover:text-zinc-500">Contact Me</h4>
            </div>

            {/* Right - Button */}
            <div className="btn">
                <Button iconName={downloadIcon} buttonText="Resume" />
            </div>
        </div>

    </>
    
    
}

export default Header