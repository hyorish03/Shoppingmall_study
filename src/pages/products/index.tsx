import { useQuery } from "@tanstack/react-query";
import { QueryKeys, fetcher } from "../../queryClient";

const index = () => {
  const { data } = useQuery({
    queryKey: [QueryKeys.PRODUCTS],
    queryFn: () =>
      fetcher({
        method: "GET",
        path: "/products",
      }),
  });
  console.log(data);

  return <div>상품목록</div>;
};
export default index;
