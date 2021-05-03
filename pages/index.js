import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Youtube Clone</title>
        <meta name='description' content="This is an awesome youtube clone" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
    </div>
  )
}
