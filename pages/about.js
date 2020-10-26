import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";

export default function Home(props) {
  return (
    <Layout title='About'>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            About
          </h1>
        </main>
      </div>
      </Layout>
  )
}
