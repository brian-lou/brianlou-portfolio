import { useEffect, useState } from "react";
import { LoadingMessage } from "./misc/loading";
import chroma from 'chroma-js';
import Zmage from "react-zmage";

export const Resume = (props) => {

    const [skillmessage, setSkillmessage] = useState('');
    const [education, setEducation] = useState([]);
    const [work, setWork] = useState([]);
    const [skills, setSkills] = useState([]);
    const [projects, setProjects] = useState([]);
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const getColor = (width: String) => {
        let ratio = parseInt(width.replace("%", "")) / 100.0;
        const f = chroma.scale(['red', 'orange', 'yellow', 'green']);
        return f(ratio).toString()
    }
    useEffect(() => {
        const data = props.data.resume;
        const projects = props.data.projects;
        const activities = props.data.activities;
        if (data) {
            setSkillmessage(data.skillmessage);
            setEducation(data.education.map(function (education) {
                return <div key={education.school}><h3>{education.school}</h3>
                    <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
                    <p className="gpa">GPA: {education.gpa}</p>

                    {education.description.map(element => {
                        { return <p className="description">{element}</p> }
                    })}
                    {(education.courses != null) && (<>
                        <p className="bold">Computer Science Courses: </p></>
                    )}
                </div >
            }));
            setWork(data.work.map(function (work) {
                return <div key={work.company}><h3>{work.company}</h3>
                    <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                    <p>{work.description}</p>
                </div>
            }));
            setSkills(data.skills.map(function (skills) {
                let className = 'bar-expand ' + skills.name.toLowerCase();
                const width = skills.level;
                const backgroundColor = getColor(width);
                return <li key={skills.name}>
                    <span style={{ width, backgroundColor }} className={className}></span>
                    <em>{skills.name}</em>
                </li>
            }))
            setLoading(false);
        }
        if (projects) {
            let id = 0;
            setProjects(projects.map(function (projects) {
                let projectImage = "images/portfolio/" + projects.image;

                return (
                    <div key={id++} className="columns portfolio-item">
                        <div className="item-wrap">
                            {/* <Zmage alt={projects.title} src={projectImage} /> */}
                            <div style={{ textAlign: "center" }}>{projects.title}</div>
                        </div>
                    </div>
                );
            }));
        }
        if (activities) {
            setActivities(activities.map(function (activities) {
                return (
                    <div key={activities.name}><h3>{activities.name}</h3>
                        <p className="info">{activities.title}<span>&bull;</span> <em className="date">{activities.years}</em></p>
                        <p>{activities.description}</p>
                    </div>
                );
            }));
        }
    }, [props.data]);

    if (loading || typeof window == 'undefined') return <LoadingMessage />
    return (
        <section id="resume">

            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>

                <div className="nine columns main-col">
                    <div className="row item">
                        <div className="twelve columns">
                            {education}
                        </div>
                    </div>
                </div>
            </div>


            <div className="row separate">

                <div className="three columns header-col">
                    <h1><span>Work Experience</span></h1>
                </div>

                <div className="nine columns main-col">
                    {work}
                </div>
            </div>

            <div className="row separate">

                <div className="three columns header-col">
                    <h1><span>Projects</span></h1>
                </div>
                <div className="nine columns"></div>
                <div className="three columns"></div>
                <div className="nine columns main-col">
                    {projects}
                </div>
            </div>

            <div className="row separate">

                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>

                <div className="nine columns main-col">

                    <p>{skillmessage}
                    </p>

                    <div className="bars">
                        <ul className="skills">
                            {skills}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row separate activities">

                <div className="three columns header-col">
                    <h1><span>Activities</span></h1>
                </div>

                <div className="nine columns main-col">
                    {activities}
                </div>
            </div>
        </section>
    );
}