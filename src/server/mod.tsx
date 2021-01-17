import {
  dirname,
  extname,
  fromFileUrl,
  join,
  opine,
  React,
  renderFileToString,
  renderToString,
  serveStatic,
} from "./deps.ts";
import { App } from "../components/App.tsx";

const app = opine();
const __dirname = fromFileUrl(dirname(import.meta.url));

app.engine(".html", renderFileToString);
app.set("views", join(__dirname, "..", "views"));
app.use(serveStatic(join(__dirname, "..", "public")));
app.set("view engine", "html");

app.use("/api/v1/doggos", (req, res) => {
  const count = parseInt(req.query.count);
  const doggos = [...new Array(count)].map((_, index) => ({
    id: index + 1,
    alt: "A cute doggo",
    src: `https://placedog.net/400/225?id=${index + 1}`,
  }));

  res.json(doggos);
});

app.get("/", (req, res) => {
  const app = <App isServer={true} />;
  const content = renderToString(app);
  const scripts = `<script type="module" src="/js/mod.js"></script>`;

  res.set("cache-control", "no-store").render("main", {
    content,
    scripts,
    title: "React Example",
  });
});

app.listen(3000, () => console.log("Opine started on port 3000"));
