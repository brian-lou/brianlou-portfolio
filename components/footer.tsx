import { useEffect, useState } from "react";

export const MyFooter = (props) => {
    const [networks, setNetworks] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (props != null && props.data != null) {
            setNetworks(props.data.main.social.map(function (network) {
                return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
            }))
            setLoading(false);
        }
    }, [props.data])
    return (<>
        <footer>
            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        {networks}
                    </ul>

                    <ul className="copyright">
                        <li>&copy; Copyright 2022 Brian Lou</li>
                    </ul>
                    <a
                        href="https://nextjs.org/"
                        target="_blank"
                    ><h3>Created with NextJS</h3></a>
                </div>
                <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
            </div>
        </footer>
    </>
    )
}