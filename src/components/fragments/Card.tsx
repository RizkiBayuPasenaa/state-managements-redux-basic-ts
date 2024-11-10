import Button from "../elements/Button";

interface CardProps {
  title: string;
  description: string;
  price: number; 
  onAddCart?: () => void;
}

function Card(props : CardProps) {
  const { title, description, price, onAddCart } = props

  return (
    <div className="card-container">
      <h3>{title}</h3>
      <p>{description}</p>
      <h4>{price}</h4>
      <Button type="button" onClick={onAddCart}>Add to Cart</Button>
    </div>
  )
}

export default Card;