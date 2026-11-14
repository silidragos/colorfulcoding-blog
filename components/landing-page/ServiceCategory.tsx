import Image from "next/image";
import type { ReactNode } from "react";
import styles from "@/app/services.module.css";

type ServiceProps = {
  children: ReactNode;
  imgSrc: string;
  imgAlt: string;
  content: string;
};

export default function Service({ children, imgSrc, imgAlt, content }: ServiceProps) {
  return (
    <article className={styles.service}>
      <Image src={imgSrc} alt={imgAlt} width={96} height={96} />
      {children}
      <p>{content}</p>
    </article>
  );
}
