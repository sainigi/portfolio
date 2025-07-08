

function SocialMediaButton({iconName}) {
    return <button className='border-black border-2 rounded-lg p-5 hover:bg-black'>
        <img src={iconName} alt={iconName} className='w-6 hover:invert '/>
    </button>
}

export default SocialMediaButton