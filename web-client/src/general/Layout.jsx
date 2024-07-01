import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../components/ErrorFallback.jsx";
import Web3ModalProvider from "../context";
import { config } from "../config";

export const Layout = ({ children }) => {
  return (
    <Web3ModalProvider config={config}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {children}
      </ErrorBoundary>
    </Web3ModalProvider>
  );
};
