import GithubIcon from '.././assets/socialmedia/GithubIcon.png'
import TwitterIcon from '.././assets/socialmedia/TwitterIcon.svg'
import LinkedinIcon from '.././assets/socialmedia/LinkedinIcon.svg'
import DiscordIcon from '.././assets/socialmedia/DiscordIcon.svg'
import SocialMediaButton from './SocialMediaButton'
import Button from './Button'

function ContactSection() {
    return <div className=' flex flex-col lg:flex-row lg:px-24 px-4 lg:py-24 py-12 justify-center' id='contact-section'>
        <form action="" className=" flex flex-col gap-6">
            <input type="text" className="border-black border-2 rounded-md p-4 " placeholder="Your name" />
            <input type="text" className="border-black border-2 rounded-md p-4 " placeholder="Email" />
            <input type="text" className="border-black border-2 rounded-md p-4 " placeholder="Your website (If exists)" />
            <textarea name="" id="" className="border-black border-2 rounded-md p-4 " rows="5" placeholder="How can I help?*"></textarea>
            <div className='flex lg:flex-row flex-col lg:justify-between lg:items-center gap-4'>
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
        <div className=' lg:ml-10 pt-16 lg:py:16 '>
            <p className='font-extrabold lg:text-6xl text-4xl'>
                Let's <span className="text-transparent outline-text not-italic font-extrabold text-shadow-gray-100">talk</span> for
            </p>
            <p className='lg:text-6xl text-4xl'>
                <span className="font-extrabold">Something special</span>{' '}
            </p>
            <div className='font-normal text-[16px] lg:text-xl leading-[20px] lg:leading-7 tracking-[0.03em] lg:tracking-[0.02em] text-zinc-500 lg:w-[600px] lg:h-[96px] lg:mt-6 mt-5'>
                <p>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
            </div>
            <p className='lg:text-3xl text-2xl font-bold mt-4'>sainigiofficial@gmail.com</p>
            <p className='lg:text-3xl text-2xl font-bold'>8171733035</p>
        </div>
    </div>
}

export default ContactSection