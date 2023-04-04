import { renderHook, waitFor } from "@testing-library/react";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../queryClient";
import { ReactNode } from "react";
import { useMyCustomHook } from "./useMyCustomHook";

describe("myCustomHook", () => {
  const someId = "1a";

  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  beforeEach(() => {
    queryClient.defaultQueryOptions({
      retry: false,
    });
  });
  afterEach(() => {});

  it("should work with an error", async () => {
    const { result } = renderHook(() => useMyCustomHook(someId), {
      wrapper: wrapper,
    });

    await waitFor(() => {
      return expect(result.current.isError).toBe(true);
    });
  });
});
