import Head from "next/head";
import Image from "next/image";
import Layout from "../features/layout/Layout";
import Home from "../features/home";
export default function HomePage() {
  return (
    <div>
      <Head>
        <title>inBillo</title>
        <meta
          name="description"
          content="inBillo is an operator, which delivers functionality of financial liability management."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}
