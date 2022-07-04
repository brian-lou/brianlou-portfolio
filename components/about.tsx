import { useEffect, useState } from "react";
import { LoadingMessage } from "./misc/loading";

export const About = (props) => {

    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [email, setEmail] = useState('');
    const [profilepic, setProfilepic] = useState('');
    const [resume, setResume] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (props != null && props.data != null) {
            setName(props.data.main.name);
            setBio(props.data.main.bio);
            setProfilepic(props.data.main.image);
            setEmail(props.data.main.email);
            setResume(props.data.main.resumedownload);
            setLoading(false);
        }
    }, [props.data])
    if (loading || typeof window == 'undefined') return <LoadingMessage />
    return (
        <section id="about">
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src={profilepic} alt="Brian Lou Profile Picture" />
                </div>
                <div className="nine columns main-col">
                    <h2>About Me</h2>

                    <p>{bio}</p>
                    <div className="row">
                        <div className="columns contact-details">
                            <h2>Contact Details</h2>
                            <p className="address">
                                <span>{name}</span><br />
                                <span>{ }<br />
                                    { } { }, { }
                                </span><br />
                                <span>{ }</span><br />
                                <span>{email}</span>
                            </p>
                        </div>
                        <div className="columns download">
                            <p>
                                <a href={resume} className="button"><i className="fa fa-download"></i>Download Resume</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}