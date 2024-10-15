import Link from 'next/link'
import Header from './components/header/header'
import Footer from './components/header/footer/footer'
import Hero from './components/header/hero/hero'

const page = () => {
  return (
    <div>
      <Header></Header>
      <br />
      <Hero></Hero>
      <br />
        <Footer></Footer>
      </div>
  )
}

export default page
