import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';  /* react-bootstrap */
import Container from 'react-bootstrap/Container';  /* container element */
import styles from '../styles/Home.module.css'; /* stylesheet */


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cucamelon</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;500;700&display=swap" rel="stylesheet"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Cucamelon</a>
        </h1>

        <Container className={styles.fruit}>    
          <a href="#">
            <div className={styles.skin}>
              <div className={styles.flesh}>
                <div className={styles.seedsContainer}>
                  <div className={styles.seed}></div>
                  <div className={styles.seed}></div>
                  <div className={styles.seed}></div>
                  <div className={styles.seed}></div>
                  <div className={styles.seed}></div>
                  <div className={styles.seed}></div>
                  <div className={styles.seed}></div>
                  <div className={styles.seed}></div>
                  <div className={styles.seed}></div>
                  <div className={styles.seed}></div>
                  <div className={styles.seed}></div>
                  <div className={styles.seed}></div>
                  <div className={styles.seed}></div>
                  <div className={styles.seed}></div>
                  <div className={styles.seed}></div>
                </div>
              </div>
            </div>
          </a>   
        </Container>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Cursos &rarr;</h3>
            <p>Recent workshops.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>About Us &rarr;</h3>
            <p>Learn more about us.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Products &rarr;</h3>
            <p>Current products.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
