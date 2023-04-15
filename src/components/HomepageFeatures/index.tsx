import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Show off how hot your takes are. 🔥',
    Svg: require('@site/static/img/undraw_analytics_re_dkf8.svg').default,
    description: (
      <>
        You've just written some awesome content. It's blown up, picked up by Reddit and Hacker News.
        Show off your blogging prowess to potential visitors with a hit counter.

      </>
    ),
  },
  {
    title: 'Built with React and Theme-UI. 🚀',
    Svg: require('@site/static/img/undraw_tailwind_css_1egw.svg').default,
    description: (
      <>
        Don't like my design choices? No problem. You can easily customize the look and feel of your hit counter
        with Theme-UI to make it your own.
      </>
    ),
  },
  {
    title: 'Composable and extendable. 🧩',
    Svg: require('@site/static/img/undraw_dark_mode_2xam.svg').default,
    description: (
      <>
       If you're familiar with React, Tailwind, and Typescript, you've won half the battle. Need dark mode?
       I got you. Just add a few lines of code and you're good to go.   
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
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
