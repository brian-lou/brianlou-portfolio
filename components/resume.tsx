import { useEffect, useState } from "react";
import { LoadingMessage } from "./misc/loading";
import chroma from "chroma-js";
import { T, Var } from "gt-next";

export const Resume = (props) => {
  const [skillmessage, setSkillmessage] = useState("");
  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const refs = props.refs;
  const getColor = (width: String) => {
    let ratio = parseInt(width.replace("%", "")) / 100.0;
    const f = chroma.scale(["red", "orange", "yellow", "green"]);
    return f(ratio).toString();
  };
  useEffect(() => {
    const data = props.data.resume;
    const projects = props.data.projects;
    const activities = props.data.activities;
    if (data) {
      setSkillmessage(data.skillmessage);
      setEducation(
        data.education.map(function (education) {
          return (
            <div key={education.school}>
              <h3>{education.school}</h3>
              <p className="info">
                {education.degree} <span>&bull;</span>
                <em className="date">{education.graduated}</em>
              </p>
              {/* <p className="gpa">GPA: {education.gpa}</p> */}

              {education.description.map((element) => {
                {
                  return (
                    <p className="">
                      <span>&bull; </span>
                      {element}
                    </p>
                  );
                }
              })}
              {education.courses != null &&
                Object.keys(education.courses).map(function (key) {
                  return (
                    <div key={key}>
                      <p className="bold">&bull; {key}</p>
                      <p>{education.courses[key]}</p>
                    </div>
                  );
                })}
            </div>
          );
        })
      );
      setWork(
        data.work.map(function (work) {
          return (
            <div key={work.company}>
              <h3>{work.company}</h3>
              <p className="info">
                {work.title}
                <span>&bull;</span> <em className="date">{work.years}</em>
              </p>
              {Object.keys(work.description).map(function (key) {
                return <p>&bull; {work.description[key]}</p>;
              })}
            </div>
          );
        })
      );
      setSkills(
        data.skills.map(function (skills) {
          let className = "bar-expand " + skills.name.toLowerCase();
          const width = skills.level;
          const backgroundColor = getColor(width);
          return (
            <li key={skills.name}>
              <span
                style={{ width, backgroundColor }}
                className={className}
              ></span>
              <em>{skills.name}</em>
            </li>
          );
        })
      );
    }
    if (projects) {
      setProjects(
        projects.map(function (projects) {
          let projectImage = "images/projects/" + projects.image;
          return (
            <div key={projects.title} className="columns portfolio-item">
              <div className="item-wrap">
                <a href={projects.url} title={projects.title}>
                  <img alt={projects.title} src={projectImage} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>{projects.title}</h5>
                      <p>{projects.category}</p>
                    </div>
                  </div>
                  <div className="link-icon">
                    <i className="fa fa-link"></i>
                  </div>
                </a>
              </div>
            </div>
          );
        })
      );
    }
    if (activities) {
      setActivities(
        activities.map(function (activities) {
          return (
            <div key={activities.name}>
              <h3>{activities.name}</h3>
              <p className="info">
                {activities.title}
                <span>&bull;</span> <em className="date">{activities.years}</em>
              </p>
              {Object.keys(activities.description).map(function (key) {
                return <p>{activities.description[key]}</p>;
              })}
            </div>
          );
        })
      );
    }
    setLoading(false);
  }, [props.data]);

  if (loading || typeof window == "undefined") return <LoadingMessage />;
  return (
    <section id="resume">
      <T id="resume">
        <div id="education" className="row education" ref={refs["education"]}>
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <Var>{education}</Var>
              </div>
            </div>
          </div>
        </div>

        <div id="work" className="row separate" ref={refs["work"]}>
          <div className="three columns header-col">
            <h1>
              <span>Work Experience</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <Var>{work}</Var>
          </div>
        </div>

        <section id="projects" ref={refs["projects"]}>
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Projects</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                <Var>{projects}</Var>
              </div>
            </div>
          </div>
        </section>

        <div id="skills" className="row separate" ref={refs["skills"]}>
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <p>
              <Var>{skillmessage}</Var>
            </p>

            <div className="bars">
              <ul className="skills">
                <Var>{skills}</Var>
              </ul>
            </div>
          </div>
        </div>
        <div
          id="activities"
          className="row separate activities"
          ref={refs["activities"]}
        >
          <div className="three columns header-col">
            <h1>
              <span>Activities</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <Var>{activities}</Var>
          </div>
        </div>
      </T>
    </section>
  );
};
