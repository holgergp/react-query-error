import { useQuery } from "@tanstack/react-query";

export const useMyCustomHook = (someId: string) => {
  const queryKey = "someId " + someId;

  return useQuery({
    queryKey: [queryKey],
    queryFn: () => {
      throw new Error("FAIIILL");
      //return "Hallo!"
    },
  });
};
