import { createBrowserRouter } from "react-router";
import { SiteLayout } from "./components/SiteLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SiteLayout,
    children: [
      { index: true, lazy: async () => ({ Component: (await import("./pages/Home")).Home }) },
      { path: "work/:slug", lazy: async () => ({ Component: (await import("./pages/ProjectDetail")).ProjectDetail }) },
      { path: "about", lazy: async () => ({ Component: (await import("./pages/About")).About }) },
      { path: "resume", lazy: async () => ({ Component: (await import("./pages/Resume")).Resume }) },
      { path: "*", lazy: async () => ({ Component: (await import("./pages/NotFound")).NotFound }) },
    ],
  },
]);
