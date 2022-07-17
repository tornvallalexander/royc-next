import { createRouter } from "../createRouter";
import { clientRouter } from "server/router/client.router";
import { fundRouter } from "server/router/fund.router";

export const appRouter = createRouter()
  .merge("client.", clientRouter)
  .merge("fund.", fundRouter)

export type AppRouter = typeof appRouter;