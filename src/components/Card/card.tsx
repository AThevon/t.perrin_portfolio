import Link from "next/link";
import styles from "./card.module.scss";
import Image from "next/image";

type CardProps = {
    title: string;
    description: string;
    banner: string;
    link: string;
};

const Card = ({ title, description, banner, link }: CardProps) => {
    return (
        <div className={styles.card}>
            <Link href={link}>
                {banner && <Image src={banner} alt={title} width={400} height={400} />}
                <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </Link>
        </div>
    );
}

export default Card;