import { Application, oakCors } from "./deps.ts";
import router from "./routes/deno.ts";

const app = new Application();
app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
