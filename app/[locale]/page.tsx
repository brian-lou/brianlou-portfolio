"use client";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { About } from "../../components/about";
import { MyFooter } from "../../components/footer";
import { Header } from "../../components/header";
import { LoadingMessage } from "../../components/misc/loading";
import { Resume } from "../../components/resume";
import Head from "next/head";
import { profile } from "../../utils/profileData";
export default function Home() {
  const [profile, setProfile] = useState("");
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState("");
  const [refs, setRefs] = useState({
    home: useRef(),
    about: useRef(),
    education: useRef(),
    work: useRef(),
    projects: useRef(),
    skills: useRef(),
    activities: useRef(),
  });
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  useEffect(() => {
    if (loading) {
      fetch("api/profileinfo", {
        method: "GET",
      })
        .then((res) => {
          if (res.status == 200) {
            return res.json();
          }
        })
        .then((res) => {
          setProfile(res);
          setLoading(false);
        });
    }
  }, []);

  if (loading || typeof window == "undefined") return <LoadingMessage />;
  return (
    <>
      <Head>
        <title>Brian Lou's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex"></meta>
      </Head>
      <Particles
        id="tsparticles"
        url="api/particles"
        init={particlesInit}
        height="100vh"
        width="100vw"
      />
      <Header
        data={profile}
        current={current}
        setCurrent={setCurrent}
        refs={refs}
      />
      <About data={profile} setCurrent={setCurrent} refs={refs} />
      <Resume data={profile} setCurrent={setCurrent} refs={refs} />
      <MyFooter data={profile} />
    </>
  );
}
