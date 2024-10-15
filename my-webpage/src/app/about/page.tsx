import Styles from "../about/about.module.css";
import React from 'react'
import Link from 'next/link'
import Header from "../components/header/header";
import Footer from "../components/header/footer/footer";

const AboutPage = () => {
  return (
    <div>
      <Header></Header>
      <br />
    <div className={Styles.container}>
      <h1 className={Styles.header}>This is my About Page</h1>
      <ul>
          <li><Link href= "/">Go To Home Page</Link>
          </li>
          <li><Link href = "/contact">Go To Contact Page</Link>
          </li>
        </ul>
        <br />
        <Footer></Footer>
        </div>
    </div>
  )
}

export default AboutPage
