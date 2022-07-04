
import { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import Typed from "react-typed"
import { LoadingMessage } from './misc/loading';
import { loadFull } from 'tsparticles';
export const Header = (props) => {

    const [name, setName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [description, setDescription] = useState('');
    const [city, setCity] = useState('');
    const [networks, setNetworks] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (props != null && props.data != null) {
            setName(props.data.main.name);
            setOccupation(props.data.main.occupation);
            setDescription(props.data.main.description);
            setCity(props.data.main.address.city);
            setNetworks(props.data.main.social.map(function (network) {
                return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
            }))
            setLoading(false);
        }
    }, [props.data])

    return (
        <header id="home">
            <nav id="nav-wrap">

                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                <ul id="nav" className="nav">
                    <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#education">Education</a></li>
                    <li><a className="smoothscroll" href="#work">Work Experience</a></li>
                    <li><a className="smoothscroll" href="#projects">Projects</a></li>
                    <li><a className="smoothscroll" href="#skills">Skills</a></li>
                    <li><a className="smoothscroll" href="#activities">Activities</a></li>
                </ul>

            </nav>
            <div className="row banner">
                <div className="banner-text">
                    <h1 className="responsive-headline">Hi! I'm {name}</h1>
                    <h2 className="responsive-headline">
                        <Typed
                            strings={[
                                "I am a Computer Science Student",
                                "I am a Software Engineer",
                                "I am a Divison I Swimmer",
                            ]}
                            typeSpeed={50}
                            backSpeed={50}
                            loop
                            smartBackspace
                        />
                    </h2>
                    <hr />
                    <ul className="social">
                        {networks}
                    </ul>
                </div>
            </div>

            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

        </header>
    );
}
export default Header;