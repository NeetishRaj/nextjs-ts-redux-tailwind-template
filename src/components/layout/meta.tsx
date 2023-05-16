import Head from "next/head";


export default function Meta({
  title = "App - all the leads within your reach",
  description = "App is an online platform to get valuable leads"
}: {
  title?: string;
  description?: string;
  image?: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <meta itemProp="image" content={image} /> */}
    </Head>
  );
}