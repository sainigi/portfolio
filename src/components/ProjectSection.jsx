import TheCenter from '.././assets/projects/TheCenter.png'
import UrjobmartProject from '.././assets/projects/UrjobmartProject.png'
import KotakProject from '.././assets/projects/KotakProject.png'
import { Reveal } from '../utils/Reveal';

function ProjectSection() {

    const handleClick = (url) => {
        window.location.assign(url);
    };

    return <div className="bg-black lg:px-52 px-4 lg:py-20 py-16" id="project-section">
        <div className='flex justify-center'>
            <Reveal><h1 className="text-white lg:text-6xl text-4xl text-center pb-16">My <span className="font-extrabold">Projects</span></h1></Reveal>
        </div>
        <div className='flex flex-col gap-20'>
            <div className="Project-1 ">
                <div className='flex flex-col lg:flex-row gap-12 items-center'>
                    <div className=' border rounded-md flex-1/2'>
                        <Reveal><img src={TheCenter} alt='project1 img' className='w-[530px] h-96 border rounded-2xl' /></Reveal>
                    </div>
                    <div className='flex flex-col gap-8  justify-center flex-1/2'>
                        <Reveal><h1 className='text-white lg:text-6xl text-4xl font-extrabold'>01</h1></Reveal>
                        <Reveal><h2 className='lg:text-4xl text-3xl font-bold text-white'>The Center </h2></Reveal>
                        <Reveal><p className='text-zinc-500'>A training and certification platform for a global restaurant chain, used by franchise managers and staff. It offers video courses and step-by-step guides on recipes and operational processes.</p></Reveal>
                        <Reveal><p className='text-zinc-500'>I developed custom AEM components using Sightly, collaborated with backend teams for API integration, and implemented Java Servlets for dynamic content. I also integrated Adobe Learning Manager for course tracking and used Coveo for analytics.</p></Reveal>
                        {/* <img src={GoToIcon} alt='go to icon' className='w-6 invert cursor-pointer hover:bg-zinc-500'/> */}
                        <Reveal><div onClick={() => handleClick("https://inspirebrands.com/")}>
                            <svg className="w-6 h-6 cursor-pointer text-white hover:text-zinc-500" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8335 9.16671L17.6668 2.33337" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.3335 5.66663V1.66663H14.3335" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.1665 1.66663H7.49984C3.33317 1.66663 1.6665 3.33329 1.6665 7.49996V12.5C1.6665 16.6666 3.33317 18.3333 7.49984 18.3333H12.4998C16.6665 18.3333 18.3332 16.6666 18.3332 12.5V10.8333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div></Reveal>
                    </div>
                </div>
            </div>

            <div className="Project-2 ">
                <div className='flex flex-col-reverse lg:flex-row gap-12 items-center'>
                    <div className='flex flex-col gap-8  justify-center flex-1/2'>
                        <Reveal><h1 className='text-white lg:text-6xl text-4xl font-extrabold'>02</h1></Reveal>
                        <Reveal><h2 className='lg:text-4xl text-3xl font-bold text-white'>UrJobMart</h2></Reveal>
                        <Reveal><p className='text-zinc-500'>A recruitment platform connecting companies and students. Companies post job openings, and students apply directly through the portal.</p></Reveal>
                        <Reveal><p className='text-zinc-500'>I developed responsive user interfaces using Angular, integrated RESTful APIs, and implemented AWS S3 for secure file uploads. I also added Elasticsearch for fast search and improved the UI framework for scalable form and table generation.</p></Reveal>

                        {/* <img src={GoToIcon} alt='go to icon' className='w-6 invert cursor-pointer hover:bg-zinc-500'/> */}
                        <Reveal><div onClick={() => handleClick("https://www.urjobmart.com/")}>
                            <svg className="w-6 h-6 cursor-pointer text-white hover:text-zinc-500" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8335 9.16671L17.6668 2.33337" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.3335 5.66663V1.66663H14.3335" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.1665 1.66663H7.49984C3.33317 1.66663 1.6665 3.33329 1.6665 7.49996V12.5C1.6665 16.6666 3.33317 18.3333 7.49984 18.3333H12.4998C16.6665 18.3333 18.3332 16.6666 18.3332 12.5V10.8333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div></Reveal>
                    </div>
                    <div className='flex-1/2 order-1 lg:order-none'>
                        <Reveal><img src={UrjobmartProject} alt='project1 img' className='w-[530px] h-96 border rounded-2xl' /></Reveal>
                    </div>
                </div>
            </div>

            <div className="Project-3 ">
                <div className='flex flex-col lg:flex-row gap-12 items-center'>
                    <div className='flex-1/2'>
                        <Reveal><img src={KotakProject} alt='KotakProject' className='w-[530px] h-96 border rounded-2xl' /></Reveal>
                    </div>
                    <div className='flex flex-col gap-8  justify-center flex-1/2'>
                        <Reveal><h1 className='text-white lg:text-6xl text-4xl font-extrabold'>03</h1></Reveal>
                        <Reveal><h2 className='lg:text-4xl text-3xl font-bold text-white'>Current Account DIY – Kotak Bank</h2></Reveal>
                        <Reveal><p className='text-zinc-500'>A self-serve current account onboarding platform for Private Ltd. and LLP customers</p></Reveal>
                        <Reveal><p className='text-zinc-500'>Designed a secure and user-friendly application to support current account openings for companies via website or personalized link. Integrated PAN, Aadhaar, and other KYC verifications, and developed APIs using VAHANA for real-time validation and smooth onboarding.</p></Reveal>
                        {/* <img src={GoToIcon} alt='go to icon' className='w-6 invert cursor-pointer hover:bg-zinc-500'/> */}
                        <Reveal><div onClick={() => handleClick("https://www.kotak.com/en/business/accounts/current-accounts.html")}>
                            <svg className="w-6 h-6 cursor-pointer text-white hover:text-zinc-500" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8335 9.16671L17.6668 2.33337" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M18.3335 5.66663V1.66663H14.3335" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.1665 1.66663H7.49984C3.33317 1.66663 1.6665 3.33329 1.6665 7.49996V12.5C1.6665 16.6666 3.33317 18.3333 7.49984 18.3333H12.4998C16.6665 18.3333 18.3332 16.6666 18.3332 12.5V10.8333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div></Reveal>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ProjectSection