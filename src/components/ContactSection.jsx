import GithubIcon from '.././assets/socialmedia/GithubIcon.png'
import TwitterIcon from '.././assets/socialmedia/TwitterIcon.svg'
import LinkedinIcon from '.././assets/socialmedia/LinkedinIcon.svg'
import DiscordIcon from '.././assets/socialmedia/DiscordIcon.svg'
import SocialMediaButton from './SocialMediaButton'
import Button from './Button'

function ContactSection() {
    return <div className=' flex px-24 py-24 justify-center'>
        <form action="" className=" flex flex-col gap-6">
            <input type="text" className="border-black border-2 rounded-md p-4 " placeholder="Your name" />
            <input type="text" className="border-black border-2 rounded-md p-4 " placeholder="Email" />
            <input type="text" className="border-black border-2 rounded-md p-4 " placeholder="Your website (If exists)" />
            <textarea name="" id="" className="border-black border-2 rounded-md p-4 " rows="5" placeholder="How can I help?*"></textarea>
            <div className='flex flex-row justify-between items-center gap-4'>
                <div className='w-40 h-16'>
                    <button className="flex items-center justify-center gap-2 w-full hover:bg-[#404040] hover:border-[#404040] cursor-pointer  bg-black border border-black rounded-md text-white px-5 text-lg font-semibold py-4 shadow-lg">
                        Get In Touch
                    </button>
                </div>

                <div className='social-media gap-4 flex'>
                    <SocialMediaButton iconName={LinkedinIcon} />
                    <SocialMediaButton iconName={GithubIcon} />
                    <SocialMediaButton iconName={DiscordIcon} />
                    <SocialMediaButton iconName={TwitterIcon} />
                </div>
            </div>
        </form>
        <div className=' ml-10 py-16'>
            <p className='font-extrabold text-6xl'>
                Let's <span className="text-transparent outline-text not-italic font-extrabold text-shadow-gray-100">talk</span> for
            </p>
            <p className='text-6xl'>
                <span className="font-extrabold">Something special</span>{' '}
            </p>
            <div className='font-normal text-[16px] leading-[24px] tracking-[0.02em] text-zinc-500 w-[600px] h-[96px] mt-6'>
                <p>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
            </div>
            <p className='text-3xl font-bold'>sainigiofficial@gmail.com</p>
            <p className='text-3xl font-bold'>8171733035</p>
        </div>
    </div>
}

export default ContactSection