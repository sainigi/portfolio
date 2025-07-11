import GithubIcon from '.././assets/socialmedia/GithubIcon.png'
import TwitterIcon from '.././assets/socialmedia/TwitterIcon.svg'
import LinkedinIcon from '.././assets/socialmedia/LinkedinIcon.svg'
import EmailIcon from '.././assets/icons/EmailIcon.png'
import PhoneIcon from '.././assets/icons/PhoneIcon.png'
import DiscordIcon from '.././assets/socialmedia/DiscordIcon.svg'
import SocialMediaButton from './SocialMediaButton'
import { LINKEDIN_PROFILE_URL, GITHUB_PROFILE_URL, DISCORD_PROFILE_URL, EMAILJS_PUBLIC_KEY, EMAILJS_TEMPLATE_ID, EMAILJS_SERVICE_ID } from '../utils/info'
import toast from 'react-hot-toast'
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'
import { Reveal } from '../utils/Reveal'

function ContactSection() {

    const form = useRef();
    const [status, setStatus] = useState("");


    const sendMail = (e) => {
        e.preventDefault();
        console.log('form data', form.current)

        emailjs
            .sendForm(
                EMAILJS_SERVICE_ID,    // from EmailJS
                EMAILJS_TEMPLATE_ID,   // from EmailJS
                form.current,
                EMAILJS_PUBLIC_KEY     // EmailJS Public Key (not secret)
            )
            .then(
                (result) => {
                    console.log(result.text);
                    toast('🎉 Message sent! Thank you for reaching out. I"ll be in touch soon. ', {
                        style: {
                            border: '1px solid #000000',
                            padding: '16px',
                            color: '#000000',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '600'
                        },
                    });
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    toast('🙁 Something went wrong. You can email or WhatsApp me directly using the details on screen. Thanks! ', {
                        style: {
                            border: '1px solid #FF0000	',
                            padding: '16px',
                            color: '#FF0000	',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '600'
                        },
                    });
                }
            );

    }

    return <div className=' flex flex-col lg:flex-row lg:px-24 px-4 lg:py-24 py-12 justify-center' id='contact-section'>
        <form ref={form} onSubmit={(e) => { sendMail(e) }} className=" flex flex-col gap-6  ">
            <Reveal><input type="text" name='name' required className="border-black border-2 rounded-md p-4 w-full " placeholder="Your name" /></Reveal>
            <Reveal><input type="email" name='email' required className="border-black border-2 rounded-md p-4  w-full" placeholder="Email" /></Reveal>
            <Reveal><input type="text" name='website' className="border-black border-2 rounded-md p-4  w-full" placeholder="Your website (If exists)" /></Reveal>
            <Reveal><textarea name="message" required className="border-black border-2 rounded-md p-4  w-full" rows="5" placeholder="How can I help?*"></textarea></Reveal>
            <div className='flex lg:flex-row flex-col lg:justify-between lg:items-center gap-4'>
                <div className='w-40 h-16'>
                    <Reveal><button type="submit" className="flex items-center justify-center gap-2 w-full hover:bg-[#404040] hover:border-[#404040] cursor-pointer  bg-black border border-black rounded-md text-white px-5 text-lg font-semibold py-4 shadow-lg">
                        Get In Touch
                    </button></Reveal>
                </div>

                <div className='social-media gap-4 flex'>
                    <SocialMediaButton iconName={LinkedinIcon} profileURL={LINKEDIN_PROFILE_URL} />
                    <SocialMediaButton iconName={GithubIcon} profileURL={GITHUB_PROFILE_URL} />
                    <SocialMediaButton iconName={DiscordIcon} profileURL={DISCORD_PROFILE_URL} />
                    {/* <SocialMediaButton iconName={TwitterIcon} /> */}
                </div>
            </div>
        </form>
        <div className=' lg:ml-10 pt-16 lg:py:16 '>
            <Reveal><p className='font-extrabold lg:text-6xl text-4xl'>
                Let's <span className="text-transparent outline-text not-italic font-extrabold text-shadow-gray-100">talk</span> for
            </p></Reveal>
            <Reveal><p className='lg:text-6xl text-4xl'>
                <span className="font-extrabold">Something special</span>{' '}
            </p></Reveal>
            <div className='font-normal text-[16px] lg:text-xl leading-[20px] lg:leading-7 tracking-[0.03em] lg:tracking-[0.02em] text-zinc-500 lg:w-[600px] lg:h-[96px] lg:mt-6 mt-5'>
                <Reveal><p>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p></Reveal>
            </div>
            <Reveal><p className='lg:text-3xl text-xl font-bold mt-4 flex gap-4'><img src={EmailIcon} alt={'email-icon'} className='w-8 ' /> sainigiofficial@gmail.com</p></Reveal>
            <Reveal><p className='lg:text-3xl text-xl font-bold mt-4 flex gap-4'><img src={PhoneIcon} alt={'phone-icon'} className='w-8' /> 8171733035</p></Reveal>
        </div>
    </div>
}

export default ContactSection