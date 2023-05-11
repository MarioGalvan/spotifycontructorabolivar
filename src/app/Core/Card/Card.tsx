import React from "react";
import styles from "../../styles/card.module.scss";

type CardProps = {
  title: string;
  description: string;
  image: string;
};

export const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_image}>
        <img src={image} alt={title} />
      </div>
      <h2 className={styles.card_title}>{title}</h2>
      <p className={styles.card_description}>{description}</p>
    </div>
  );
};
