import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "server/router/app.router";
import { createContext } from "server/createContext";

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  onError({ error}) {
    if (error.code === "INTERNAL_SERVER_ERROR") {
      console.error(error);
    } else {
      console.error(error);
    }
  }
});