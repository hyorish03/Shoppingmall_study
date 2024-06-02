// App.tsx
import Gnb from "./Components/Gnb";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

const App = () => {
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
