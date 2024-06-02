import { Link } from "react-router-dom";

export const ProductItem = ({
  category,
  image,
  price,
  rating,
  title,
  id,
}: itemTypes) => {
  return (
    <li className="products-item">
      <Link to={`/products/${id}`}>
        <p className="products-item__title">{title}</p>
        <p className="products-item__category">{category}</p>
        <img className="products-item__img" src={image} alt={title} />
        <p className="products-item__price">${price}</p>
        <p className="products-item__rating">
          {rating.rate} & {rating.count}
        </p>
      </Link>
    </li>
  );
};
