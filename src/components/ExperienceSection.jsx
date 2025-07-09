import personalLogo from '.././assets/personalportfoliologo.png'

function ExperienceSection() {
    return <div className="bg-black pb-16 my-2">
        <div className="">
            <h1 className="text-white text-6xl font-bold text-center py-16">My Experience</h1>
        </div>
        <div className="px-40 py-8 flex flex-col gap-16">
            <div className="border-white border rounded-md text-white p-4 py-6">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <img src={personalLogo} className="w-12 h-12 invert" alt="personalportfoliologo" />
                        <h1 className="font-sora font-bold text-2xl">Lead Software Engineer at Google</h1>
                    </div>
                    <div>
                        <h4>Nov 2019 - Present</h4>
                    </div>
                </div>
                <div className="pt-6">
                    <p>As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
                </div>
            </div>
            <div className="border-white border rounded-md text-white p-4 py-6">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <img src={personalLogo} className="w-12 h-12 invert" alt="personalportfoliologo" />
                        <h1 className="font-sora font-bold text-2xl">Lead Software Engineer at Google</h1>
                    </div>
                    <div>
                        <h4>Nov 2019 - Present</h4>
                    </div>
                </div>
                <div className="pt-6">
                    <p>As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
                </div>
            </div>
            <div className="border-white border rounded-md text-white p-4 py-6">
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <img src={personalLogo} className="w-12 h-12 invert" alt="personalportfoliologo" />
                        <h1 className="font-sora font-bold text-2xl">Lead Software Engineer at Google</h1>
                    </div>
                    <div>
                        <h4>Nov 2019 - Present</h4>
                    </div>
                </div>
                <div className="pt-6">
                    <p>As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.</p>
                </div>
            </div>
        </div>
    </div>
}

export default ExperienceSection