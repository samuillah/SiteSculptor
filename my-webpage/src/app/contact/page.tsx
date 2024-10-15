import Styles from "../contact/contact.module.css";
import React from 'react'
import Link from 'next/link'
import Header from "../components/header/header";
import Footer from "../components/header/footer/footer";

const ContactPage = () => {
  return (
    <div>
      <Header></Header>
      <br />
    <div className={Styles.container}>
      <h1 className={Styles.header}>This is my Contact Page</h1>
      <ul>
          <li><Link href= "/">Go To Home Page</Link>
          </li>
          <li><Link href = "/about">Go To About Page</Link>
          </li>
        </ul>
        <br />
        <Footer></Footer>
        </div>
    </div>
  )
}

export default ContactPage
