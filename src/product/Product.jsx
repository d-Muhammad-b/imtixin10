import { Link, useParams } from 'react-router-dom'
import Header from '../assets/header/Header'
import './product.css'
import data from '../../public/data'
function product() {
    const {id}=useParams()
  return (
    <div>
      <Header></Header>
      <div className='a'>
<button><Link to="/">back</Link></button>
<div className="b">
<img src={data[id].image} alt="" />
<div className='info'>
    <h1>{data[id].title}</h1>
    <h3>{data[id].category}</h3>
    <h2>{data[id].price+" $"}</h2>
    <h2>{data[id].rating.rate+"-rating  "}{"("+data[id].rating.rate+")"}</h2>
    <h4>{data[id].description}</h4>
</div>

</div>
      </div>


    </div>
  )
}

export default product
