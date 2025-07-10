import AboutMeIcon from '.././assets/AboutMeIcon.svg'

function AboutMeSection() {
    return <div className='my-10 flex p-16 gap-8 items-center justify-center px-52'>
        <div className='flex-1/2'>
            <img src={AboutMeIcon} alt='About Me Icon' className='' />
        </div>
        <div className='flex flex-col gap-4 flex-1/2'>
            <h1 className='text-6xl'>About <span className='font-extrabold '>Me</span></h1>
            <p className='text-zinc-600'>I'm a passionate frontend developer who enjoys turning clean designs into responsive, user-friendly web applications. I specialize in technologies like React, Angular, Typescript and JavaScript, and I care deeply about building interfaces that are both functional and beautiful. For me, user experience, clean code, and performance are always top priorities.</p>

            <p className='text-zinc-600'>I started my journey in web development with a strong focus on frontend technologies and gradually expanded my skill set by working with tools like AEM (Adobe Experience Manager), React, Angular, jQuery, Python and Java servlets. Over the years, I’ve collaborated with designers, backend teams, and even directly with clients to bring ideas to life — from creating custom UI components to integrating APIs and maintaining smooth data flow across applications.</p>

            <p className='text-zinc-600'>Outside of coding, I enjoy learning about new tech trends, improving my development skills, and occasionally working on personal projects. I also like staying connected with the developer community, exploring case studies, and finding inspiration in how other developers build and solve real-world problems. When I’m not at the desk, you might find me at the gym or spending time offline to recharge.</p>
        </div>
    </div>
}

export default AboutMeSection