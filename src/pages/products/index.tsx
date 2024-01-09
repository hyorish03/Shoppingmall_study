import { useQuery } from "@tanstack/react-query";
import { QueryKeys, fetcher } from "../../queryClient";
import { ProductItem } from "../../Components/ProductItem";

const index = () => {
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
      <ul className="products">
        {data?.map((item: itemTypes) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};
export default index;
