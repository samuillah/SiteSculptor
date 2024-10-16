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
      <p className= {Styles.paragraph}>Everyone wants to be successful and rich. I also dream of becoming successful in the field I choose although I am still indecisive about the career path I will choose. But I know whatever I choose I will work hard, stay focused and make it big. I also dream of doing something for my country.</p>
      </div>
      <br />
      <div>
        <Footer></Footer>
      
        </div>
    </div>
  )
}

export default AboutPage
