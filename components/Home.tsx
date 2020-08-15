import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { Layout, siteTitle } from "./Layout";

export const Home: React.FC = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a german software developer that currently works with JS/TS.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          <li>Entry 1</li>
          <li>Entry 2</li>
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Link href="/playground">
          <a>Explore the css playground</a>
        </Link>
      </section>
    </Layout>
  );
};
