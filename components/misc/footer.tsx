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

                    <a
                        href="https://nextjs.org/"
                        target="_blank"
                    ><h2>Created with NextJS</h2></a>

                </div>
            </div>
        </footer>
    </>
    )
}