import Head from 'next/head';
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
const Layout = (props) => (

  <div>
    
    <Head>
      <title>{props.title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://bootswatch.com/4/minty/bootstrap.min.css"></link>
    </Head>
    <Navbar activeNode={props.title}></Navbar>
    {props.children}
    <footer className={styles.footer}>
          <a
            href="https://github.com/pablopt"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by PabLab 
          </a>
        </footer>
  </div>
);

export default Layout;