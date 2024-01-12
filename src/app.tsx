// App.tsx
import { QueryClientProvider } from "react-query";
import Gnb from "./Components/Gnb";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getClient } from "./queryClient";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

const App = () => {
  const queryClient = getClient();
  const elem = useRoutes(routes);

  return (
    <div>
      <Gnb />
      {elem}
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
};

export default App;
