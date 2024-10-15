import Style from "../hero/hero.module.css"
const Hero = () => {
  return (
    <div>
      <h1 className={Style.heading1}>This is Hero section</h1>
      <h2 className={Style.heading2}>Chasing Dreams</h2>
      <p className={Style.paragraph}>Chasing your dreams is a deeply personal journey, one that reflects your unique passions and aspirations. It’s about daring to envision a future that excites you, even when the path ahead is unclear. Each step you take, no matter how small, brings you closer to realizing your potential. Along the way, you’ll face challenges that may test your determination, but these moments are also opportunities for growth and self-discovery. As you pursue what truly matters to you, remember that it’s not just the end goal that counts, but the experiences, lessons, and connections you make along the way. Embrace your journey with open arms, knowing that every effort you invest in your dreams is a testament to your courage and passion.</p>
    </div>
  )
}

export default Hero
