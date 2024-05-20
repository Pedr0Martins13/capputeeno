"use client";
import { queryClient } from "@/libs/queryClient";
import { QueryClientProvider } from "react-query";

interface ProviderQueryClientProps {
  children: React.ReactNode;
}

export const ProviderQueryClient = ({ children }: ProviderQueryClientProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
