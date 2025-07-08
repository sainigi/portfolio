import SkillButton from "./SkillButton"
import FigmaIcon from '.././assets/FigmaIcon.svg'
import ExpressIcon from '.././assets/ExpressIcon.svg'
import GitIcon from '.././assets/GitIcon.svg'
import JavscriptIcon from '.././assets/JavscriptIcon.svg'
import MongoDbIcon from '.././assets/MongoDbIcon.svg'
import NestIcon from '.././assets/NestIcon.svg'
import NextjsIcon from '.././assets/NextjsIcon.svg'
import NodejsIcon from '.././assets/NodejsIcon.svg'
import PostgresSqlIcon from '.././assets/PostgresSqlIcon.svg'
import SocketIcon from '.././assets/SocketIcon.svg'
import SassIcon from '.././assets/SassIcon.svg'
import ReactIcon from '.././assets/ReactIcon.svg'
import TailwindcssIcon from '.././assets/TailwindcssIcon.svg'
import TypeScriptIcon from '.././assets/TypeScriptIcon.svg'

function Skills() {
    return <div className="my-30">
            <div className="flex justify-center my-24">
                <h1 className="text-6xl">My <span className="font-bold">Skills</span></h1>
            </div>
            <div className="grid grid-flow-row grid-cols-5 gap-8">
                <SkillButton skillIconName={ReactIcon} skillText={"React"}/>
                <SkillButton skillIconName={JavscriptIcon} skillText={"Javascript"}/>
                <SkillButton skillIconName={NodejsIcon} skillText={"Node JS"}/>
                <SkillButton skillIconName={TailwindcssIcon} skillText={"Tailwindcss"}/>
                <SkillButton skillIconName={TypeScriptIcon} skillText={"TypeScript"}/>
                <SkillButton skillIconName={PostgresSqlIcon} skillText={"Postgres SQL"}/>
                <SkillButton skillIconName={SassIcon} skillText={"Sass"}/>
                <SkillButton skillIconName={NextjsIcon} skillText={"Next JS"}/>
                <SkillButton skillIconName={GitIcon} skillText={"Git"}/>
                <SkillButton skillIconName={FigmaIcon} skillText={"Figma"}/>
            </div>
    </div>
}

export default Skills