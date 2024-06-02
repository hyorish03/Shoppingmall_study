import { useQuery } from "@tanstack/react-query";
import { QueryKeys, fetcher } from "../../queryClient";
import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { data } = useQuery<itemTypes>({
    queryKey: [QueryKeys.PRODUCTS, id],
    queryFn: () =>
      fetcher({
        method: "GET",
        path: `/products/${id}`,
      }),
  });

  if (!data) return null;
  return (
    <div>
      <h2>상품 상세</h2>
      <ProductDetail item={data} />
    </div>
  );
};
export default ProductDetailPage;
