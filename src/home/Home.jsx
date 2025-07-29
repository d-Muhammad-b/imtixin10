import './home.css'
import Header from '../assets/header/Header'
import { Link } from 'react-router-dom'
import Card from '../assets/card/Card'
import data from '../../public/data'




function Home() {
  return (
    <div>
      <Header></Header>
      <div className='hero0'>
      <h1>Our product</h1>
  <section className="hero">
  {data.map((mah,i)=>{
    return <Link to={'/product/'+i}><Card mahsulot={mah} key={i}></Card></Link>
  })}
  </section>
      </div>

    </div>
  )
}

export default Home
