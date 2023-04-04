import { useQuery } from "@tanstack/react-query";

export const useMyCustomSuccessfullHook = (someId: string) => {
  const queryKey = "someId " + someId;

  return useQuery({
    queryKey: [queryKey],
    queryFn: () => {
      return "My Response";
    },
  });
};
