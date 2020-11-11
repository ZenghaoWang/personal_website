import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zenghao's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hi! I'm Zenghao.</h1>

        <p className={styles.description}>
          I'm a 3rd year student at the{" "}
          <span className="highlight-tertiary">University of Toronto</span>{" "}
          studying <span className="highlight-tertiary">computer science</span>,{" "}
          <span className="highlight-tertiary">mathematics</span>, and{" "}
          <span className="highlight-tertiary">Roman history</span>.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel
          rutrum sem, ultrices tristique eros. Duis viverra efficitur turpis
          vitae tincidunt. Duis nec magna risus. Nunc lobortis vulputate orci ac
          pharetra. Praesent et ex magna. Phasellus pellentesque maximus lorem,
          sed malesuada libero. Duis suscipit tristique urna, in gravida nisl
          aliquam ac. Aenean fermentum ipsum et nisi facilisis imperdiet.
          Vestibulum pharetra nulla id semper blandit. Integer cursus est metus,
          a accumsan elit tempus ac. Pellentesque tempus suscipit nibh dictum
          facilisis. Vestibulum semper eleifend fermentum. Vivamus tincidunt
          gravida aliquet. Etiam at convallis nunc. Phasellus semper, felis vel
          sagittis lacinia, mauris nisi vestibulum turpis, congue porttitor
          lectus arcu at eros. Aenean urna lectus, pretium ac lobortis placerat,
          mattis ac augue. Curabitur pellentesque eros id ultrices tempus. Nunc
          libero dolor, dapibus nec tincidunt ut, dignissim vitae massa.
          Pellentesque malesuada elit sapien, et congue sem volutpat vel.
          Praesent elementum venenatis congue. Vestibulum quis pellentesque
          nunc, at egestas dui. Nullam in elit scelerisque, rutrum est a,
          sagittis mi. Ut iaculis massa id suscipit tincidunt. Duis molestie
          facilisis enim at elementum. Nullam bibendum dui mi, sit amet semper
          risu
        </p>

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>
    </div>
  );
}
