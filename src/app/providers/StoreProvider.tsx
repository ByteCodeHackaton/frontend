import { FC, ReactNode } from "react";
import { store } from "~/shared/lib/react-redux/config";
import { Provider } from "react-redux";

interface StoreProviderProps {
  children: ReactNode;
}

const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export { StoreProvider };
