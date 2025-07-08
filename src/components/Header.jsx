import personalLogo from '.././assets/personalportfoliologo.png'
import downloadIcon from '.././assets/DownloadIcon.svg'
import Button from './Button'

function Header(){
    return <>
        <div className="relative flex items-center justify-between w-full px-4 py-4">
            {/* Left - Logo */}
            <div className="logo flex items-center gap-2">
                <img src={personalLogo} className="w-12 h-12" alt="personalportfoliologo" />
                <h1 className="font-sora font-bold text-2xl">Personal</h1>
            </div>

            {/* Center - Taskbar */}
            <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-5">
                <h4 className="font-sans font-semibold text-xl">About Me</h4>
                <h4 className="font-sans font-semibold text-xl">Skills</h4>
                <h4 className="font-sans font-semibold text-xl">Project</h4>
                <h4 className="font-sans font-semibold text-xl">Contact Me</h4>
            </div>

            {/* Right - Button */}
            <div className="btn">
                <Button iconName={downloadIcon} />
            </div>
            </div>

    </>
    
    
}

export default Header