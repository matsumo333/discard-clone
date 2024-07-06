import { FallbackProps } from "react-error-boundary";

export const ErrorFallBack = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <div role="alert">
      <p>Oops! 何かがうまくいきませんでした：</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>再試行</button>
    </div>
  );
};
