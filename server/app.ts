import express from "express";
import { createServer } from "http";
import cors from "cors";
import routes from "./routes/v1";
const app = express();

app.use(cors());

app.use(express.json());

app.use("/", routes);

const server = createServer(app);
export function listen(port: number) {
  server.listen(port, () =>
    console.log(`Server is running on port ${port}...`)
  );

  return (cb?: () => void) => {
    server.close(cb);
  };
}
