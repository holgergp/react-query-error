import { renderHook, waitFor } from "@testing-library/react";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../queryClient";
import { ReactNode } from "react";
import { useMyCustomSuccessfullHook } from "./useMyCustomSuccessfullHook";

describe("myCustomSuccessfullHook", () => {
  const someId = "2";

  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  beforeEach(() => {
    queryClient.defaultQueryOptions({
      retry: false,
    });
  });
  afterEach(() => {});

  it("should work with a response", async () => {
    const { result } = renderHook(() => useMyCustomSuccessfullHook(someId), {
      wrapper: wrapper,
    });

    await waitFor(() => {
      return expect(result.current.isSuccess).toBe(true);
    });
  });
});
