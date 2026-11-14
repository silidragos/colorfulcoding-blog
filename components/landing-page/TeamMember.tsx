import Image from "next/image";
import styles from "./Team.module.css";

type TeamMemberProps = {
    img: string;
    memberName: string;
    role: string;
};

export default function TeamMember({ img, memberName, role }: TeamMemberProps) {
    return (
        <article className={styles.member}>
            <Image className={styles.portrait} src={img} alt={memberName} width={320} height={320} />
            <h3>{memberName}</h3>
            <span className={styles.rule} aria-hidden="true" />
            <p>{role}</p>
        </article>
    );
}
