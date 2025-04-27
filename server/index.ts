import getPort, { portNumbers } from "get-port";
import { listen } from "./app";

const port = await getPort({ port: portNumbers(3000, 3100) });
let dispose = listen(port);

if (import.meta.hot) {
  import.meta.hot.accept("/app.ts", () => {
    dispose(() => {
      import("./app").then(({ listen }) => {
        dispose = listen(port);
      });
    });
  });
}
