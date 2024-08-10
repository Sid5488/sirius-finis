import app from "./app";
import { env } from "./env";

app.server.listen(env.PORT, () => console.log("Server is running!"));
