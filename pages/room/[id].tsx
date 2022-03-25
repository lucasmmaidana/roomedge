import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { getRoomData, getRoomsID } from "../../cms";
import Header from "../../components/Header";
import styles from "../../styles/Home.module.css";
import { Room } from "../../types/Room";

type Props = {
  room: Room;
};

const Home: NextPage<Props> = ({ room }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{room.title}</title>
        <meta name="description" content={room.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Link href="/" passHref>
          <a
            style={{
              marginBottom: "1em",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
            </svg>
            Go back
          </a>
        </Link>
        <article key={room.id} className={styles.roomBody}>
          <Image src={room.image} width="400" height="250" alt="" />
          <div>
            <h2>{room.title}</h2>
            <p>{room.description}</p>
            <dl className={styles.dl}>
              <dt>Price</dt>
              <dd className={styles.dd}>${room.price}</dd>
            </dl>
            <dl className={styles.dl}>
              <dt>Guests</dt>
              <dd className={styles.dd}>{room.guests}</dd>
            </dl>
            <dl className={styles.dl}>
              <dt>Location</dt>
              <dd className={styles.dd}>{room.location}</dd>
            </dl>
          </div>
        </article>
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const room = await getRoomData(params?.id);
  return {
    props: { room },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allRoomsIds = await getRoomsID();
  return {
    paths: allRoomsIds?.map(({ id }) => `/room/${id}`) ?? [],
    fallback: false,
  };
};
