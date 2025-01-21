import AnchorLink from "react-anchor-link-smooth-scroll";
import { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";
import { LoadingMessage } from "./misc/loading";
import { T, Var } from "gt-next";
export const Header = (props) => {
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [networks, setNetworks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ref, setRef] = useState(null);
  const current = props.current;
  const setCurrent = props.setCurrent;

  useEffect(() => {
    if (props != null && props.data != null) {
      setName(props.data.main.nickname);
      setOccupation(props.data.main.occupation);
      setDescription(props.data.main.description);
      setCity(props.data.main.address.city);
      setNetworks(
        props.data.main.social.map(function (network) {
          return (
            <li key={network.name}>
              <a href={network.url}>
                <i className={network.className}></i>
              </a>
            </li>
          );
        })
      );
      setRef(props.refs["home"]);
      setLoading(false);
    }
  }, [props.data]);
  const [navbar, setNavbar] = useState(false);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    let refs = props.refs;
    if (window.scrollY >= window.innerHeight - 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    // for (const [key, value] of Object.entries(refs)) {
    //     try {
    //         let box = refs[key].current.getBoundingClientRect();
    //         if (window.screenY + 120 >= box.top &&
    //             window.screenY + 120 < box.bottom) {
    //             if (current != key) setCurrent(key);
    //             return;
    //         }
    //     } catch (ex) {
    //     }
    // };
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  return (
    <header id="home" ref={ref}>
      <T id="header">
        <nav id="nav-wrap" className={navbar ? "opaque" : ""}>
          <a
            className={(navbar && isMobile ? "opaque " : " ") + "mobile-btn"}
            href="#nav-wrap"
            title="Show navigation"
          >
            Show navigation
          </a>
          <a
            className={(navbar && isMobile ? "opaque " : " ") + "mobile-btn"}
            href="#home"
            title="Hide navigation"
          >
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className={current == "home" ? "current" : ""}>
              <AnchorLink offset="100" href="#home">
                Home
              </AnchorLink>
            </li>
            <li className={current == "about" ? "current" : ""}>
              <AnchorLink offset="100" href="#about">
                About
              </AnchorLink>
            </li>
            <li className={current == "education" ? "current" : ""}>
              <AnchorLink offset="100" href="#education">
                Education
              </AnchorLink>
            </li>
            <li className={current == "work" ? "current" : ""}>
              <AnchorLink offset="100" href="#work">
                Work Experience
              </AnchorLink>
            </li>
            <li className={current == "projects" ? "current" : ""}>
              <AnchorLink offset="100" href="#projects">
                Projects
              </AnchorLink>
            </li>
            <li className={current == "skills" ? "current" : ""}>
              <AnchorLink offset="100" href="#skills">
                Skills
              </AnchorLink>
            </li>
            <li className={current == "activities" ? "current" : ""}>
              <AnchorLink offset="100" href="#activities">
                Activities
              </AnchorLink>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">
              Hi! I'm <Var>{name}</Var>
            </h1>
            <h2 className="responsive-headline">
              <ReactTyped
                strings={[
                  "I am a Computer Science Student",
                  "I am a Software Engineer",
                  "I am an Entrepreneur",
                ]}
                typeSpeed={35}
                backSpeed={35}
                loop
                smartBackspace
              />
            </h2>
            <hr />
            <ul className="social">
              <Var>{networks}</Var>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <AnchorLink offset="100" href="#about">
            <i className="icon-down-circle"></i>
          </AnchorLink>
        </p>
      </T>
    </header>
  );
};
export default Header;
