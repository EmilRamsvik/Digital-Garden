import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { useEffect, useState } from 'react';

const useRandomArticle = () => {
  const fetchAndPickRandomArticle = async () => {
    try {
      const response = await fetch('/article_list.json');
      const articles = await response.json();
      const randomIndex = Math.floor(Math.random() * articles.length);
      return (articles[randomIndex]);
    } catch (error) {
      console.error('Failed to fetch article list', error);
      return null;
    }
  };

  return fetchAndPickRandomArticle();
};
const random = await useRandomArticle();
console.log('Random:', random);
const FeatureList = [
  {
    linkUrl: '/docs/Garden',
    title: 'Digital Garden',
    imageUrl: require('@site/static/img/digital_garden.png').default,
    description: (
      <>
        My personal digital garden, where my learning experience is stored and cultivated.
        this is meant to be a place where I can store my thoughts and ideas, and hopefully
        it will be a place where people can come to learn and grow as well.
      </>
    ),
  },
  {
    linkUrl: '/blog',
    title: 'Blog',
    imageUrl: require('@site/static/img/blog_image.png').default,
    description: (
      <>
        I also will try to update a blog with my thoughts and ideas, and hopefully
        they will be more of a personal space where I can share my own learnings
        as they have been processed over time.
      </>
    ),
  },
  {
    linkUrl: random["path"],
    title: 'Read a random article',
    imageUrl: require('@site/static/img/random_page_image.jpeg').default,
    description: (
      <>
        Start the Journey by reading about {random["title"]},
      </>
    ),
  },
];

function Feature({ imageUrl, title, description, linkUrl }) {
  let feature_container;
  feature_container = (
    <>
      <div className="text--center">
        {/* Use an img tag here and pass the PNG image URL as src */}
        <img
          src={imageUrl}
          className={styles.featureImage}
          alt={title}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </>
  );
  if (linkUrl === null) {
    return (
      <div className={clsx('col col--4')}>
        {feature_container}
      </div>
    );
  } else {
    return (
      <div className={clsx('col col--4')}>
        <Link to={linkUrl}>
          {feature_container}
        </Link>
      </div>
    );
  }
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
