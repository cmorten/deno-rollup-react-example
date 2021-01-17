import { React, hydrate } from "./deps.ts";
import { App } from "../components/App.tsx";

hydrate(
  <App />,
  // @ts-ignore
  document.getElementById("root"),
);
