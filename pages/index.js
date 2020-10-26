import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title='Home'>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to Listiversify (yes, all the good names were taken)!
          </h1>
        </main>
      </div>
      </Layout>
  )
}
