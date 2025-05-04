import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import LatestUpdateModal from '../components/LandingPageComponents/LatestUpdateModal.jsx';
import FeaturesContainer from '../components/HomePageFeatures/FeaturesContainer.jsx';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const HomepageHeader = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroSection}>
      <LatestUpdateModal update='v2.0.0 is out with built-in css support 🎉' />
      
      <div className={styles.container}>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--lg', styles.button)}
            to="/docs/intro">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

const Home = () => {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      
      <main>
       <FeaturesContainer />
      </main>
    </Layout>
  );
}


export default Home;
