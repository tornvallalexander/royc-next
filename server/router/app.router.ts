import { createRouter } from "../createRouter";
import { dashboardRouter } from "server/router/dashboard.router";
import { fundRouter } from "server/router/fund.router";

export const appRouter = createRouter()
  .merge("dashboard.", dashboardRouter)
  .merge("fund.", fundRouter)

export type AppRouter = typeof appRouter;