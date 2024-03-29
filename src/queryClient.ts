import { QueryClient } from "@tanstack/react-query";

// Create a client

export const getClient = (() => {
  let client: QueryClient | null = null;
  return () => {
    if (!client) client = new QueryClient({});
    return client;
  };
})();

// Fetcher
const BASE_URL = "https://fakestoreapi.com";

type FetcherTypes = {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  body?: any;
  params?: any;
};

export const fetcher = async ({ method, path, body, params }: FetcherTypes) => {
  try {
    const url = `${BASE_URL}${path}`;
    const fetchOptions: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": BASE_URL,
      },
    };
    const res = await fetch(url, fetchOptions);
    const json = await res.json();
    return json;
  } catch (err) {
    console.log(err);
  }
};
// Query keys
export const QueryKeys = {
  PRODUCTS: "PRODUCTS",
};
