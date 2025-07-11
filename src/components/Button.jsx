import { Reveal } from "../utils/Reveal"

function Button({ iconName, buttonText }) {
    return <Reveal><button className="flex gap-2  hover:bg-[#404040] hover:border-[#404040] cursor-pointer items-center bg-black border border-black rounded-md text-white px-5 text-xl font-semibold py-3 shadow-lg">
        {buttonText}
        <img src={iconName} className="w-5 font-extrabold" alt={iconName} />
    </button></Reveal>
}

export default Button

