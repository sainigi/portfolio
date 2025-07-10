import personalLogo from '.././assets/personalportfoliologo.png'
import MSIconOutline from '.././assets/logo/MSIconOutline.png'
import MSIconFillWhite from '.././assets/logo/MSIconFillWhite.png'

function Footer() {
    return <div className='bg-black flex items-center justify-between w-full  py-4 px-40'>
        <div className="logo flex items-center gap-2">
            <img src={MSIconFillWhite} className="w-12 h-12 invert" alt="personalportfoliologo" />
            <h1 className=" font-bold text-2xl text-white">Monu Saini</h1>
        </div>
        <div>
            <p className='text-white text-xl text-end'>@since 2022</p>
            <p className='text-white text-xl text-end'>Made By Saini</p>
        </div>
    </div>
}

export default Footer