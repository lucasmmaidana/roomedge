import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { Room } from "../../types/Room";
import styles from "./RoomCard.module.css";

type Props = {
  room: Room;
};

const RoomCard: FunctionComponent<Props> = ({ room }) => {
  return (
    <Link key={room.id} href={`room/${room.id}`}>
      <a>
        <article>
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
      </a>
    </Link>
  );
};
export default RoomCard;
