import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Documentation',
    Svg: require('../../static/img/docs.svg').default,
    description: (
      <>
        Read easy to use <a href="docs/intro">Documentation</a> to solve common errors/problems.
      </>
    ),
  },
  {
    title: 'Blog',
    Svg: require('../../static/img/blog.svg').default,
    description: (
      <>
        To read new updates/enhancements in our app visit <a href="blog">our blog.</a>
      </>
    ),
  },
  {
    title: 'Status Page',
    Svg: require('../../static/img/status.svg').default,
    description: (
      <>
        We provide 99.9% uptime, incase you're facing issue in connecting app, Please check <a target="_blank" href="https://status.oxybill.com/">Status Page.</a>
      </>
    ),
  },
];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
