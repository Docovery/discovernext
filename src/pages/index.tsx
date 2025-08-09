import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
// import Heading from '@theme/Heading';

// import styles from './index.module.css';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`DiscoverNext`}
      description="Description will go into a meta tag in <head />">
      <div className='flex justify-center items-center flex-col py-40'>
        <h2 className='!text-[60px] !font-medium !font-sans'>Lire et <span className='text-blue-600'>partager</span> les articles</h2>
        <p className='text-[22px] font-sans text-gray-500'>Partagez vos connaissances et vos idées avec la communauté DiscoverNext !</p>
        <div className='flex gap-8 mt-8'>
          <Link
          to={'/docs/intro'}
          className="!text-white bg-blue-600 hover:bg-blue-700 hover:!no-underline focus:ring-4 font-medium rounded-lg px-5 py-3 dark:!text-blue-600 dark:hover:!text-white dark:bg-white dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Commencer
          </Link>
          <Link
          to={"#"}
          className="!text-blue-600 hover:text-blue-700 hover:!no-underline border border-blue-600 dark:border-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-3 focus:outline-none dark:focus:ring-cyan-800 dark:!text-white"
          >
          Voir la demo
          </Link>
        </div>
      </div>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
