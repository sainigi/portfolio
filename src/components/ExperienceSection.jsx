import sourceEaseDarkMode from '.././assets/companies/SourceEaseDarkMode.png'
import decimalLogo from '.././assets/companies/DecimalLogo.svg'
import astrapiaLogo from '.././assets/companies/AstrapiaLogo.png'
import { Reveal } from '../utils/Reveal'

function ExperienceSection() {
    return <div className="bg-black pb-16 my-2 lg:px-40 px-4">
        <div className="flex justify-center">
            <Reveal><h1 className="text-white lg:text-6xl text-4xl text-center py-16">My <span className="font-extrabold">Experience</span></h1></Reveal>
        </div>
        <div className="lg:px-20 px-4 py-8 flex flex-col gap-16">
            <Reveal><div className="border-white border rounded-md text-white p-4 py-6">
                <div className="flex lg:justify-between lg:items-center gap-4 flex-col lg:flex-row">
                    <div className="flex gap-4 items-center justify-center">
                        <Reveal><img src={astrapiaLogo} className="p-0 w-24 h-10 invert" alt="personalportfoliologo" /></Reveal>
                        <Reveal><h1 className="font-bold lg:text-2xl text-xl mt-4">Software Engineer at Astrapia</h1></Reveal>
                    </div>
                    <div>
                        <Reveal><h4>Feb 2025 - Present</h4></Reveal>
                    </div>
                </div>
                <div className="pt-6 text-zinc-300">
                    <Reveal><p>As a Software Engineer, I gained hands-on experience with Adobe Experience Manager (AEM), where I created form templates and policies in collaboration with the Senior AEM Architect. I worked with jQuery to design and enhance user interfaces, delivering visually engaging and user-friendly components. I collaborated directly with clients to translate UI designs from Figma into AEM components, ensuring design accuracy and responsiveness. Additionally, I integrated Java Servlets into components to support dynamic functionalities. I also utilized Coveo for implementing page tracking within the AEM environment and worked with CRX/DE for development and content management. Furthermore, I leveraged Adobe Learning Manager (ALM) for managing learning courses and enhancing content delivery workflows.</p></Reveal>
                </div>
            </div></Reveal>

            <Reveal><div className="border-white border rounded-md text-white p-4 py-6 bg-zinc-800">
                <div className="flex lg:justify-between lg:items-center gap-4 flex-col lg:flex-row">
                    <div className="flex gap-4 items-center justify-center">
                        <Reveal><img src={sourceEaseDarkMode} className="w-24 h-12" alt="personalportfoliologo" /></Reveal>
                        <Reveal><h1 className="font-bold lg:text-2xl text-xl">Software Engineer at SourceEase</h1></Reveal>
                    </div>
                    <div>
                        <Reveal><h4>Mar 2023 - Jan 2025</h4></Reveal>
                    </div>
                </div>
                <div className="pt-6 text-zinc-300">
                    <Reveal><p>As the Lead Frontend Developer, I spearheaded the development of dynamic and responsive web applications using Angular, ensuring a seamless user experience across all devices. I provided technical leadership and mentorship to both frontend and backend team members, promoting clean, maintainable code and adherence to best practices. My role involved integrating RESTful APIs and third-party services to enhance performance and ensure smooth data flow within the application. I collaborated closely with Java developers, product managers, and the CEO to define API contracts, design code architecture, and align backend services with product goals. Additionally, I supported mobile development by ensuring feature parity and design consistency across platforms, while offering expertise on web technologies. Version control was managed through Git, where I oversaw branching strategies, pull requests, and collaborative development workflows.</p></Reveal>
                </div>
            </div></Reveal>

            <Reveal><div className="border-white border rounded-md text-white p-4 py-6">
                <div className="flex lg:justify-between lg:items-center gap-4 flex-col lg:flex-row">
                    <div className="flex gap-4 items-center justify-center">
                        <Reveal><img src={decimalLogo} className="w-24 h-12 " alt="personalportfoliologo" /></Reveal>
                        <Reveal><h1 className="font-bold lg:text-2xl text-xl">Associate Software Developer at Decimal</h1></Reveal>
                    </div>
                    <div>
                        <Reveal><h4>Jan 2022 - Feb 2023</h4></Reveal>
                    </div>
                </div>
                <div className="pt-6 text-zinc-300">
                    <Reveal><p>As a Frontend Developer, I was responsible for building a robust and user-friendly web application using Vahana, vFlow, and vConnect. I integrated backend APIs to dynamically display product information, pricing, and user details, utilizing vConnect HTTP services for efficient data handling and error management. Collaborating closely with designers, I contributed to creating responsive and accessible user interfaces with a strong focus on usability. Additionally, I conducted thorough unit and integration testing to ensure the application's performance, reliability, and smooth user experience</p></Reveal>
                </div>
            </div></Reveal>
        </div>
    </div>
}

export default ExperienceSection