import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Facile à utiliser',
    Svg: require('@site/static/img/feature1.svg').default,
    description: (
      <>
        DiscoverNext est une application de partage d&apos;article scientifique et d&apos;experts. Partagez vos connaissances et vos idées avec la communauté DiscoverNext !
      </>
    ),
  },
  {
    title: 'Rediger et partager des articles',
    Svg: require('@site/static/img/feature2.svg').default,
    description: (
      <>
        DiscoverNext est une application de partage d&apos;article scientifique et d&apos;experts. Partagez vos connaissances et vos idées avec la communauté DiscoverNext !
      </>
    ),
  },
  {
    title: 'Partagez vos connaissances et vos idées',
    Svg: require('@site/static/img/feature3.svg').default,
    description: (
      <>
        DiscoverNext est une application de partage d&apos;article scientifique et d&apos;experts. Partagez vos connaissances et vos idées avec la communauté DiscoverNext !
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center flex justify-center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
