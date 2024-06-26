const ProductDetail = ({
  item: {
    category,
    image,
    price,
    rating: { rate },
    title,
    description,
  },
}: {
  item: itemTypes;
}) => {
  return (
    <li className="products-item">
      <p className="products-item__title">{title}</p>
      <p className="products-item__category">{category}</p>
      <p className="products-item__description">{description}</p>
      <img className="products-item__img" src={image} alt={title} />
      <p className="products-item__price">${price}</p>
      <p className="products-item__rating">{rate}</p>
    </li>
  );
};

export default ProductDetail;
