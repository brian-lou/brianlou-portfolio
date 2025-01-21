import { Link } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { LoadingMessage } from "./misc/loading";
import { T, Var } from "gt-next";

export const About = (props) => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [profilepic, setProfilepic] = useState("");
  const [resume, setResume] = useState("");
  const [loading, setLoading] = useState(true);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (props != null && props.data != null) {
      setName(props.data.main.name);
      setBio(props.data.main.bio);
      setProfilepic(props.data.main.image);
      setEmail(props.data.main.email);
      setResume(props.data.main.resumedownload);
      setRef(props.refs["about"]);
      setLoading(false);
    }
  }, [props.data]);
  if (loading || typeof window == "undefined") return <LoadingMessage />;
  return (
    <section id="about" ref={ref}>
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Brian Lou Profile Picture"
          />
        </div>
        <div className="nine columns main-col">
          <T id="about-me">
            <h2>About Me</h2>
            <p>
              <Var>{bio}</Var>
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>
                    <Var>{name}</Var>
                  </span>
                  <br />
                  <span>
                    Email: <Var>{email}</Var>
                  </span>
                </p>
              </div>
            </div>
          </T>
        </div>
      </div>
    </section>
  );
};
