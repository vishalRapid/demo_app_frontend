import Head from "next/head";
import Link from "next/link";

import { useRouter } from "next/router";

const blogFromSlug = function ({ params, query, props }) {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Head>
        <title>FIRST BLOGS</title>
      </Head>

      <h1>First Post</h1>
      <h2>
        <Link href="/">← Back to home</Link>
      </h2>
    </>
  );
};

export default blogFromSlug;
