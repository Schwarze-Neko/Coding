import Head from 'next/head';
import Link from 'next/link';


export default function Home({ links }) {
  return (
    <>
      <Head>
        <title>ONM Assignment 7</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <img src="/next.svg" alt="Logo"/><br/>
        <h1>ONM Assignment 7</h1>
        <ul>
          {links.map(link => (
            <li key={link.url}>
              <Link href={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export async function getStaticProps() {
  
  const links = [
    { url: "/components/Uebung3", text: "Assignment 3 Component" },
    { url: "/components/Uebung5", text: "Assignment 5 Component" }
  ];

  return {
    props: { links }, 
  };
}
