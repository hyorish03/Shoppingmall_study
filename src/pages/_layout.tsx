import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getClient } from "../queryClient";

const Layout: React.FC = () => {
  const queryClient = getClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={"loading..."}>
          <Outlet />
        </Suspense>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
};

export default Layout;
