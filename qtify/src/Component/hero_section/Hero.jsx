
import './Hero.css'
import  headphones  from "../../Assets/headphones.png";
const Hero = () => {
  return (
    <div className='container'>
        <div className="content">
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
        </div>
        <div className="head">
            <img src={headphones} alt="headphones" />
        </div>
    </div>
  )
}

export default Hero