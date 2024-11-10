import Card from "../fragments/Card"
import { addToCart } from "../../slice/cartSlice"
import { useDispatch } from "react-redux";

const products = [
  {
    id: 1,
    name: 'iPhone 13',
    description: 'iphone is availabel on indonesia',
    price: 2000
  },
  {
    id: 2,
    name: 'iPhone 13 Pro',
    description: 'iphone is availabel on indonesia',
    price: 2000
  },
  {
    id: 3,
    name: 'iPhone 13 Pro Max',
    description: 'iphone is availabel on indonesia',
    price: 2000
  },
  {
    id: 4,
    name: 'iPhone 13 Pro Max',
    description: 'iphone is availabel on indonesia',
    price: 2000
  },
]

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <Card
          key={index}
          title={product.name}
          description={product.description}
          price={product.price}
          onAddCart={() => dispatch(addToCart(product))}
        />
      ))}
    </div>
  )
}

export default ProductList;