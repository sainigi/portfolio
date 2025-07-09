import AboutMeIcon from '.././assets/AboutMeIcon.svg'

function AboutMeSection() {
    return <div className='my-10 flex p-16 gap-8 items-center justify-center'>
        <div className='flex-1/2'>
            <img src={AboutMeIcon} alt='About Me Icon' className='' />
        </div>
        <div className='flex flex-col gap-10 flex-1/2'>
            <h1 className='font-bold text-5xl'>About Me</h1>
            <p>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>

            <p>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>

            <p>When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
        </div>
    </div>
}

export default AboutMeSection