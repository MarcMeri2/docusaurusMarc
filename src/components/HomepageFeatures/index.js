import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Provant a fer una pagina en docusaurus en 1r de DAW',
    Svg: require('@site/static/img/img1.svg').default,
    description: (
      <>En el IES Lluís Simarro</>
    ),
  },
  {
    title: 'En la asignastura de projecte',
    Svg: require('@site/static/img/img2.svg').default,
    description: (
      <>
        Fent proves en docusaurus
      </>
    ),
  },
  {
    title: 'Muntant la pagina a github',
    Svg: require('@site/static/img/img3.svg').default,
    description: (
      <>
        Provant com funciona
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
