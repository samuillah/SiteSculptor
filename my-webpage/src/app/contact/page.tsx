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
      <p className= {Styles.paragraph}>You just go after your wish. As soon as you start to pursue a dream, your life wakes up and everything has meaning.</p>
      </div>
      <br />
      <div>
        <Footer></Footer>
        </div>
    </div>
  )
}

export default ContactPage
