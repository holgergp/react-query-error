import { useQuery } from "@tanstack/react-query";

export const useMyCustomFailingHook = (someId: string) => {
  const queryKey = "someId " + someId;

  return useQuery({
    queryKey: [queryKey],
    queryFn: () => {
      throw new Error("My response fails!");
    },
  });
};
