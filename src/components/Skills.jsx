import SkillButton from "./SkillButton"
import FigmaIcon from '.././assets/skills/FigmaIcon.svg'
import ExpressIcon from '.././assets/skills/ExpressIcon.svg'
import GitIcon from '.././assets/skills/GitIcon.svg'
import JavscriptIcon from '.././assets/skills/JavscriptIcon.svg'
import MongoDbIcon from '.././assets/skills/MongoDbIcon.svg'
import NestIcon from '.././assets/skills/NestIcon.svg'
import NextjsIcon from '.././assets/skills/NextjsIcon.svg'
import NodejsIcon from '.././assets/skills/NodejsIcon.svg'
import PostgresSqlIcon from '.././assets/skills/PostgresSqlIcon.svg'
import SocketIcon from '.././assets/skills/SocketIcon.svg'
import SassIcon from '.././assets/skills/SassIcon.svg'
import ReactIcon from '.././assets/skills/ReactIcon.svg'
import TailwindcssIcon from '.././assets/skills/TailwindcssIcon.svg'
import TypeScriptIcon from '.././assets/skills/TypeScriptIcon.svg'
import JqueryIcon from '.././assets/skills/JqueryIcon.png'
import AngularIcon from '.././assets/skills/AngularIcon.png'
import JavaIcon from '.././assets/skills/JavaIcon.png'
import PythonIcon from '.././assets/skills/PythonIcon.png'
import { Reveal } from "../utils/Reveal"

function Skills() {
    return <div className="lg:my-30 lg:px-48 pt-5 my-16 px-4" id="skills-section">
        <div className="flex justify-center lg:my-24 mb-16">
            <Reveal><h1 className="lg:text-6xl text-4xl py-2">My <span className="font-extrabold">Skills</span></h1></Reveal>
        </div>
        <div className="grid grid-flow-row lg:grid-cols-5 grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <SkillButton skillIconName={ReactIcon} skillText={"React"} />
            <SkillButton skillIconName={AngularIcon} skillText={"Angular"} />
            <SkillButton skillIconName={JqueryIcon} skillText={"jQuery"} />
            <SkillButton skillIconName={JavscriptIcon} skillText={"Javascript"} />
            <SkillButton skillIconName={TypeScriptIcon} skillText={"TypeScript"} />
            <SkillButton skillIconName={PostgresSqlIcon} skillText={"Postgres SQL"} />
            <SkillButton skillIconName={TailwindcssIcon} skillText={"Tailwindcss"} />
            <SkillButton skillIconName={PythonIcon} skillText={"Python"} />
            <SkillButton skillIconName={JavaIcon} skillText={"Java"} />
            <SkillButton skillIconName={GitIcon} skillText={"Git"} />
            {/* <SkillButton skillIconName={FigmaIcon} skillText={"Figma"}/> */}
        </div>
    </div>
}

export default Skills