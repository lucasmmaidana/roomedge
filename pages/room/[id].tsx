import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { getRoomData, getRoomsID } from "../../cms";
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
        <h1 className={styles.title}>Roomedge</h1>
        <article key={room.id}>
          <Image src={room.image} width="400" height="250" alt="" />
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

export async function getStaticProps({ params }: { params: { id: string } }) {
  const room = await getRoomData(params.id);
  return {
    props: { room },
  };
}

export async function getStaticPaths() {
  const allRoomsIds = await getRoomsID();
  return {
    paths: allRoomsIds?.map(({ id }) => `/room/${id}`) ?? [],
    fallback: false,
  };
}
