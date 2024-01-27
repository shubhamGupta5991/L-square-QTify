
import styles from'./Hero.module.css'
import  headphones  from "../../Assets/headphones.png";
const Hero = () => {
  return (
    <div className={styles.container_hero}>
        <div className={styles.content_hero}>
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
        </div>
        <div className={styles.head}>
            <img src={headphones} alt="headphones" />
        </div>
    </div>
  )
}

export default Hero