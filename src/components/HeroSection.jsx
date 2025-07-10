import HeroIcon from '.././assets/HeroIcon.svg'
import TwitterIcon from '.././assets/socialmedia/TwitterIcon.svg'
import LinkedinIcon from '.././assets/socialmedia/LinkedinIcon.svg'
import DiscordIcon from '.././assets/socialmedia/DiscordIcon.svg'
import GithubIcon from '.././assets/socialmedia/GithubIcon.png'
import SocialMediaButton from './SocialMediaButton'

function HeroSection() {
    return <div className='w-full grid grid-flow-col gap-10 mt-10 px-40'>
        <div className="left-text-part col-span-5 mt-10">
            <div className='font-medium grid text-6xl leading-[56px] tracking-[-0.02em] space-y-2 '>
                <p>
                    Hello I'm <span className="font-bold">Monu Saini</span>
                </p>
                <p>
                    <span className="font-bold">Frontend</span>{' '}
                    <span className="text-transparent outline-text not-italic font-extrabold text-shadow-gray-100">Developer</span>
                </p>
                <p>
                    Crafting Clean <span className="font-bold">Interfaces</span>
                </p>
                <div className='font-normal text-[16px] leading-[24px] tracking-[0.02em] text-zinc-500 w-[600px] h-[96px] mt-6'>
                    <p>I specialize in building modern, responsive web applications using technologies like React and Angular. I’m passionate about clean design and smooth interactions.  Clean code and thoughtful design are my priorities.
                    </p>
                    <span className='font-bold text-zinc-700'>Driven by detail, powered by code.</span>
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
            <img src={HeroIcon} className=" absolute left-2/3 transform -translate-x-1/2 flex  w-[600px] ml-20" alt="HeroIcon" />
        </div>
    </div>
}

export default HeroSection