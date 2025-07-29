import './card.css'

function Card(props) {
  return (
    <div className='card'>
      <img src={props.mahsulot.image} alt="" />
        <h3>{props.mahsulot.title}</h3>
        <h2>narhi:{props.mahsulot.price}</h2>
    </div>
  )
}

export default Card
