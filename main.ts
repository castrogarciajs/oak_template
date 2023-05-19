import { Application, oakCors } from "./deps.ts";
import router from "./routes/deno.ts";

const app = new Application();

/**@middlewares */
app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes());
app.use(router.allowedMethods());

console.log({ example: "http://localhost:8000" });
await app.listen({ port: 8000 });
