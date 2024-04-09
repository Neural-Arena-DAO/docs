import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  url: string;
  icon: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Documentation',
    url: 'documents/main',
    icon: '📚',
    description: (
      <center>
        Soon...
      </center>
    ),
  },
  {
    title: 'Whitepaper',
    url: 'whitepaper/intro',
    icon: '📖',
    description: (
      <center>
      </center>
    ),
  },
  {
    title: 'Blog',
    url: 'blog',
    icon: '📰',
    description: (
      <center>
        Soon...
      </center>
    ),
  },
];

function Feature({title, url, icon, description}: FeatureItem) {
  return (
      <div className={clsx('col col--4')}>
        <a href={url}>
            <div className="text--center">
              <span className={styles.feature}>{icon}</span>
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">{title}</Heading>
              <p>{description}</p>
            </div>
        </a>
      </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
