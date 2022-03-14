import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getRooms } from "../cms";
import styles from "../styles/Home.module.css";
import { Room } from "../types/Room";

type Props = {
  allRooms: Array<Room>;
};

const Home: NextPage<Props> = ({ allRooms }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Roomedge</h1>
        <div className={styles.grid}>
          {allRooms.map((room) => (
            <Link key={room.id} href={`room/${room.id}`}>
              <a>
                <article>
                  <Image src={room.image} width="400" height="250" alt="" />
                  <h2>{room.title}</h2>
                  <p>{room.description}</p>
                  <dl>
                    <dt>Price</dt>
                    <dd>${room.price}</dd>
                  </dl>
                  <dl>
                    <dt>Guests</dt>
                    <dd>{room.guests}</dd>
                  </dl>
                  <dl>
                    <dt>Location</dt>
                    <dd>{room.location}</dd>
                  </dl>
                </article>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const allRooms = (await getRooms()) ?? [];
  return {
    props: { allRooms },
  };
}
