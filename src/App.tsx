import * as React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import DisableEditing from "@/components/DisableEditing";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  [
    { path: "/", element: <Index /> },
    { path: "*", element: <NotFound /> },
  ],
  // `future` flags are available in newer router types; cast to `any` to opt in safely
  ({ future: { v7_startTransition: true, v7_relativeSplatPath: true } } as any)
);

const LazyStickyCallButton = React.lazy(() => import("@/components/ui/StickyCallButton"));

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />      <DisableEditing />      {/* Mobile-only persistent Book a Call button (lazy loaded) */}
      <React.Suspense fallback={null}>
        {
          // Lazy load the component using dynamic import so `require` is not used in the browser
        }
        <LazyStickyCallButton />
      </React.Suspense>
      {/* Error boundary to surface runtime errors instead of a blank page */}
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);
export default App;
