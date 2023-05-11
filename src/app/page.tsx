import { Card } from "./Core/Card/Card";
import { LayoutApp } from "./layout/LayoutApp";
import styles from "./styles/home.module.scss";

export default function Home() {
  return (
    <LayoutApp>
    <div className={styles.homeContainer}>
    <Card
      title="Card title"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
      image="https://i.scdn.co/image/ab67706f000000022385aac7472b089a2659bf70"
      />
      <Card
      title="Card title"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
      image="https://i.scdn.co/image/ab67706f000000022385aac7472b089a2659bf70"
      />
      <Card
      title="Card title"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
      image="https://i.scdn.co/image/ab67706f000000022385aac7472b089a2659bf70"
      />
      <Card
      title="Card title"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
      image="https://i.scdn.co/image/ab67706f000000022385aac7472b089a2659bf70"
      />
       <Card
      title="Card title"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
      image="https://i.scdn.co/image/ab67706f000000022385aac7472b089a2659bf70"
      />
       <Card
      title="Card title"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
      image="https://i.scdn.co/image/ab67706f000000022385aac7472b089a2659bf70"
      />
       <Card
      title="Card title"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
      image="https://i.scdn.co/image/ab67706f000000022385aac7472b089a2659bf70"
      />
    </div>
    </LayoutApp>
  );
}
