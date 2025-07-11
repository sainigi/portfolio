import MSIconFillWhite from '.././assets/logo/MSIconFillWhite.png'
import { Reveal } from '../utils/Reveal'

function Footer() {
    return <div className='bg-black flex items-center justify-between w-full py-2 px-6  lg:py-4 lg:px-40'>
        <div className="logo flex items-center gap-2 cursor-pointer">
            <Reveal><img src={MSIconFillWhite} className="w-8 h-8 lg:w-12 lg:h-12 invert" alt="personalportfoliologo" /></Reveal>
            <Reveal><h1 className=" font-bold lg:text-2xl text-white">Monu Saini</h1></Reveal>
        </div>
        <div >
            <Reveal><p className='text-white lg:text-xl text-xs text-end'>@since 2022</p></Reveal>
            <Reveal><p className='text-white lg:text-xl text-xs text-end'>Made By Saini</p></Reveal>
        </div>
    </div>
}

export default Footer