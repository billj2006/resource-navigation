import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/pharmacy/regulatory">
            开始浏览资源 →
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeatureItem({title, description, icon}) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <div className="text--center">
        <div className={styles.featureIcon}>{icon}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="树形结构展示各类资源链接的导航网站">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <FeatureItem
                title="多级导航结构"
                icon="🗂️"
                description="采用树形多级菜单结构，每个菜单项前有图标标识，部分菜单项后有数字标记，菜单项可展开/折叠"
              />
              <FeatureItem
                title="丰富资源分类"
                icon="📚"
                description="包含药物警戒、电子书、AI工具、BT下载等多种资源分类，满足不同领域的资源需求"
              />
              <FeatureItem
                title="现代视觉设计"
                icon="🎨"
                description="背景采用条状切割效果，每行文字下方有统一的背景色带，呈现渐变过渡效果"
              />
            </div>
          </div>
        </section>
        <section className={styles.categories}>
          <div className="container">
            <h2 className={styles.categoriesTitle}>主要资源分类</h2>
            <div className={styles.categoryGrid}>
              <Link to="/docs/pharmacy/regulatory" className={styles.categoryCard}>
                <div className={styles.categoryIcon}>💊</div>
                <h3>药物警戒</h3>
              </Link>
              <Link to="/docs/ebooks/search-engines" className={styles.categoryCard}>
                <div className={styles.categoryIcon}>📚</div>
                <h3>电子书</h3>
              </Link>
              <Link to="/docs/ai-tools/prompt-libraries" className={styles.categoryCard}>
                <div className={styles.categoryIcon}>🤖</div>
                <h3>AI工具</h3>
              </Link>
              <Link to="/docs/bt-download/search-engines" className={styles.categoryCard}>
                <div className={styles.categoryIcon}>🔍</div>
                <h3>BT磁力搜索</h3>
              </Link>
              <Link to="/docs/learning/online-courses" className={styles.categoryCard}>
                <div className={styles.categoryIcon}>🎓</div>
                <h3>学习网站</h3>
              </Link>
              <Link to="/docs/practical-nav/website-collections" className={styles.categoryCard}>
                <div className={styles.categoryIcon}>🧭</div>
                <h3>实用导航</h3>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}