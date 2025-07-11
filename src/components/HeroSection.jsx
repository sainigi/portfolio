import HeroIcon from '.././assets/HeroIcon.svg'
import TwitterIcon from '.././assets/socialmedia/TwitterIcon.svg'
import LinkedinIcon from '.././assets/socialmedia/LinkedinIcon.svg'
import DiscordIcon from '.././assets/socialmedia/DiscordIcon.svg'
import GithubIcon from '.././assets/socialmedia/GithubIcon.png'
import SocialMediaButton from './SocialMediaButton'
import { LINKEDIN_PROFILE_URL, GITHUB_PROFILE_URL, DISCORD_PROFILE_URL } from '../utils/info'
import { Reveal } from '../utils/Reveal'
import { motion } from "framer-motion"

function HeroSection() {
    return <div className='w-full lg:grid lg:grid-flow-col lg:gap-10 lg:mt-24 lg:px-40 px-4'>

        <Reveal>
            <div className="lg:hidden mobile-icon">
                <img src={HeroIcon} className=" px-4 mt-10" alt="HeroIcon" />
            </div>
        </Reveal>


        <div className="left-text-part lg:col-span-5 mt-10">
            <div className='lg:font-medium lg:grid lg:text-6xl text-4xl lg:leading-20 leading-[44px] lg:tracking-[-0.02em] tracking-[-0.04em] lg:space-y-2 '>
                <Reveal><p>
                    Hello I'm <span className="font-bold">Monu Saini</span>
                </p></Reveal>
                <Reveal><p>
                    <span className="font-bold">Frontend</span>{' '}
                    <span className="text-transparent outline-text not-italic font-extrabold text-shadow-gray-100 tracking-[0.01em]">Developer</span>
                </p></Reveal>
                <Reveal><p>
                    Crafting Clean <span className="font-bold">Interfaces</span>
                </p></Reveal>
                <Reveal><div className='font-normal text-[16px] lg:text-xl leading-[20px] lg:leading-6 tracking-[0.02em] lg:tracking-[0.02em] text-zinc-500 lg:w-[600px]  lg:mt-6 mt-5'>
                    <p className='mb-2'>I specialize in building modern, responsive web applications using technologies like React and Angular. I’m passionate about clean design and smooth interactions.  Clean code and thoughtful design are my priorities.
                    </p>
                    <span className='font-bold text-zinc-700'>Driven by detail, powered by code.</span>
                </div></Reveal>
            </div>

            <Reveal><div className='social-media lg:mt-10 mt-8 gap-4 flex'>
                <SocialMediaButton iconName={LinkedinIcon} profileURL={LINKEDIN_PROFILE_URL} />
                <SocialMediaButton iconName={GithubIcon} profileURL={GITHUB_PROFILE_URL} />
                <SocialMediaButton iconName={DiscordIcon} profileURL={DISCORD_PROFILE_URL} />
                {/* <SocialMediaButton iconName={TwitterIcon} /> */}
            </div></Reveal>

        </div>

        <div className="hidden lg:block right-icon-part col-span-7">
            <motion.img variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: 75 }
            }}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.6 }}
                src={HeroIcon} className="  lg:absolute lg:left-2/3  lg:transform lg:-translate-x-1/2 lg:flex  lg:w-[800px] ml:14 mt-1" alt="HeroIcon" />
        </div>
    </div>
}

export default HeroSection