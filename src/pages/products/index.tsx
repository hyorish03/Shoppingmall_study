import { useQuery } from "@tanstack/react-query";
import { QueryKeys, fetcher } from "../../queryClient";
import { ProductItem } from "../../Components/product/Item";

const ProductList = () => {
  const { data } = useQuery<itemTypes[]>({
    queryKey: [QueryKeys.PRODUCTS],
    queryFn: () =>
      fetcher({
        method: "GET",
        path: "/products",
      }),
  });

  console.log(data);

  return (
    <div>
      <h2>상품 목록</h2>
      <ul className="products">
        {data?.map((item: itemTypes) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};
export default ProductList;
