
import { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { MyFooter } from '../components/misc/footer';
import { Header } from '../components/misc/header';
import { LoadingMessage } from '../components/misc/loading';
import Head from '../node_modules/next/head';
import { profile } from '../utils/profileData'
export default function Home() {

  const [profile, setProfile] = useState('');
  const [loading, setLoading] = useState(true);

  const particlesInit = async (main) => {
    await loadFull(main);
  };
  useEffect(() => {
    if (loading) {
      fetch('api/profileinfo', {
        method: 'GET',
      }).then((res) => {
        if (res.status == 200) {
          return res.json();
        }
      }).then((res) => {
        setProfile(res);
        setLoading(false);
      })
    }
  }, []);

  if (loading || typeof window == 'undefined') return <LoadingMessage />

  return (<>
    <Head>
      <title>Brian Lou</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Particles
      id="tsparticles" url="api/particles"
      init={particlesInit}
      height="100vh" width="100vw" />
    <Header data={profile} />
    <MyFooter data={profile} />
  </>
  )
}
