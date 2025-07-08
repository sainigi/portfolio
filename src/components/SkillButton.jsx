function SkillButton({ skillIconName, skillText }) {
    return <button className='group cursor-pointer border-black w-[186px] h-[186px] border-2 rounded-lg p-14 transition duration-300 hover:bg-black flex justify-center items-center flex-col'>
        <img src={skillIconName} alt={skillIconName} className='w-16 group-hover:invert transition duration-300' />
        <p className="mt-4 text-2xl font-semibold group-hover:invert transition duration-300">{skillText}</p>
    </button>
}

export default SkillButton