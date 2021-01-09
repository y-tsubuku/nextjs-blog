import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link'

import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm <strong>Yohei</strong>. I'm a software engineer in Japan.</p>
        <p>
          You can...
        </p>
        <ul>
          <li>contact me on{' '}<a href="https://twitter.com/y_tsubuku" target="_blank" rel="noopener noreferrer">Twitter</a><br /></li>
          <li>see my posts on{' '}<a href="https://qiita.com/kurkuru" target="_blank" rel="noopener noreferrer">Qiita</a><br /></li>
          <li>see my codes on{' '}<a href="https://github.com/y-tsubuku" target="_blank" rel="noopener noreferrer">Github</a></li>
        </ul>
      </section>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
