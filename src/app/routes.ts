import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Track } from "./pages/Track";
import { Book } from "./pages/Book";
import { Portal } from "./pages/Portal";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "track", Component: Track },
      { path: "book", Component: Book },
      { path: "portal", Component: Portal },
    ],
  },
]);
