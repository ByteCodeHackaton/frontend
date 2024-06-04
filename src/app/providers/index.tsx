import { BrowserRouter } from "./RouterProvider";
import { ChakraProvider } from "@chakra-ui/react";
import { StoreProvider } from "./StoreProvider";

export const Provider = () => {
  return (
    <StoreProvider>
      <ChakraProvider>
        <BrowserRouter />
      </ChakraProvider>
    </StoreProvider>
  );
};
