import HeroIcon from '.././assets/HeroIcon.svg'
import GithubIcon from '.././assets/GithubIcon.svg'
import TwitterIcon from '.././assets/TwitterIcon.svg'
import LinkedinIcon from '.././assets/LinkedinIcon.svg'
import DiscordIcon from '.././assets/DiscordIcon.svg'
import SocialMediaButton from './SocialMediaButton'

function HeroSection() {
    return <div className='w-full grid grid-flow-col gap-10 mt-10'>
        <div className="left-text-part col-span-5 mt-10">
            <div className='font-medium grid text-6xl leading-[56px] tracking-[-0.02em] space-y-2 '>
                <p>
                    Hello I'm <span className="font-bold">Monu Saini.</span>
                </p>
                <p>
                    <span className="font-bold">Frontend</span>{' '}
                    <span className="text-transparent outline-text not-italic font-extrabold text-shadow-gray-100">Developer</span>
                </p>
                <p>
                    Based in <span className="font-bold">India.</span>
                </p>
                <div className='font-normal text-[16px] leading-[24px] tracking-[0.02em] text-zinc-500 w-[600px] h-[96px] mt-6'>
                    <p>I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                </div>
            </div>

            <div className='social-media mt-12 gap-4 flex'>
                <SocialMediaButton iconName={LinkedinIcon} />
                <SocialMediaButton iconName={GithubIcon} />
                <SocialMediaButton iconName={DiscordIcon} />
                <SocialMediaButton iconName={TwitterIcon} />
            </div>
            
        </div>
        <div className="right-icon-part col-span-7">
            <img src={HeroIcon} className=" absolute left-2/3 transform -translate-x-1/2 flex gap-5 w-[600px]" alt="HeroIcon" />
        </div>
    </div>
}

export default HeroSection