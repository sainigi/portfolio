import { Reveal } from "../utils/Reveal";


function SocialMediaButton({ iconName, profileURL }) {

    const goToSocialProfile = (url) => {
        window.location.assign(url);
    }

    return <Reveal><button onClick={() => goToSocialProfile(profileURL)} className='group  transition duration-300 border-black border-2 cursor-pointer rounded-lg p-5 hover:bg-black'>
        <img src={iconName} alt={iconName} className='w-6 group-hover:invert ' />
    </button></Reveal>
}

export default SocialMediaButton